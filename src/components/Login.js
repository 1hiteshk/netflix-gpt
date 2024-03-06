import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
//import BG_URL from '../utils/BG_URL.jpg';
import { BG_URL, USER_AVATAR } from "../utils/constants";
import '../../src/index.css';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // console.log(message);

    if (message) return;

    // sign In / Sign Up logic , if msg is null, means passwrd,email are correct
    if (!isSignInForm) {
      //sign up form logic , once u call this api it will create a user on firebase & will give u a response
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in , whenever we r signing up it will auto. sign us in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!, gettting the updated value of user
            const {uid,email, displayName, photoURL} = auth.currentUser; // user wont have updated value so we will have a new auth info.
            dispatch(addUser({uid: uid, email: email, displayName: displayName ,photoURL: photoURL}));
            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          // if my response is success it will gave me a user object
          console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in , successfully then we will have a user
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
        className=" h-screen object-cover   md:w-screen " //md:h-auto md:w-full overflow-x-hidden
          src={BG_URL}
          alt="logo"
        />
      </div>
      {/* this will prevent refreshing/submit form on click of signIn */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-3/12 py-2 px-12 bg-black bg-opacity-80 my-44 md:my-24 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="py-4 my-2 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer hover:text-red-500" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
