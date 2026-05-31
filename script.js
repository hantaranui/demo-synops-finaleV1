const STORAGE_KEY = "project-guide-blocks-v3";

const starterBlocks = window.GUIDE_BLOCKS || [
  {
    id: crypto.randomUUID(),
    title: "Objectifs du projet",
    category: "Cadrage",
    source: "Exemple",
    content:
      "Décrire ici la vision du projet, le problème à résoudre, les utilisateurs concernés et le résultat attendu. Ce bloc sert de point d'entrée quand quelqu'un veut comprendre rapidement pourquoi le projet existe.",
  },
  {
    id: crypto.randomUUID(),
    title: "Planning et jalons",
    category: "Organisation",
    source: "Exemple",
    content:
      "Ajouter les grandes dates: démarrage, ateliers, livrables intermédiaires, revue finale et mise en ligne. Indiquer aussi les dépendances importantes ou les décisions attendues.",
  },
  {
    id: crypto.randomUUID(),
    title: "Rôles et responsabilités",
    category: "Équipe",
    source: "Exemple",
    content:
      "Lister les personnes impliquées, leur rôle, leur périmètre de décision et les sujets à leur adresser. Exemple: produit, design, développement, data, communication, sponsor.",
  },
  {
    id: crypto.randomUUID(),
    title: "Livrables attendus",
    category: "Production",
    source: "Exemple",
    content:
      "Préciser les fichiers, pages, prototypes, documents ou démonstrations à produire. Ajouter le format attendu, le niveau de finition et la personne responsable de la validation.",
  },
];

let blocks = loadBlocks();
let selectedCategory = "Tous";
let editingId = null;

const searchInput = document.querySelector("#searchInput");
const filters = document.querySelector("#filters");
const blocksGrid = document.querySelector("#blocksGrid");
const emptyState = document.querySelector("#emptyState");
const resultTitle = document.querySelector("#resultTitle");
const resultNote = document.querySelector("#resultNote");
const resultCount = document.querySelector("#resultCount");
const saveStatus = document.querySelector("#saveStatus");
const editorForm = document.querySelector("#editorForm");
const toggleEditorBtn = document.querySelector("#toggleEditorBtn");
const addBlockBtn = document.querySelector("#addBlockBtn");
const saveBlockBtn = document.querySelector("#saveBlockBtn");
const cancelEditBtn = document.querySelector("#cancelEditBtn");
const blockTitle = document.querySelector("#blockTitle");
const blockCategory = document.querySelector("#blockCategory");
const blockSource = document.querySelector("#blockSource");
const blockContent = document.querySelector("#blockContent");
const exportBtn = document.querySelector("#exportBtn");
const importInput = document.querySelector("#importInput");
const template = document.querySelector("#blockTemplate");

saveBlocks();
render();

searchInput.addEventListener("input", render);
addBlockBtn.addEventListener("click", () => openEditor());
toggleEditorBtn.addEventListener("click", () => {
  const shouldOpen = editorForm.classList.contains("collapsed");
  if (shouldOpen) {
    openEditor();
  } else {
    closeEditor();
  }
});

cancelEditBtn.addEventListener("click", closeEditor);

editorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = blockTitle.value.trim();
  const category = normalizeCategory(blockCategory.value);
  const source = blockSource.value.trim() || "Ajout manuel";
  const content = blockContent.value.trim();

  if (!title || !content) {
    setStatus("Ajoute au moins un titre et un contenu");
    return;
  }

  if (editingId) {
    blocks = blocks.map((block) =>
      block.id === editingId ? { ...block, title, category, source, content } : block,
    );
  } else {
    blocks = [{ id: crypto.randomUUID(), title, category, source, content }, ...blocks];
  }

  saveBlocks();
  closeEditor();
  render();
});

exportBtn.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(blocks, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "guide-projet.json";
  link.click();
  URL.revokeObjectURL(url);
  setStatus("Export prêt");
});

importInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported)) throw new Error("Format incorrect");

    blocks = imported
      .filter((item) => item.title && item.content)
      .map((item) => ({
        id: item.id || crypto.randomUUID(),
        title: String(item.title),
        category: normalizeCategory(item.category),
        source: String(item.source || "Import"),
        content: String(item.content),
        keywords: Array.isArray(item.keywords) ? item.keywords : [],
      }));

    saveBlocks();
    selectedCategory = "Tous";
    render();
    setStatus("Import terminé");
  } catch {
    setStatus("Le fichier importé n'est pas reconnu");
  } finally {
    importInput.value = "";
  }
});

function loadBlocks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const savedBlocks = saved ? JSON.parse(saved) : [];
    return mergeWithStarterBlocks(savedBlocks);
  } catch {
    return normalizeBlocks(starterBlocks);
  }
}

function saveBlocks() {
  blocks = normalizeBlocks(blocks);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
  setStatus("Sauvegardé localement");
}

function normalizeBlocks(items) {
  return items.map((block) => ({
    ...block,
    category: normalizeCategory(block.category),
  }));
}

