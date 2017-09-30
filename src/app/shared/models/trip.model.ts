export class Trip {
    owner: string;
    from: {
        city: string;
        country: string;
        lat: number;
        lng: number;
    };
    to: {
        city: string;
        country: string;
        lat: number;
        lng: number;
    };
    departureDateTime: Date;
    arrivalDateTime: Date;
    bag: {
        restrictions: Array<string>;
        weight: number;
        dimensions: {
            high: number;
            width: number;
        }  
    }
}