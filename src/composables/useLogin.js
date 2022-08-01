import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export const uselogin = async (email, password) => {
  
  try {

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    
    if (!user) {
      throw new Error('Невозможно провести авторизироваться');
    }
    return user;
  }
  catch (err) {
    alert(err.message);
  }
};
