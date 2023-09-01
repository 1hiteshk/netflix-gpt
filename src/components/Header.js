import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NLOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleSignOut = () => {
   
signOut(auth).then(() => {
  // Sign-out successful.
  // navigate("/") we dont need it now bcoz on authStatusChanged will redirect us to the login or browse page automatically we have that code in useEffect on every render
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in or sin up, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName ,photoURL: photoURL}));
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });

      // unsubscribe when comp. unmounts
      return () => unsubscribe();
},[]);

const handleGptSearchClick = () => {
  // Toggle GPT search
  dispatch(toggleGptSearchView());
}

const handleLanguageChange = (e) => {
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value));

}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
        <img 
        className="w-44"
         src={NLOGO}
         alt="logo-netflix"
        />
         {user && <div className="flex p-2">
          { showGptSearch && (
            <select className="p-2 bg-gray-900 text-white m-2 cursor-pointer"
            onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map(lang => <option className="cursor-pointer" key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              
              {/* <option value="hn">Hindi</option>
              <option value="ur">Urdu</option>
              <option value="sp">Spanish</option> */}
            </select>
          )}
          <button className="py-2 px-4 bg-purple-600 text-white rounded mx-4 my-2"
           onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-10 h-10" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>}
    </div>
  )
}

export default Header