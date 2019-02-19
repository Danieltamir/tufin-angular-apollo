export type Developer = {
    firstName: string;
    lastName: string;
    age: number;
    lovesAngular: boolean,
    locationInfo : Location
}

export type Location = {
    address: string;
    city: string;
    country: number;
    postalCode : number;
}

export type Query = {
    getDevelopers: Developer[];
}