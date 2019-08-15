import { Injectable } from '@angular/core';
import { Messages } from '../models/messanger.model';
import { User } from '../models/user.model';
import { Trade } from '../models/trade.model';
import { Crop } from '../models/crop.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public users: User[] = []; 
  public messanger: Messages.Messanger[] = [];
  public crops: Crop[] = []
  public trades: Trade.Trade[] = [];

  public allUsers: BehaviorSubject<any[]> = new BehaviorSubject([]);

  private baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
    this.getUsers();
   }

  public getUsers(): Observable<any>{
    return this.http.get(this.baseUrl+"users")/*.subscribe(data => {
      // this.allUsers.next(JSON.parse(data))
      console.log(data);
      
    })*/
  }
}
