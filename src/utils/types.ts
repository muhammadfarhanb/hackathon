import Image, { StaticImageData } from 'next/image'

export type Producttype = {

    id : number;
    name : string;
    price : number;
    category : string;
    image :  StaticImageData;

};