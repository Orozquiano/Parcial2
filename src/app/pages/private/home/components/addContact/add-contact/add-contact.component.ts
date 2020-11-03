import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register/register.service'
import { ContactService } from 'src/app/shared/services/contact/contact.service'
import { UserI } from 'src/app/shared/interfaces/UserI';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  Email: string;
  numero:string;
  listofusers:UserI[];
  constructor(private registerService:RegisterService, private contactService:ContactService) { }

  ngOnInit(): void {
    this.listofusers = this.registerService.PullRegister();
  }
  Agregar(){
    let exist=false;
    for(let i=0;i<this.listofusers.length;i++){
      if(this.Email==this.listofusers[i].email || this.numero==this.listofusers[i].telefono){
        exist=true;
      }
    }
    if(exist){
      // console.log("Existe: "+exist);
      this.contactService.agregar(this.Email, this.numero);
    }else{
      alert("Este usuario no se encuentra registrado");
    }
  }

  cerrarModal(){
    document.getElementById("addContact").style.display='none';
  }
}
