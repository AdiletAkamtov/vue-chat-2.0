import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";


export const useLogin = async (email, password) => {

  try{
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if(!user){
      throw new Error("Не возможно проверсти регистрацию")
    }

    return user
  }
  
  catch (err) {
    throw new Error(err.message)
  }
}