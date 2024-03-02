import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
const Card = ({review}) => {

    let imageUrl = review.image;
    let name = review.name;
    let job = review.job;
    let text = review.text;

    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem]  mx-auto z-[10]'>
                <img 
                className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' 
                src={imageUrl}></img> 
                <div className='absolute h-[140px] w-[140px] bg-violet-500 top-[-6px] right-[-6px] rounded-full -z-[20] '></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl tracking-wider'> {name} </p>
                <p className='text-violet-300 uppercase text-sm'> {job} </p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'> 
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                {text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>


        </div>
    )
}

export default Card;