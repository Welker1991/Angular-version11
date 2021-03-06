import { Component, Injectable, OnInit } from '@angular/core';
import { TotemService } from './totem.component.services';

@Component({
  selector: 'app-totem',
  templateUrl: './totem.component.html',
  styleUrls: ['./totem.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class TotemComponent implements OnInit {

  totemService: TotemService;
  totems: Array<any> = new Array();
  filter?: any;


  constructor(totemService: TotemService) {
    this.totemService = totemService;
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.totemService.getTotems().subscribe(data => this.totems = data);
  }

  remover(id: any) {
    this.totemService.deletarTotem(id).subscribe();
    this.listar();
  }

}


