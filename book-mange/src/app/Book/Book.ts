export interface IBook{
    bookId:number;
    bookName:string;
    bookPrice:number;
    bookSize?:number;
    bookDescription:string;
    bookDetail:string;
    bookImage:string;
}
export class Book{
    bookId?= 0;
    bookName= '';
    bookPrice?= 0;
    bookSize?=0 ;
    bookDescription='';
    bookDetail= '';
    bookImage='' ;
}