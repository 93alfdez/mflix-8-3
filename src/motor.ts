import { FiltroPeliculas, Pelicula, TipoCaracteristica, TipoGenero } from "./model";

export const filtrarPeliculasPorGenero = (
    peliculas: Pelicula[],
    genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculasPorPremio = (
    peliculas: Pelicula[],
    premio?: TipoCaracteristica
): Pelicula[] => peliculas.filter((pelicula) => pelicula.premioGalardon === true ? false : premio);

export const filtrarPeliculasPorMasVistas = (
    peliculas: Pelicula[],
    masVisto?: TipoCaracteristica
): Pelicula[] => peliculas.filter((pelicula) => pelicula.premioGalardon === true ? false : masVisto);

export const filtrarPeliculasPorCalificacion = (
    peliculas: Pelicula[],
    calificacionImdb?: TipoCaracteristica
): Pelicula[] => peliculas.toSorted((peliculaA, peliculaB) => peliculaA.calificacionImdb - peliculaB.calificacionImdb);

export const filtrarPeliculas = (
    peliculas: Pelicula[],
    filtro?: FiltroPeliculas,
    premios?: FiltroPeliculas,
    masVisto?: FiltroPeliculas,
    calificacionImdb?: FiltroPeliculas
): Pelicula[] => {
    if (!filtro || !premios || !masVisto || calificacionImdb) return peliculas;

    switch (filtro.caracteristica) {
        case "genero":
            return filtrarPeliculasPorGenero(peliculas, filtro.genero);
        case "premios":
            return filtrarPeliculasPorPremio(peliculas, filtro.premios);
        case "masVisto":
            return filtrarPeliculasPorMasVistas(peliculas, filtro.masVisto);
        case "calificacionImdb":
            return filtrarPeliculasPorCalificacion(peliculas, filtro.calificacionImdb);
        default:
            return peliculas;
    }
}
