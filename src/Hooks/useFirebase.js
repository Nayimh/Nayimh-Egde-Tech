import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithEmailAndPassword,updateProfile,  signOut, onAuthStateChanged, signInWithPopup  } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);

            
            updateProfile(auth.currentUser, {
                displayName: name
            })
                .then(() => {
                })
                .catch((error) => {
                });
            navigate('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    // signin with email password

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            navigate(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // sign in with google

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           
            setAuthError('');

            const destination = location?.state?.from || '/';
            navigate(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }



    // observe user state
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              
             setUser(user)
       
            } else {
              setUser({})
            }
       });
        return () => unsubscribe;
    }, [auth])




    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
        .finally(()=> setIsLoading(false))
    }



    return {
        user,
        registerUser, 
        loginUser,
        signInWithGoogle,
        logout,
        isLoading, 
        authError
    }
}

export default useFirebase;