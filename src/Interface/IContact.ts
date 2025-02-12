// import { ISchemaID } from "@storexweb/kernel";


export interface ContactInterface  {
name:string,
email:string,
subject:string,
message:string
}

export interface ContactUseCaseInput extends ContactInterface {
//   createdBy?: ISchemaID;
  createdAt?: Date;
  updatedAt?: Date;
}