import React, { useContext, useState, useEffect, ReactNode } from 'react'
import { auth, appFirebase } from 'src/credentials'
import { User } from 'firebase/auth'
import { UserData } from 'src/types/general'
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore'
const db = getFirestore(appFirebase)

interface AuthContextType {
  currentUser: User | null;
  profile: UserData | null;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserData | null>(null);

  const getProfile = async (uid: string) => {
    const q = query(collection(db, 'users'), where('uid', '==', uid))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]
      const userData = userDoc.data() as UserData
      return userData
    }
    return null
  }

  useEffect(() => {
    if (currentUser)
      getProfile(currentUser.uid).then(data => setProfile(data))
  }, [currentUser])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    profile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
