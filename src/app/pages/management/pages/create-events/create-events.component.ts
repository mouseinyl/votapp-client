import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tableRows } from '../../../../model/interfaces/table-row';
import { getTestBed } from '@angular/core/testing';
import { CreateUserComponent } from '../../components/create-user/create-user.component';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent implements OnInit {
  @ViewChild('user') user:CreateUserComponent

  public form: FormGroup
  public createUser: FormGroup
  public methop

  votanteDialog = false
  candidatoDialog = false

  public rowVotantes: tableRows[] = [
    { header: 'ID', field: 'id' },
    { header: 'nombre', field: 'nombre' },
  ]
  public rowCandidatos: tableRows[] = [
    { header: 'ID', field: 'id' },
    { header: 'Nombre', field: 'nombre' },
    { header: 'Apellido', field: 'apellido' },
    { header: 'Partido', field: 'partido' },
    // {header:'Partido',field:'partido'},
  ]

  public data = {
    candidato: [],
    votante: [
      { id: "101010", nombre: "creacion" },
      { id: "101010", nombre: "creacion" },
    ]
  }

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initform()
  }

  get datae() {
    return this.data
  }

  openDialog(e) {
    this.user.openDialog(e)
  }



  createEvent(e:any[]){
    if(e[0].partido){
      this.createCandidato(e)
    }else{
      this.createVotante(e)
    }
  }

  createVotante(e) {
    console.log(e)

  }

  createCandidato(e) {
    console.log(e)
  }

  createEvento() {
    console.log('creada')
  }

  initform() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      dateInit: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]]
    })
  }

}
