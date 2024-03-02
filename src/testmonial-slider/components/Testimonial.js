import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Card from "./Card";


const Testimonial = ({reviews}) =>{
    const [index, setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1)
        }else{
            setIndex(index-1)
        }
    }   
    
    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1)
        }
    }
    
    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*reviews.length));
    }
    return (
        <div className="flex flex-col items-center justify-center bg-white w-[85vw] md:w-[700px] mt-10 p-10 transition-all duration-200 hover:shadow-xl rounded-md" >
            <Card review = {reviews[index]}></Card>
            <div className='text-violet-400 mt-5 flex text-3xl gap-3 mx-auto'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}> 
                    <FaChevronLeft/> 
                </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}> 
                    <FaChevronRight/> 
                </button>
            </div>
            <div className="mt-7">
                <button onClick = {surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'> 
                    Surpise Me  
                </button>
            </div>
        </div>
    )
}

export default Testimonial;