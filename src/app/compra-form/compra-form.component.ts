import { Component, OnInit } from '@angular/core';
import { CompraService } from '../compra.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrl: './compra-form.component.css'
})
export class CompraFormComponent implements OnInit {

  formGroupCompra: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
  private service: CompraService,
  private formBuilder: FormBuilder
  ){
    this.formGroupCompra = formBuilder.group({
      id : [''],
      name : [''],
      price : [''],
      quantity : [''],
      payment : ['']
      
    });
  }

  ngOnInit(){
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    if(id !=0){
      this.isEditing= true;
      this.loadCompras(id);
  }
  }
  loadCompras(id: number) {
    this.service.getCompraById(id).subscribe({
      next: data => this.formGroupCompra.setValue(data)
    });
  }
  update(){
    this.service.update(this.formGroupCompra.value).subscribe({
      next: () => this.router.navigate(['compras'])
    });
  }
  save(){
    this.service.save(this.formGroupCompra.value).subscribe({
      next: () => this.router.navigate(['compras'])
    });
  }
}

  
