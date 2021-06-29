import { Product } from './../product-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product
  id: string

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe( product => {
      this.product = product
    })
    }


  deleteProduct(): void {
    alert('Realmente deseja excluir?')
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto Deletado')
      this.router.navigate(['/products'])
    })

  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }
}

