import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from 'src/app/pages/private/home/interfaces/MessageI';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: any;

  constructor() { }

  connect() {
    return new Observable(observer => {
      this.socket = io('https://suanfanzapp2.loca.lt');//lt -p 3000 -s suanfanzapp2
      this.socket.on('connect', () => {
        observer.next();
      })
    })
  }

  getNewMsgs() {
    return new Observable(observer => {
      this.socket.on("newMsg", msg => {
        observer.next(msg);
      });
    });
  }

  sendMsg(msg: MessageI) {
    this.socket.emit('newMsg', msg);
  }

  disconnect() {
    this.socket.disconnect();
  }


}
