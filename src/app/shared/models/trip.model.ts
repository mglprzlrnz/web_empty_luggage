export class Place {
    city: string;
    country: string;
    lat: number;
    lng: number;
} 

export class Bag {
    weight: number;
    restrictions: Array<string>;
    high: number;
    width: number;
}


export class Trip {
    _id: string;
    owner: string;
    from: Place = {} as Place;
    to: Place = {} as Place;
    departureDateTime: Date;
    arrivalDateTime: Date;
    bag: Bag = {} as Bag;

}

