// import { Injectable } from '@angular/core';
// import { DataService } from './data.service';
// import { User } from '../models/user.model';
// import { Trade } from '../models/trade.model';
// import { Messages } from '../models/messanger.model';
// import { Crop } from '../models/crop.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServerApiService {

//   getLastMessangerId(): number{
//     if(this.data.messanger[this.data.messanger.length - 1])
//       return this.data.messanger[this.data.messanger.length - 1].id;
//     else  
//       return -1;
//   }
//   getLastMessageId(messangerId: number): number{
//     let lastId: number;
//     this.data.messanger.forEach(messanger => { 
//       if(messanger.id === messangerId && messanger.messages.length > 0) lastId = messanger.messages[messanger.messages.length - 1].id 
//       else lastId = -1;
//     })
//     return lastId;
//   }
//   getLastTradeId(): number{
//     if(this.data.trades[this.data.trades.length -1])
//       return this.data.trades[this.data.trades.length -1].id
//     else
//       return -1;
//   }
//   getLastCropId(): number{
//     if(this.data.crops[this.data.crops.length -1])
//       return this.data.crops[this.data.crops.length -1].id
//     else
//       return -1;
//   }
//   getLastUserId(): number{
//     if(this.data.users[this.data.users.length -1])
//       return this.data.users[this.data.users.length -1].id
//     else
//       return -1;
//   }

//   constructor(private data: DataService) { }


//   start(){
//     if(this.data.users.length === 0)
//     {
//         this.addUser(new User(
//         this.getLastUserId()+1,
//         "Dylan",
//         "Mahaffey",
//         "dylan@email.com",
//         "qpalz,"
//       ));
//       this.addUser(new User(
//         this.getLastUserId()+1,
//         "Juan",
//         "Ramirez",
//         "juan@email.com",
//         "pass"
//       ));
//       this.addUser(new User(
//         this.getLastUserId()+1,
//         "Ham",
//         "Rios",
//         "ham@email.com",
//         "pass"
//       ));

//       this.addFriend(0,1);
//       this.addFriend(0,2);
//       this.addFriend(1,2);

//       this.addGroup(new Messages.Messanger(this.getLastMessangerId()+1,"The Farmhands","group",[0]));

//       this.addCrop(new Crop(
//         this.getLastCropId()+1,
//         0,
//         "Roma Tomato",
//         "vegetable",
//         "Tomato",
//         "Roma",
//         "https://balconygardenweb.com/wp-content/uploads/2015/11/how-to-grow-roma-tomatoes.jpg",
//         false,
//         "August 2019",
//         30,
//         "This will be my best crop yet!"
//       ));
//       this.addCrop(new Crop(
//         this.getLastCropId()+1,
//         0,
//         "Sweet Basil",
//         "herb",
//         "Basil",
//         "Sweet",
//         "https://www.adaptiveseeds.com/wp-content/uploads/2014/12/basil-italian-mountain-sweet-8.jpg",
//         false,
//         "July 2019",
//         20,
//         "I will be trading these in bunches"
//       ));
//       this.addCrop(new Crop(
//         this.getLastCropId()+1,
//         1,
//         "English Cucumbers",
//         "vegetable",
//         "Cucumber",
//         "English",
//         "https://www.adaptiveseeds.com/wp-content/uploads/2014/12/basil-italian-mountain-sweet-8.jpg",
//         false,
//         "July 2019",
//         20,
//         "Great for cucumber water!"
//       ));

//       this.addTrade(new Trade.Trade(
//         this.getLastTradeId()+1,
//         0,
//         "Dylan Mahaffey",
//         5,
//         0,
//         "Roma Tomato",
//         new Trade.Offer(
//           1,
//           2,
//           1,
//           "English Cucumber",
//           "I think you will like the quality of my cucumbers"
//         )))
//       this.addTrade(new Trade.Trade(
//         this.getLastTradeId()+1,
//         1,
//         "Juan Ramirez",
//         5,
//         0,
//         "English Cucumber",
//         new Trade.Offer(
//           0,
//           2,
//           0,
//           "Roma Tomato",
//           "I think you will like the quality of my Tomatoes"
//         )))
//     }
//     return  this.data
    
//   }

//   getAllUsers(): Observable<any>{
//     return this.data.getUsers();
//   }
  
//   getUsers(): User[]{
//     return this.data.users;
//   }
//   getCrops(): Crop[]{
//     return this.data.crops;
//   }
//   getAllOtherCrops(id: number): Crop[]{
//     return this.data.crops.filter(crop => { return (crop.id !== id) });
//   }
//   getTrades(): Trade.Trade[]{
//     return this.data.trades;
//   }
//   getMessangers(): Messages.Messanger[]{
//     return this.data.messanger;
//   }
  
