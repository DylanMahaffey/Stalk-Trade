export namespace Trade {

    export class Trade {
        constructor (
            id: number,
            userId:number,
            user: string,
            quantity: number,
            cropId: number,
            cropName: string,
            offer: Offer,
        ){
            this.id = id;
            this.userId = userId;
            this.user = user;
            this.quantity = quantity;
            this.cropId = cropId;
            this.cropName = cropName;
            this.Offer = offer;
        }

        id: number;
        userId: number;
        user: string;
        quantity: number;
        cropId: number;
        cropName: string;
        deniedMessage: string = "";
        accepted: boolean = false;
        denied: boolean = false;
        terms: boolean = false;
        completed: boolean = false;
        Offer: Offer;
    };
    
    export class Offer {
        constructor(
            traderId: number,
            quantity:  number,
            cropId:  number,
            cropName:  string,
            offerMessage:  string,
        ){
            this.traderId = traderId;
            this.quantity = quantity;
            this.cropId = cropId;
            this.cropName = cropName;
            this.offerMessage = offerMessage;
        }
        
        traderId: number;
        quantity:  number;
        cropId:  number;
        cropName:  string;
        offerMessage:  string;
        terms: boolean = false;
    };
}