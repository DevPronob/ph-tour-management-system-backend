import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { User } from "./user.model";
import { UserServices } from "./user.service";
const createUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const user =await UserServices.createUserIntoDb(req.body)
   
    res.status(httpStatus.CREATED)
      .json({ message: "User Created SuccessFully", user });
  } catch (err: any) {
        next(err)
  }

};

const getAllUsers =async(req:Request,res:Response) =>{
    try {
        const result =await UserServices.getAllUsersFromDb()
        res.status(httpStatus.OK).json({message:"All Users Rectrive Successfully",result})
    } catch (error) {
        res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Something Went Wrong", error });
    }
}
export const UserController ={
    createUser,
    getAllUsers
}