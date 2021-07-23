export class Cancion {
    id: number;
    titulo: string;
    minutos: number;
    segundos: number;
    interprete: string;

    constructor(
        id: number,
        titulo: string,
        minutos: number,
        segundos: number,
        interprete: string
    ){
        this.id = id,
        this.titulo = titulo,
        this.minutos = minutos,
        this.segundos = segundos,
        this.interprete = interprete
    }
}
