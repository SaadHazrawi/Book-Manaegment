export interface IBook{
    bookId:number;
    authorName?:string;
    categoryName?:string;
    name:string;
    language:string;
    imagePath?:string;
    filePath?:string;
    description:string;
    price:number;
    fileSize:number;
    pages:number;
}
export interface IBookCreate{
     
    authorId:number;
    categoryId:number;
    name:string;
    language:string;
    imagePath?:string;
    filePath?:string;
    description:string;
    price:number;
    fileSize:number;
    pages:number;
}
// export class Book{
//     bookId?= 0;
//     bookName= '';
//     bookPrice?= 0;
//     bookSize?=0 ;
//     bookDescription='';
//     bookDetail= '';
//     bookImage='' ;
// }