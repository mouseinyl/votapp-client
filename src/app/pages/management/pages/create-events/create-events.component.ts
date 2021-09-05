import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { action, tableRows } from '../../../../model/interfaces/table-row';
import { getTestBed } from '@angular/core/testing';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { RequestServices } from '../../../../services/request-services.service';
import { ActivatedRoute } from '@angular/router';


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
  public loaddin= true
  public detalle = false
  public urlParam

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

  public data:any = {
    candidatos: [],
    votantes: []
  }
  public action:action = {create:false}
  constructor(private fb: FormBuilder,private request: RequestServices, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initform()
    console.log(this.route.snapshot.params.name)
    if (this.route.snapshot.params.name != undefined){
      this.urlParam = this.route.snapshot.params.name
      this.detalle = true;
      this.action.create = false
      this.getEventos();
    }else{
      this.action.create = true
      this.loaddin = false
    }
  }

  openDialog(e) {
    this.user.openDialog(e)
  }



  createEvent(e:any){
    if (e.e =="votante"){
      this.data.votantes.push(e.user)
    }else{
      this.data.candidatos.push(e.user)
    }

  }
  iniEvento(){
    this.request.post('eventos/iniciar',{},{name:"name_event", value:this.data.nombre}).subscribe((x)=>{
      console.log(x);
      this.loaddin = true;
      this.getEventos()
    })

  }
  stopEvento(){
    this.request.post('eventos/stop',{},{name:"name_event", value:this.data.nombre}).subscribe((x)=>{
      console.log(x);
      this.loaddin = true;
      this.getEventos()
    })
  }
  getEventos(){
    this.request.get('eventos',{name:"evento", value:this.urlParam}).subscribe((x)=>{
      console.log(x)
      this.data = x.data
      this.initform()
      this.loaddin = false
      this.form.patchValue({
        nombre:x.data.nombre
      })
    })
  }
  createEvento() {
    if(this.form.valid && this.data.candidatos.length >1){
      let body = Object.assign({
        votantes:this.data.votantes,
        candidatos:this.data.candidatos
      }, this.form.value)
      this.request.post('eventos/crear',body).subscribe((x)=>{
        console.log(x)
      })
    }else{
      console.log("invalido")

    }
  }

  initform() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      fechaInit: ['11-10-2021', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    })
  }




}
