import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './home/produto/produto.component';
import { ProdutoListComponent } from './home/produto-list/produto-list.component';

@NgModule({
  declarations: [ HomeComponent, ProdutoComponent, ProdutoListComponent ],
  exports: [ HomeComponent ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ViewsModule {}