function mergeWithStarterBlocks(savedBlocks) {
  const normalizedSaved = normalizeBlocks(savedBlocks);
  const normalizedStarter = normalizeBlocks(starterBlocks);

  if (!normalizedSaved.length) return normalizedStarter;

  const savedKeys = new Set(normalizedSaved.map(blockKey));
  const missingStarterBlocks = normalizedStarter.filter((block) => !savedKeys.has(blockKey(block)));
  return [...normalizedSaved, ...missingStarterBlocks];
}

function blockKey(block) {
  return normalize(`${block.title || ""} ${block.category || ""}`);
}

function normalizeCategory(category) {
  const value = String(category || "Sans catégorie").trim();
  const normalized = normalize(value);
  if (normalized.includes("question") && normalized.includes("jury")) return "Questions jury";
  return value;
}

function setStatus(message) {
  saveStatus.textContent = message;
}

function openEditor(block = null) {
  editingId = block?.id || null;
  blockTitle.value = block?.title || "";
  blockCategory.value = block?.category || "";
  blockSource.value = block?.source || "";
  blockContent.value = block?.content || "";
  saveBlockBtn.textContent = editingId ? "Mettre à jour" : "Enregistrer le bloc";
  editorForm.classList.remove("collapsed");
  toggleEditorBtn.setAttribute("aria-expanded", "true");
  blockTitle.focus();
}

function closeEditor() {
  editingId = null;
  editorForm.reset();
  editorForm.classList.add("collapsed");
  toggleEditorBtn.setAttribute("aria-expanded", "false");
}

function render() {
  renderFilters();

  const query = normalize(searchInput.value);
  let visibleBlocks = blocks.filter((block) => {
    const matchesCategory = selectedCategory === "Tous" || block.category === selectedCategory;
    const haystack = searchableText(block);
    return matchesCategory && (!query || haystack.includes(query));
  });

  if (query) {
    visibleBlocks = visibleBlocks.sort((a, b) => scoreBlock(b, query) - scoreBlock(a, query));
  }

  blocksGrid.innerHTML = "";
  visibleBlocks.forEach((block) => blocksGrid.appendChild(createBlockCard(block, query)));

  emptyState.classList.toggle("hidden", visibleBlocks.length > 0);
  resultTitle.textContent = query ? `Recherche: "${searchInput.value}"` : selectedCategory === "Tous" ? "Tous les blocs" : selectedCategory;
  resultNote.textContent = query
    ? "Les réponses de type jury et les titres proches sont placés en priorité."
    : "Guide structuré depuis les documents SynOps.";
  resultCount.textContent = `${visibleBlocks.length} ${visibleBlocks.length > 1 ? "blocs" : "bloc"}`;
}

function renderFilters() {
  const preferredOrder = [
    "Tous",
    "Questions jury",
    "Finale",
    "Pipeline",
    "Technique",
    "Comparaison",
    "Contexte",
    "Innovation",
    "Équipe",
    "Guide",
  ];
  const available = new Set(blocks.map((block) => block.category).filter(Boolean));
  const categories = [
    ...preferredOrder.filter((category) => category === "Tous" || available.has(category)),
    ...[...available].filter((category) => !preferredOrder.includes(category)).sort(),
  ];
  if (!categories.includes(selectedCategory)) selectedCategory = "Tous";

  filters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${category === selectedCategory ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      selectedCategory = category;
      render();
    });
    filters.appendChild(button);
  });
}

function createBlockCard(block, query) {
  const card = template.content.firstElementChild.cloneNode(true);
  card.querySelector(".category").textContent = block.category;
  card.querySelector(".source").textContent = block.source || "Guide";
  card.querySelector("h3").innerHTML = highlight(block.title, query);
  card.querySelector("p").innerHTML = highlight(block.content, query);

  card.querySelector(".edit-btn").addEventListener("click", () => openEditor(block));
  card.querySelector(".edit-footer-btn").addEventListener("click", () => openEditor(block));
  card.querySelector(".delete-btn").addEventListener("click", () => {
    const confirmed = window.confirm(`Supprimer le bloc "${block.title}" ?`);
    if (!confirmed) return;
    blocks = blocks.filter((item) => item.id !== block.id);
    saveBlocks();
    render();
  });

  return card;
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function searchableText(block) {
  return normalize(
    `${block.title} ${block.category} ${block.source || ""} ${(block.keywords || []).join(" ")} ${block.content}`,
  );
}

function scoreBlock(block, query) {
  if (!query) return block.category === "Questions jury" ? 2 : 1;

  const title = normalize(block.title);
  const category = normalize(block.category);
  const content = normalize(block.content);
  let score = 0;

  if (title.includes(query)) score += 40;
  if (category.includes(query)) score += 20;
  if (block.category === "Questions jury") score += 14;
  if (content.includes(query)) score += 8;

  query.split(/\s+/).forEach((word) => {
    if (!word) return;
    if (title.includes(word)) score += 10;
    if (content.includes(word)) score += 2;
  });

  return score;
}

function highlight(text, query) {
  const safeText = escapeHtml(text);
  if (!query) return safeText;

  const words = searchInput.value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);

  if (!words.length) return safeText;
  return safeText.replace(new RegExp(`(${words.join("|")})`, "gi"), "<mark>$1</mark>");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
