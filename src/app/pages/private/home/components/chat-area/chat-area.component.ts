import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { MessageI } from '../../interfaces/MessageI';
import { HomeComponent} from  '../../home.component';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  @Input() title: string = ""
  @Input() icon: string = ""
  @Input() msgs: Array<MessageI> = []
  search: string;

  msg: string;

  constructor(public chatService: ChatService, public homeComponent:HomeComponent) { }

  ngOnInit(): void {
  }

  sendMsg() {
    let T= new Date();
    let user_e = window.localStorage.getItem('user').split('";"')[0].split('":"')[1].replace('","password',"");
    const msg: MessageI = {
      content: this.msg,
      isMe: true,
      time: T.getHours()+":"+T.getMinutes(),
      isRead: false,
      owner: this.title
    };
    if(msg.content==""){
      alert("No puede enviar un mensaje vacio");
    }else{
      this.chatService.sendMsg(msg);
      this.homeComponent.initChat();
    }
    this.msg = "";
  }
  SearchWord(){
    let resultado=[];
    // alert(`buscando ${this.search}`);
    for(let i=0;i<this.msgs.length;i++){
      if(this.msgs[i].content.toUpperCase().includes(this.search.toUpperCase())){
        
        alert(`hora: ${this.msgs[i].time}; mensaje: ${this.msgs[i].content}`);
        resultado.push(this.msgs[i]);
      }
    }
    if(resultado.length==0){
      alert("No se encontraron resultados");
    }else{
      alert(`Se encontraron : ${resultado.length} resultados`);
    }
  }
}
