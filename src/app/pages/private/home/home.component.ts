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

  baserf = firebase.database().ref('items');
  direccion:{Url:string,nombre:string}[];
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
  conectado: boolean = false;

  ngOnChanges() {
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
    this.chats = [];

    let loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1].split('","')[0];
    let contactlist = this.contactService.getContacts(loged);
    // let user:UserI = this.contactService.getUserActive(loged);
    console.log("long:", contactlist.length);
    if (contactlist.length != 0 && contactlist.length != undefined) {
      for (let CoN = 0; CoN < contactlist.length; CoN++) {
        if (contactlist[CoN] == null) {
          console.log("Contacto vacio");
        } else {
          let elcont = this.contactService.getContactUser(contactlist[CoN].email);
          if (elcont.email != "") {

            let chatin: ChatI = {
              title: elcont.email,
              icon: String(this.direccion[CoN]),
              msgPreview: contactlist[CoN].chat[contactlist[CoN].chat.length - 1].content,
              isRead: contactlist[CoN].chat[contactlist[CoN].chat.length - 1].isRead,
              lastMsg: contactlist[CoN].chat[contactlist[CoN].chat.length - 1].time,
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
            // console.log(chatin);
            console.log("chatin");
          } else {
            console.log("Null contact");
            console.log(elcont);
          }
        }
      }
    } else {
      console.log(contactlist.length, "No contacts found", contactlist);
    }
    // if (this.chats.length > 0) {
    //   this.currentChat.title = this.chats[0].title;
    //   this.currentChat.icon = this.chats[0].icon;
    //   this.currentChat.msgs = this.chats[0].msgs;
    // }
    if (!this.conectado) {

      this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
        this.conectado = true;
        console.log("Nos conectamos");
        this.subscriptionList.msgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
          let Me = this.currentChat.title === msg.owner ? true : false;

          // let Me = msg.title === loged ? true : false; 
          // msg.isMe 
          this.UpdatePreview(msg, msg.owner, msg.destiny, contactlist);
          if (Me == true && msg.destiny == loged) {
            this.currentChat.msgs.push(msg);
          } else {
            // alert("no soy yo");
            if (msg.owner == loged) {
              msg.isMe = true;
              this.currentChat.msgs.push(msg);
            }
            console.log("Destiny", msg.destiny);
            console.log("owner", msg.owner);
          }
          // this.initChat(); // Cambio
        });
      });
    }
    this.FocusMsg();
    this.recorrido();

    console.log(this.direccion);
  }
  setURL(urll, fileN) {
    // console.log("Esta es la hptaaaaaa URL:"+ urll );
    if (this.chats.length == this.direccion.length) {
      for(let c=0;c<this.chats.length;c++){
        if(this.chats[c].title==this.direccion[c].nombre){

        }
      }
    } else {
      // this.direccion.push(String(urll),fileN);//aqui esta el error
    }// console.log("Esta es la perrraaaaaa ya como direccion"+this.direccion);
  }
  getImageUrl(filename) {
    // let URL = "";
    let storage = firebase.storage().ref(`imagenes/${filename}`).getDownloadURL().then((resolve) => {
      // this.direccion = resolve;
      this.setURL(resolve, filename);
      console.log("direccion:" + this.direccion + " resolve: " + resolve);
    }).catch(error => {
      // console.log();
      this.setURL("https://firebasestorage.googleapis.com/v0/b/suanfanzon-28eaa.appspot.com/o/imagenes%2Fdefault.jpg?alt=media&token=c57ce3a0-95f1-4389-885c-d550c9dd0203", filename);
      // this.direccion="";

    });
    // console.log("storage:" + this.direccion+storage.then);
    // console.log(this.direccion);
    // return this.direccion;
  }
  recorrido() {
    this.direccion = [];
    for (let i = 0; i < this.chats.length; i++) {
      this.getImageUrl(this.chats[i].title);
      // this.chats[i].icon=String(this.direccion[i]);
    }
  }
  onSelectInbox(index: number) {
    this.currentChat.title = this.chats[index].title;
    this.currentChat.icon = this.chats[index].icon;
    this.currentChat.msgs = this.chats[index].msgs;
    this.initChat();
    this.FocusMsg();
  }
  addContacto() {
    document.getElementById("addContact").style.display = 'flex';
  }
  UserProfile(e) {
    document.getElementById("profilediv").style.display = "flex";
  }
  FocusMsg() {
    document.getElementById('elfocus').focus();
  }

  doLogout() {
    this.authService.logout();
  }
  UpdateProfile(e) {

  }

  destroySubscriptionList(exceptList: string[] = []): void {
    for (const key of Object.keys(this.subscriptionList)) {
      if (this.subscriptionList[key] && exceptList.indexOf(key) === -1) {
        this.subscriptionList[key].unsubscribe();
        this.conectado = false;
      }
    }
  }
  UpdatePreview(msg, owner, destiny, contactlist) {
    let loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1].replace('"', "");
    if (loged == owner || loged == destiny) {
      //el mensaje es mio o para mi 
      console.log("mio o para mi");
      for (let c = 0; c < this.chats.length; c++) {
        //recorrido en el chat inbox

        if (this.chats[c].title == owner || this.chats[c].title == destiny) {
          //este chat es el dueño o el destino
          let otrochats = [];
          for (let t = 0; t < contactlist.length; t++) {
            if (contactlist[t].email == owner || contactlist[t].email == destiny) {
              otrochats = contactlist.chat;
            }
          }
          otrochats.push(msg);
          // let image = this.direccion[c];
          // this.direccion="";
          let chatin: ChatI = {
            title: this.chats[c].title,
            icon: this.chats[c].icon,
            msgPreview: msg.content,
            isRead: msg.isRead,
            lastMsg: msg.time,
            msgs: otrochats
          };
          this.chats[c] = chatin;
          console.log("este chat es el dueño o el destino", this.chats[c].title);
        }
      }
    }
  }

}
