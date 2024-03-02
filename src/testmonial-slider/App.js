import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

 
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]  bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold"> Our Testmonials </h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto rounded-md"> </div>
          <Testimonial reviews={reviews}/>
        </div>
    </div>
  )
};



export default App;
