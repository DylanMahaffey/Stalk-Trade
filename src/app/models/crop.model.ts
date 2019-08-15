export class Crop {
    id: number;
    userId: number;
    cropName: string;
    cropType: string;
    catagory: string;
    variety: string;
    imgSrc: string;
    harvested: boolean;
    harvestDate: string;
    harvestQuantity: number;
    remainingQuantity: number;
    harvestNotes: string[] = [];
    observers: number = 0;
    details: string;

    constructor(
        id: number,
        userId: number,
        cropName: string,
        cropType: string,
        catagory: string,
        variety: string,
        imgSrc: string,
        harvested: boolean,
        harvestDate: string,
        harvestQuantity: number,
        details: string
    ){
        this.id = id;
        this.userId = userId;
        this.cropName = cropName;
        this.cropType = cropType;
        this.catagory = catagory;
        this.variety = variety;
        this.imgSrc = imgSrc;
        this.harvested = harvested;
        this.harvestDate = harvestDate;
        this.harvestQuantity = harvestQuantity;
        this.remainingQuantity = harvestQuantity;
        this.details = details
    }
}