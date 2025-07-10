import { Types } from "mongoose";


export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    USER = "USER",
    GUIDE = "GUIDE",
}


export enum isActive {
ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}


export interface IAuthProvider {
     provider: string;  // "Google", "Credential"
    providerId: string;
}

export interface IUser {
    name:string,
    email?:string,
    password:string,
    phone?:string,
    picture?:string,
    address?:string,
    isDeleted?:boolean,
    isActive?:isActive,
    isVerified?:string,
    role?:Role,
    auths?:IAuthProvider,
    booking?:Types.ObjectId[],
    guides?:Types.ObjectId[],
}