//   getUserById(id: number): User{
//     return this.data.users.filter(user => { return (user.id === id) })[0];
//   }
//   getCropById(id: number): Crop{
//     return this.data.crops.filter(crop => { return (crop.id === id) })[0];
//   }
//   getTradeById(id: number): Trade.Trade{
//     return this.data.trades.filter(trade => { return (trade.id === id) })[0];
//   }
//   getMessangerById(id: number): Messages.Messanger{
//     return this.data.messanger.filter(messanger => { return (messanger.id === id) })[0];
//   }

//   getUserCrops(userId: number): Crop[]{
//     return this.data.crops.filter(crop => { return ( crop.userId === userId ) })
//   }
//   getWatchList(userId: number): Crop[]{
//     let watchList: Crop[] = []
//     this.getUserById(userId).watchList.forEach(cropId => {
//       watchList.push(this.getCropById(cropId));
//     })
//     return watchList;
//   }
//   getUserTrades(userId: number): object{
//     let trades = {
//       sent: [],
//       recieved: []
//     }

//     this.data.trades.forEach(trade => {
//       if(trade.userId === userId)
//         trades.recieved.push(trade);
//       else if (trade.Offer.traderId === userId)
//         trades.sent.push(trade);        
//     })

//     return trades;
//   }
//   getUserMessangers(userId): Messages.Messanger[]{
//     console.log(this.start());
//     let userMessangers: Messages.Messanger[] = [];

//     this.getUserById(userId).messages.forEach(messageId => {     
//       userMessangers.push(this.getMessangerById(messageId));
//     });

//     return userMessangers;
//   }

  
  
//   addUser(user: User){
//     this.data.users.push(user);
//   }
//   addFriend(userId: number, friendId: number){
//     this.addMessanger(new Messages.Messanger(this.getLastMessangerId()+1,"private", "private", [userId,friendId]));
    
//     this.data.users.forEach(user => {
//       if(user.id === userId)
//         user.friends.push(friendId);
  
//       if(user.id === friendId)
//         user.friends.push(userId);
//     });
//   }
//   addGroup(group: Messages.Messanger){
//     this.addMessanger(group);
//   }
//   joinGroup(groupId: number, userId: number){
//     this.data.messanger.filter(messanger => { return (messanger.id === groupId) })[0].members.push(userId);
//     this.data.users.filter(user => { return (user.id === userId) })[0].messages.push(groupId);
//   }
//   addCrop(crop: Crop){
//     crop.id = this.getLastCropId()+1;
//     return !!(this.data.crops.push(crop))
//   }
//   watchCrop(cropId: number, userId: number){
//     this.getUserById(userId).watchList.push(cropId);
//     this.getCropById(cropId).observers++
//   }
//   endCropWatch(cropId: number, userId: number){
//     let index = this.getUserById(userId).watchList.indexOf(cropId)
//     this.getUserById(userId).watchList.splice(index,1);
//     this.getCropById(cropId).observers--
//   }
//   addTrade(trade: Trade.Trade){
//     this.data.trades.push(trade)
//   }
//   addMessanger(messanger: Messages.Messanger){
//     messanger.members.forEach(member => {
//       this.getUserById(member).messages.push(messanger.id)
//     })
//     this.data.messanger.push(messanger);
//   }
//   addMessage(messangerId: number, message: Messages.Message){
//     message.id = this.getLastMessageId(messangerId)+1;
//     this.data.messanger.forEach(messanger => {
//       if(messanger.id === messangerId)
//         messanger.messages.push(message);
//     });
//   }
  
//   deleteUser(id: number){
//     this.data.users = this.data.users.filter(user => { return (user.id !== id) });
//   }
//   deleteCrop(id: number){
//     this.data.crops = this.data.crops.filter(crop => { return (crop.id !== id) });
//   }
//   deleteTrade(id: number){
//     this.data.trades = this.data.trades.filter(trade => { return (trade.id !== id) });
//   }
//   deleteMessanger(id: number){
//     this.data.messanger = this.data.messanger.filter(messanger => { return (messanger.id !== id) });
//   }
  
//   updateUser(update: User){
//     let index = 0;
//     this.data.users.find((user, i) => { index = i; return (user.id === update.id) })
//     this.data.users.splice(index,1,update);
//   }
//   updateCrop(update: Crop){
//     let index = 0;
//     this.data.crops.find((crop, i) => { index = i; return (crop.id === update.id) })
//     this.data.crops.splice(index,1,update);
//   }
//   updateTrade(update: Trade.Trade){
//     let index = 0;
//     this.data.trades.find((trade, i) => { index = i; return (trade.id === update.id) })
//     this.data.trades.splice(index,1,update);
//   }
//   updateMessanger(update: Messages.Messanger){
//     let index = 0;
//     this.data.messanger.find((messanger, i) => { index = i; return (messanger.id === update.id) })
//     this.data.messanger.splice(index,1,update);
//   }
// }
