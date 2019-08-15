import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket;

  constructor() { 
    this.socket = io(environment.BaseUrl);
  }

  public emit(emit, message){
    this.socket.emit(emit, message)
  }

  public on = (event) => {
    return Observable.create(observer => {
      this.socket.on(event, (data: any) => {
        observer.next(data);
      })
    })
  }
}
