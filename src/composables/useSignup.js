import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";


export const useSignup = async (email, password,name) => {

  try{
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    if(!user){
      throw new Error("Не возможно проверсти регистрацию")
    }


    return user
  }
  
  catch (err) {
    throw new Error(err.message)
  }
}