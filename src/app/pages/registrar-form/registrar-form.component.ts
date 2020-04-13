import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-registrar-form',
  templateUrl: './registrar-form.component.html',
  styleUrls: ['./registrar-form.component.css']
})
export class RegistrarFormComponent implements OnInit {
  
  agregarRegistro: any = 
  {
    cedula: "",
	  nombres: "",
	  apellidos: "",
    correo: "",
    fecha_nacimiento: "",
	  telefono: "",
	  direccion: {
		    callePrincipal: "",
        calleSecundaria: "",
        numero_local: ""
	      }
  }

  personas: any

  constructor(private personaService: PersonaService) { 
    this.obtenerPersonas
  }

  obtenerPersonas(){
    this.personaService.getAllPersonas().subscribe( resultado => {
        this.personas = resultado.personas;
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  ngOnInit() {
  }

  delPersona(identificador){
    console.log('evento eliminar');
    
    this.personaService.delPersonas(identificador).subscribe( resultado => {
      this.obtenerPersonas();
    },
    error => {
      console.log(JSON.stringify(error));
    })
  }

  addPersona(){
    console.log('evento agregar');

    this.personaService.addPersonas(this.agregarRegistro).subscribe( resultado => {
        console.log(this.agregarRegistro);
        console.log('Se ha guardado el Registro');
    },
    error => {
      console.log(JSON.stringify(error));
    } )
  }

}
