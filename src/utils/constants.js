export const bg_url =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const user_avatar =
  "https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e";

export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjc1MDY0MTZmZTFkYTRkNTc5YTRhMGJjYjBhZDg1NSIsInN1YiI6IjY1NDhkNjZlNDFhNTYxMzM2ZDg1NzEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oupckFXnrQLtQQGTjZKm6YRZ3LfqavCl7Bl0AFaGnI0",
  },
};

export const SUPPORTED_LANGUAGES = [{identifier: "en",name: "English"},
{identifier: "hn",name: "Hindi"},
{identifier: "ur",name: "Urdu"},
{identifier: "sp",name: "Spanish"},];

export const lang = {
  en: {
      search: "Search",
      gptSearchPlaceholder: "what would you like to watch today ? "
  },
  hn: {
      search: 'खोज',
      gptSearchPlaceholder:'क्या आप आज देखना चाहेंगे ?'
  },
  ur: {
      search:'جستجو',
      gptSearchPlaceholder:"کیا ترغیبتون میں ہمارے رات کا"
  },
  sp: {
      search:"Buscar",
      gptSearchPlaceholder:"¿Qué quieres ver hoy?"
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
