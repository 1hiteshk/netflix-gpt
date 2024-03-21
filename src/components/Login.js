import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_url } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const checkValidateData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate email and password

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //sign in/ sign up
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="h-screen object-cover md:w-screen"
          src={bg_url}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full md:w-[30%] absolute px-10 py-2 my-32 md:my-20 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
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
          placeholder="Email"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <div className="flex">
          <input
            ref={password}
            type={passwordType}
            placeholder="Password"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg "
          />
          <i className="fa-regular fa-eye pt-7 absolute right-14"></i>
          {passwordType === "password" ? (
            <span onClick={() => setPasswordType("text")}>
              <i className="fa-regular fa-eye-slash pt-7 absolute right-14 cursor-pointer"></i>
            </span>
          ) : (
            <span onClick={() => setPasswordType("password")}>
              <i className="fa-regular fa-eye pt-7 absolute right-14 cursor-pointer"></i>
            </span>
          )}
        </div>
        <div>
         
        </div>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="py-4 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between text-gray-500 mb-6">
          <div>
            <input type="checkbox" className="" />
            Remember me
          </div>
          <p className="cursor-pointer hover:underline hover:text-white">Need help?</p>
        </div>
        <div className="text-gray-500 text-center">
          <p className="pb-2">
            {isSignIn ? "New to Netflix? " : "Already registered? "}
            <b
              className="text-white cursor-pointer hover:underline hover:text-red-600"
              onClick={toggleSignUp}>
              {isSignIn ? "Sign up now." : "Sign in now."}
            </b>
          </p>
          <p className="pb-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="cursor-pointer text-blue-500 hover:underline">
              Learn more.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
