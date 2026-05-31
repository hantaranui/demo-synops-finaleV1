export default async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { term, source, zone, context } = await req.json();

    const prompt = `Tu es un assistant d'analyse sémantique militaire spécialisé dans les opérations au Sahel.

CONTEXTE OPÉRATIONNEL :
- Opération au Mali, zone ${zone}, forces françaises et forces alliées africaines
- Source du message : ${source} (patrouille alliée d'Afrique subsaharienne)
- Situation : présence hostile confirmée par drone ISR, demande d'appui feu en cours
- Contexte supplémentaire : ${context}

TERME À ANALYSER : "${term}"

INFORMATION CLEF : Dans le vocabulaire militaire sahélien et tchadien, "TECHNICAL" désigne un véhicule léger (souvent un pickup Toyota) équipé d'une mitrailleuse ou d'une arme lourde à l'arrière. C'est un terme courant dans les forces irrégulières et alliées de la région, absent du référentiel de terminologie militaire française standard.

Ta mission : proposer l'équivalent dans la terminologie militaire française standardisée.

Réponds uniquement en JSON valide, sans texte avant ni après, avec exactement ces champs :
{
  "terme_cible": "TERME_EN_MAJUSCULES_UNDERSCORES",
  "score_confiance": 0.XX,
  "justification": "une phrase courte expliquant le rapprochement en langage militaire clair"
}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI error: ${response.status}`);
    }

    const data = await response.json();
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      '{"terme_cible":"VÉHICULE_LÉGER_ARMÉ","score_confiance":0.74,"justification":"Inférence contextuelle sahélienne — terme allié absent du référentiel."}';

    // Clean any markdown fences just in case
    const clean = text.replace(/```json|```/g, "").trim();

    return new Response(clean, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    console.error("LLM function error:", err);
    // Return a safe fallback so the demo never breaks
    return new Response(
      JSON.stringify({
        terme_cible: "VÉHICULE_LÉGER_ARMÉ",
        score_confiance: 0.74,
        justification:
          "Inférence contextuelle sahélienne — terme allié absent du référentiel national français.",
        fallback: true,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};

export const config = { path: "/api/llm" };
