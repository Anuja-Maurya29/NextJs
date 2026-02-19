import {body} from "express-validator";
import userModel from "../models/user.js";
// import user from '../models/user.js' 


export const signUpValidator = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First Name is required")
    .isLength({ min: 3 })
    .withMessage("Atleast 3 char are required"),



  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required"),


      body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await userModel.findOne({ email })
      if (user) {
        throw new Error("Email already exists")
      }
    }),

    body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
     .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")


];


export const loginValidator =[

  body("email")
  .trim()
  .notEmpty()
  .withMessage("Password is required")
  .isEmail()
  .withMessage("Invalid email format"),


  body("password")
  .trim()
  .notEmpty()
  .withMessage("Email is required")
  
]