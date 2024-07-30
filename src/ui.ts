import { Pelicula, TipoFlecha, nombreClases } from "./model";
import { flechas } from "./const";

const añadirFlecha = (
    contenedor: HTMLDivElement,
    tipo: TipoFlecha,
): void => {
    const divFlecha = document.createElement("div");
    divFlecha.className = `flecha-${tipo}`;

    const imgFlecha = document.createElement("img");
    imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
    divFlecha.appendChild(imgFlecha);

    divFlecha.addEventListener("click", () => {
        if (tipo === "izquierda") {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior: "smooth",
            });
        } else {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior: "smooth",
            });
        }
    });

    contenedor.appendChild(divFlecha);
};


const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
    const titulo = document.createElement("h2")
    titulo.textContent = tituloSeccion
    return titulo;
};

const crearContenedor = (nombreClase: string, contenedor: HTMLDivElement): HTMLDivElement => {
    const div = document.createElement("div");
    div.classList.add(nombreClase);
    div.id = nombreClase;
    contenedor.appendChild(div);
    return div;
}

const agregarTitulo = (tituloSeccion: string, contenedor: HTMLDivElement): void => {
    // crear un titulo
    const titulo = crearTitulo(tituloSeccion);
    // añadir el titulo al div
    contenedor.appendChild(titulo);
}

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
    añadirFlecha(peliculaContenedor, "izquierda");
    añadirFlecha(peliculaContenedor, "derecha");
};

const pintarPelicula = (pelicula: Pelicula, peliculaContenedor: HTMLDivElement): void => {
    const divPelicula = crearContenedor(nombreClases.pelicula, peliculaContenedor);
    divPelicula.innerHTML = `
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
    <h3>${pelicula.titulo}</h3>
    `;
}

const pintarPeliculas = (peliculas: Pelicula[], peliculaContenedor: HTMLDivElement) => {
    peliculas.forEach((pelicula) => {
        // crear div para cada peliculas
        pintarPelicula(pelicula, peliculaContenedor);

    });
}


export const pintarListaPeliculas = (
    tituloSeccion: string,
    listaPeliculas: Pelicula[],
) => {
    // obtener div principal
    const appDiv = document.getElementById("principal");
    // comprobar que existe
    if (appDiv && appDiv instanceof HTMLDivElement) {

        // crear un div para peliculas
        const crearDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv);

        // crear un titulo
        agregarTitulo(tituloSeccion, crearDivPeliculas);

        // crear div lista de peliculas
        const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas, crearDivPeliculas);

        // crear div para contenedor de peliculas
        const divPeliculasContenedor = crearContenedor(nombreClases.peliculasContenedor, divListaPeliculas)

        // añadir flechas
        pintarFlechas(divPeliculasContenedor);

        // pintar peliculas
        pintarPeliculas(listaPeliculas, divPeliculasContenedor);

    } else {
        console.error("No se encontró el elemento");
    }
}

