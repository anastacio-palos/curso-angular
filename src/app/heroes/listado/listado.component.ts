import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroe: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  borrarHeroe(){
    this.heroe.shift();
  }

}
