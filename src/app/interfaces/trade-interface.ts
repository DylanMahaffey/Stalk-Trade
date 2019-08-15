export interface TradeInterface {
    tradeId: number;
    user: string;
    quantity: number;
    cropId: number;
    cropName: string;
    accepted: boolean;
    denied: boolean;
    deniedMessage: string;
    terms: boolean;
    completed: boolean;
    offer: object;
}
