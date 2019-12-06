import { Component, OnInit } from '@angular/core';
import { MarcaCarro } from 'src/app/shared/model/MarcaCarro';
import { Seguro } from 'src/app/shared/model/Seguro';
import { CarroService } from 'src/app/shared/services/carro.service';

@Component({
  selector: 'app-cadastro-seguros',
  templateUrl: './cadastro-seguros.component.html',
  styleUrls: ['./cadastro-seguros.component.css']
})
export class CadastroSegurosComponent implements OnInit {

  public marcasCarro: MarcaCarro[];
  public seguro = new Seguro();

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit() {
    this.carregarMarcasDeCarro();
  }

  carregarMarcasDeCarro() {
    this.carroService.getMarcas()
      .subscribe(res => {
        this.marcasCarro = res.Makes.map(m => ({
          codigo: m.make_id,
          nome: m.make_display
        }));
      });
  }

}