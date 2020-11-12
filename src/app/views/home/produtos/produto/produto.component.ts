import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  @Input() titulo: string;
  @Input() cor: string;
  @Input() texto: string;

  constructor() { }

  ngOnInit(): void {
  }

}
