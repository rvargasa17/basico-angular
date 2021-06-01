import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  heroes: string[]=['Hulk','Spiderman','Thor','Ant Man'];
  heroeBorrado: string = ''

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
