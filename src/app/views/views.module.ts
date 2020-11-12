import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProdutosModule } from './home/produtos/produtos.module';

@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    ProdutosModule,
    CommonModule
  ]
})
export class ViewsModule {}
