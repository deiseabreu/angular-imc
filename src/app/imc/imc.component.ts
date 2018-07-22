import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  public peso: number;
  public altura: number;
  public resultado: number;

  constructor() { }

  ngOnInit() { }

  public calcularIMC(){
    if (this.peso <= 0 || this.altura <= 0) {
      this.resultado = 0;
    }else {
      this.altura = this.altura / 100;
      this.resultado = (this.peso / (this.altura * this.altura));
    }
  }

}
