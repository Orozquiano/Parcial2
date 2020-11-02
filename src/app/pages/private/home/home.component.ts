import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { ChatI } from './interfaces/ChatI';
import { MessageI } from './interfaces/MessageI';
import { RegisterService } from '../../../shared/services/register/register.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  subscriptionList: {
    connection: Subscription,
    msgs: Subscription
  } = {
    connection: undefined,
    msgs: undefined
  };
  
  
  // chats: Array<ChatI> = [
  //     {
  //     title: "Santi",
  //     icon: "/assets/img/ppRightBar.png",
  //     isRead: true,
  //     msgPreview: "entonces ando usando fotos reales hahaha",
  //     lastMsg: "11:13",
  //     msgs: [
  //       { content: "Lorem ipsum dolor amet", isRead: true, isMe: true, time: "7:24" },
  //       { content: "Qué?", isRead: true, isMe: false, time: "7:25" },
  //     ]
  //   },
  //   {
  //     title: "Pablo Bejarano",
  //     icon: "/assets/img/ppInbox.png",
  //     isRead: true,
  //     msgPreview: "Estrenando componente",
  //     lastMsg: "18:30",
  //     msgs: []
  //   },
  //   {
  //     title: "Pablo Bejarano 2",
  //     icon: "/assets/img/ppInbox.png",
  //     isRead: true,
  //     msgPreview: "Nice front 😎",
  //     lastMsg: "23:30",
  //     msgs: []
  //   },
  // ];

  currentChat = {
    title: "",
    icon: "",
    msgs: []
  };
  
  constructor(public authService: AuthService, public chatService: ChatService, private registerService: RegisterService) { }
  
  chats: Array<ChatI>=[];
  listofusers: UserI[]=this.registerService.PullRegister();
  
  ngOnInit(): void {
    // this.chats=[];
    this.initChat();
  }
  
  ngOnDestroy(): void {
    this.destroySubscriptionList();
    this.chatService.disconnect();
  }
  
  initChat() {
    console.log("Initchat");
    let user: UserI;
    let loged = window.localStorage.getItem('user').split('","')[0];
    // console.log(listofusers[0][0]);
    this.registerService.PullRegister().forEach(element => {
      console.log(element.name);
      
    });
    for(let i = 0; i<this.listofusers.length; i++){
      console.log(i," en for ",this.listofusers[i].email);
      
      if (loged.includes(this.listofusers[i].email) || loged.includes(this.listofusers[i].telefono)) {
        user = this.listofusers[i];
        console.log("Logeadito - ",user.username);
      }
    }
    for (let c = 0; c <this.listofusers.length; c++) {
      if (user.contactos.includes(this.listofusers[c].email)) {
        let chatin: ChatI = {
          title: this.listofusers[c].name+this.listofusers[c].lname,
          icon: "",
          msgPreview: "Aun sin preview",
          isRead: false,
          lastMsg: "El Last",
          msgs: [{
            content: "El Mensaje",
            time: "me recibe?",
            isRead: false,
            owner: this.listofusers[c].email,
            isMe: true
          }],
        }
        this.chats.push(chatin);
        console.log(chatin);
        console.log("chatin");
      }
    }
    if (this.chats.length > 0) {
      this.currentChat.title = this.chats[0].title;
      this.currentChat.icon = this.chats[0].icon;
      this.currentChat.msgs = this.chats[0].msgs;
    }
    this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
      console.log("Nos conectamos");
      this.subscriptionList.msgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
        msg.isMe = this.currentChat.title === msg.owner ? true : false;
        this.currentChat.msgs.push(msg);
      });
    });
  }

  onSelectInbox(index: number) {
    this.currentChat.title = this.chats[index].title;
    this.currentChat.icon = this.chats[index].icon;
    this.currentChat.msgs = this.chats[index].msgs;
  }
  addContacto() {
    document.getElementById("addContact").style.display = 'flex';
  }

  doLogout() {
    this.authService.logout();
  }

  destroySubscriptionList(exceptList: string[] = []): void {
    for (const key of Object.keys(this.subscriptionList)) {
      if (this.subscriptionList[key] && exceptList.indexOf(key) === -1) {
        this.subscriptionList[key].unsubscribe();
      }
    }
  }

}
