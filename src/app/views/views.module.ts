import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeComponent } from './home/home.component';
import { ProdutosModule } from './home/produtos/produtos.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ HomeComponent, HeaderComponent, FooterComponent, LoginComponent ],
  exports: [ HomeComponent, HeaderComponent, FooterComponent, LoginComponent ],
  imports: [
    MatToolbarModule,
    ProdutosModule,
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class ViewsModule {}
