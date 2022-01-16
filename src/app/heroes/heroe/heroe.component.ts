import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    private nombre: string = 'Ironman';
    private edad: number = 45;

    get Nombre(): string {
        return this.nombre;
    }

    get Edad(): number {
        return this.edad;
    }

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre ='Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}