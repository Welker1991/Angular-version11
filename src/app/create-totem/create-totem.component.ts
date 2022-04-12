import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { TotemService } from '../totem/totem.component.services';

@Component({
  selector: 'app-create-totem',
  templateUrl: './create-totem.component.html',
  styleUrls: ['./create-totem.component.css']
})

export class CreateTotemComponent implements OnInit {

  totem: any;
  totemService?: TotemService;

  constructor(totemService: TotemService) {
    this.totemService = totemService;
  }

  ngOnInit(): void {
    this.totem = {};
  }

  criar(frm: NgForm): void {
    this.totemService?.createTotem(this.totem).subscribe(data => {
      this.totem = data;
      frm.reset();
    })
  }

  atualizar(id: any, frm: NgForm): void {
    this.totemService?.atualizarTotem(id, this.totem).subscribe(data => {
      this.totem = data;
      frm.reset();
    })
  }
}
