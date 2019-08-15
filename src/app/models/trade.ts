export class Trade {
    tradeId: number = 0;
    user: string = "";
    quantity: number = 0;
    cropId: number = 0;
    cropName: string = "";
    accepted: boolean = false;
    denied: boolean = false;
    deniedMessage: string = "";
    terms: boolean = false;
    completed: boolean = false;
    offer = {
        traderId: 0,
        quantity:  0,
        cropId:  0,
        cropName:  "",
        offerMessage:  "",
    };
}
