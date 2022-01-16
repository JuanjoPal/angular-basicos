import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
        <h1>
        {{ titulo }}
        </h1>
        <h3>La base es de {{ base }}</h3>

        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ contador }}</span>
        <button (click)="acumular(-base)">-{{ base }}</button>   
    
    `
})
export class ContadorComponent {
    public titulo: String = 'Contador App';
    public contador: number = 0;
    public base: number = 5;

    public acumular(base: number) {
        this.contador += base;
    }
}