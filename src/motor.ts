import { FiltroPeliculas, Pelicula, TipoGenero } from "./model";

export const filtrarPeliculasPorGenero = (
    peliculas: Pelicula[],
    genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculasPorPremio = (
    peliculas: Pelicula[],
): Pelicula[] => peliculas.filter((pelicula) => pelicula.premioGalardon);

export const filtrarPeliculasPorMasVistas = (
    peliculas: Pelicula[],
): Pelicula[] => peliculas.filter((pelicula) => pelicula.masVisto);

export const filtrarPeliculasPorCalificacion = (
    peliculas: Pelicula[],
): Pelicula[] => peliculas.toSorted((peliculaA, peliculaB) => peliculaB.calificacionImdb - peliculaA.calificacionImdb);

export const filtrarPeliculas = (
    peliculas: Pelicula[],
    filtro?: FiltroPeliculas,
): Pelicula[] => {
    if (!filtro) return peliculas;

    switch (filtro.caracteristica) {
        case "genero":
            return filtrarPeliculasPorGenero(peliculas, filtro.genero);
        case "premios":
            return filtrarPeliculasPorPremio(peliculas);
        case "masVistas":
            return filtrarPeliculasPorMasVistas(peliculas);
        case "calificacion":
            return filtrarPeliculasPorCalificacion(peliculas);
        default:
            return peliculas;
    }
}
