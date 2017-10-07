export class Place {
    city: string;
    country: string;
    lat: number;
    lng: number;
} 

export class Bag {
    weight: number;
    dimensions: Dimensions = {} as Dimensions;
    restrictions: Array<string>;
}

export class Dimensions {
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

