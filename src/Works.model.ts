import { model, Schema } from "mongoose";
const workSchema =new Schema({
    first_name:{
        type:String
    }, last_name:{
        type:String
    },publication_date:{
        type:String
    },work_type:{
        type:String
    },title:{
        type:String
    }
})
export const Works = model("works", workSchema)