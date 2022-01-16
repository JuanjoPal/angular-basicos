import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  private heroes: string[] = ['Ironman','Spiderman','Hulk','Thor'];
  private heroeBorrado: string = '';

  get Heroes():string[] {
    return this.heroes;
  }

  get HeroeBorrado(): string {
    return this.heroeBorrado;
  }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
