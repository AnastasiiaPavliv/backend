import {Document} from 'mongoose'

export interface IUser extends Document{
    first_name?:string;
    last_name?:number;
    publication_date:string;
    work_type:string;
    title:string;
}