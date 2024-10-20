import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-table',
  templateUrl: './compras-table.component.html',
  styleUrl: './compras-table.component.css'
})
export class ComprasTableComponent implements OnInit{

  compras: Compra[] = [];

  constructor(private service: CompraService,
    private router: Router
  ){}

    ngOnInit() {
      this.loadCompras();
    }
  
  loadCompras(){
    this.service.getCompras().subscribe({
      next: data => this.compras = data
    });
  }
  create(){
    this.router.navigate(['compra'])
  }
  createNew(id:number){
    this.router.navigate(['compra',id]);
  }
  delete(compra:Compra){
    this.service.delete(compra).subscribe({
      next: () => this.loadCompras()
    })
  }
}
