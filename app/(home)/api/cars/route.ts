import { NextResponse } from "next/server";

// Fonction GET pour récupérer les données des voitures depuis une API externe
export async function GET() {
  // Création d'un contrôleur pour pouvoir annuler la requête fetch si elle dépasse un délai
  const controller = new AbortController();
  // Définition du délai maximal (3 secondes) avant d'abandonner la requête
  const timeOut = setTimeout(() => {
    controller.abort() // Annule la requête fetch si elle dépasse 5 secondes
  }, 50000)
  try { 
    // Envoi de la requête fetch avec le signal du controller pour pouvoir l'annuler
    const response = await fetch("https://example-data.draftbit.com/cars", {
      signal:controller.signal,
    });

    // Vérifie si la réponse est correcte, sinon lève une erreur
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    // Récupère et parse les données au format JSON
    const data = await response.json();
    // Retourne les données avec un statut HTTP 200 (succès)
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    // Si la requête a été annulée à cause du timeout, retourne un message explicite
    // Sinon, retourne le message d'erreur standard
    err.name === "AbortError"
    ? "La réponse a dépassé le delai imparti"
    : err.message;

    // Retourne une réponse d'erreur avec un statut HTTP 500 (erreur serveur)
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    // Nettoie le timeout pour éviter tout déclenchement inutile ou fuite mémoire
    clearTimeout(timeOut)
  }
}
