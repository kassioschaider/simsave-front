import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';
import { ProdutosModule } from './home/produtos/produtos.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ HomeComponent, HeaderComponent ],
  exports: [ HomeComponent, HeaderComponent ],
  imports: [
    MatToolbarModule,
    ProdutosModule,
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class ViewsModule {}
