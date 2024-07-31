import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";


document.addEventListener("DOMContentLoaded", () => {
    pintarListaPeliculas(peliculas, { titulo: "Todas las películas" })
    pintarListaPeliculas(peliculas, { titulo: "Películas de aventuras", filtro: { genero: "Aventuras", caracteristica: "genero" } });
    pintarListaPeliculas(peliculas, { titulo: "Películas familiares", filtro: { genero: "Familiar", caracteristica: "genero" } });
    pintarListaPeliculas(peliculas, { titulo: "Películas de animación", filtro: { genero: "Animación", caracteristica: "genero" } })
});