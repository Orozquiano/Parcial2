import { Component, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { ContactI } from 'src/app/shared/interfaces/ContactI';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { ChatI } from './interfaces/ChatI';
import { MessageI } from './interfaces/MessageI';
import { ContactService } from 'src/app/shared/services/contact/contact.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {

  baserf=firebase.database().ref('items');

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
  //   }
  // ];

  currentChat = {
    title: "",
    icon: "",
    msgs: []
  };
  chats: Array<ChatI> = [];
  // listofcontacts: [] = [];

  constructor(public authService: AuthService, public chatService: ChatService, public contactService: ContactService) { }
    
    // Animation(){
    //     this.initChat();
    // }

  ngOnChanges(){
    this.initChat();
  }
  ngOnInit(): void {
    this.initChat();
  }

  ngOnDestroy(): void {
    this.destroySubscriptionList();
    this.chatService.disconnect();
  }

  initChat() {
    this.chats=[];
    let loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1].replace('"', "");
    let contactlist = this.contactService.getContacts(loged);
    // let user:UserI = this.contactService.getUserActive(loged);
    console.log("long:",contactlist.length);
    if (contactlist.length != 0 && contactlist.length!= undefined) {
      for(let CoN=0; CoN<contactlist.length;CoN++){
        if (contactlist[CoN] == null) {
          console.log("Contacto vacio");
        } else {
          let elcont = this.contactService.getContactUser(contactlist[CoN].email);
          if (elcont.email != "") {
            let chatin: ChatI = {
              title: elcont.email,
              icon: "",
              msgPreview: contactlist[CoN].chat[contactlist[CoN].chat.length-1].content,
              isRead: contactlist[CoN].chat[contactlist[CoN].chat.length-1].isRead,
              lastMsg: contactlist[CoN].chat[contactlist[CoN].chat.length-1].time,
              msgs: contactlist[CoN].chat
              // msgs: [{
              //   content: "El Mensaje",
              //   time: "00:00",
              //   isRead: false,
              //   owner: elcont.email,
              //   isMe: true
              // }],
            };
            this.chats.push(chatin);
            console.log(chatin);
            console.log("chatin");
          } else {
            console.log("Null contact");
            console.log(elcont);
          }
        }
      }
    }else{
      console.log(contactlist.length,"No contacts found", contactlist);
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
    // this.Animation();
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
