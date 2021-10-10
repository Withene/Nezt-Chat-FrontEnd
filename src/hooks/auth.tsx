import { createContext, ReactNode, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContexType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContexType);

export function AuthProv(props: AuthContextProviderProps): any {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
    });
  }

  async function signInWithEmail(email: string, password: string): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithEmail }}>{props.children}</AuthContext.Provider>
  );
}
