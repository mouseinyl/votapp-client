import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  votanteDialog = false
  candidatoDialog = false
  @Output() userCreated: EventEmitter<any> = new EventEmitter()
  public createUser: FormGroup



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  openDialog(e) {
    if (e == 'votante') {
      this.votanteDialog = true
      this.createUser = this.fb.group({
        id: [],
        nombre: []
      })
    } else {
      this.candidatoDialog = true
      this.createUser = this.fb.group({
        id: [],
        nombre: [],
        apellido: [],
        partido: [],
        foto: []
      })
    }
  }

  cancelar() {
    this.candidatoDialog = false
    this.votanteDialog = false
  }

  createUserEvent(e) {
    this.userCreated.emit({e,user:this.createUser.value})
    this.cancelar()
  }


}
