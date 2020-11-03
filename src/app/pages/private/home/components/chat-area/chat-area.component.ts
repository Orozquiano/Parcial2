import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { MessageI } from '../../interfaces/MessageI';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  @Input() title: string = ""
  @Input() icon: string = ""
  @Input() msgs: Array<MessageI> = []

  msg: string;

  constructor(public chatService: ChatService) { }

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
    }
    this.chatService.sendMsg(msg);

    this.msg = "";
  }
}
