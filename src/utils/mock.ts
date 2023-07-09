import { Producttype } from "./types";
import pro1 from 'public/image/pro1.png'
import header from 'public/image/header.webp'
import pro2 from 'public/image/pro2.png'
import pro3 from 'public/image/pro3.png'
import profemale2 from 'public/image/profemale2.png'
import profemale3 from 'public/image/profemale3.png'
import profemale1 from 'public/image/profemale1.webp'
import promale1 from 'public/image/promale1.png'
import promotions2 from 'public/image/promotions2.webp'
import promotions3 from 'public/image/promotions3.webp'



export const Productid : Producttype [] = [
    {

        id:1,
        name : "Brushed Raglan Sweatshirt",
        price : 195,
        category : "female",
        image : pro1 ,
    },
    {

        id:2,
        name : "Cameryn Sash Tie Dress",
        price : 545,
        category : "female",
        image : header ,
    },
    {

        id:3,
        name : "Flex Sweatshirt",
        price : 157,
        category : "female",
        image : pro2 ,
    },
    {

        id:4,
        name : "Flex Sweatpants",
        price : 175,
        category : "male",
        image : pro3 ,
    },
    {

        id:5,
        name : "Pink Fleece Sweatpants",
        price : 175,
        category : "female",
        image : profemale2 ,
    },
    {

        id:6,
        name : "Lite Sweatpants",
        price : 150,
        category : "female",
        image : profemale3 ,
    },
    {

        id:7,
        name : "Imperial Alpaca Hoodie",
        price : 525,
        category : "female",
        image : profemale1 ,
    },
    {

        id:8,
        name : "Raglan Sweatshirt",
        price : 195,
        category : "male",
        image : promale1 ,
    },
    {

        id:9,
        name : "Flex Push Button Bomber",
        price : 250,
        category : "male",
        image : promotions2 ,
    },
    {

        id:10,
        name : "Push Button",
        price : 250,
        category : "male",
        image : promotions3 ,
    },


]