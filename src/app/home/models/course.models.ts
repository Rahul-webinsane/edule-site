export class Course{
    name:string='';
    thumbnail:string='';
    author:string='';
    authorImage:string='';
    category:string='';
    hours:string='';
    price:number=0;
    offerPrice:number | null = null;
    rating:string='';
    lectures:number=0;

}



export class Blogs {

    name:string='';
    thumbnail:string='';
    author:string='';
    authorImage:string='';
    category:string='';
    date:string='';
    likes:number=0;
    link:string='';

}


export class Client{
    clientImage!:string;
}

export class Feedback{
    image!:string;
    starRating!:number;
    feedback!:string;
    name!:string;
    designation!:string;
    country!:string;
}

export class SlideConfig {
    breakpoints: {
        sm: number, md: number, lg: number, xl: number
    } = { sm: 1, md: 2, lg: 3, xl: 5 }
    showLeftRightArrow:boolean = true;
    showDots:boolean = false;
    autoPlay = false;
}