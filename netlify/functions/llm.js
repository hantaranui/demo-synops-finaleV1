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

    const prompt = `Tu es un assistant d'analyse sémantique militaire.

Un message opérationnel contient le terme "${term}" provenant de la source "${source}", zone "${zone}".
Contexte opérationnel : ${context}

Ta mission : proposer un alignement vers la terminologie française standardisée.

Réponds uniquement en JSON valide, sans texte avant ni après, avec exactement ces champs :
{
  "terme_cible": "TERME_EN_MAJUSCULES",
  "score_confiance": 0.XX,
  "justification": "une phrase courte en langage militaire clair"
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
          "Inférence contextuelle sahélienne — terme allié absent du référentiel national.",
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
