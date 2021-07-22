export class Usuario {
    id: number;
    nombre: string
    albumes: Array<any>

    constructor(
        id: number,
        nombre: string,
        albumes: Array<any>,
    ){
        this.id = id;
        this.nombre = nombre;
        this.albumes = albumes
    }
}
