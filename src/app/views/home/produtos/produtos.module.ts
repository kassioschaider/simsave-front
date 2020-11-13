import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
    declarations: [ ProdutoComponent, ProdutoListComponent ],
    exports: [ ProdutoComponent, ProdutoListComponent ],
    imports: [
      HttpClientModule,
      CommonModule,
      MatCardModule,
      FlexLayoutModule,
      MatButtonModule
    ]
  })
export class ProdutosModule {}