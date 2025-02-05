import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import cover1 from "../assets/slides/slide1/cover1.jpg"
import img1 from "../assets/slides/slide1/1.jpg"
import img2 from "../assets/slides/slide1/2.jpg"
import img3 from "../assets/slides/slide1/3.jpg"
import img4 from "../assets/slides/slide1/4.jpg"

import cover2 from "../assets/slides/slide2/cover2.jpg"
import img5 from "../assets/slides/slide2/5.jpg"
import img6 from "../assets/slides/slide2/6.jpg"
import img7 from "../assets/slides/slide2/7.jpg"
import img8 from "../assets/slides/slide2/8.jpg"

import cover3 from "../assets/slides/slide3/cover3.jpg"
import img9 from "../assets/slides/slide3/9.jpg"
import img10 from "../assets/slides/slide3/10.jpg"
import img11 from "../assets/slides/slide3/11.jpg"
import img12 from "../assets/slides/slide3/12.jpg"

export function SlideBar({slideNumber}) {

    let slides;

    if(slideNumber==1){
        slides = [
            {url: cover1},
            {url: img1},
            {url: img2},
            {url: img3},
            {url: img4},
        ];
    }
    else if(slideNumber==2){
        slides = [
            {url: cover2},
            {url: img5},
            {url: img6},
            {url: img7},
            {url: img8},
        ];
    }
    else{
        slides = [
            {url: cover3},
            {url: img9},
            {url: img10},
            {url: img11},
            {url: img12},
        ];
    }
    

    const [currentIndex,setCurrentIndex] = useState(0);

    function prevSlide(){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    function nextSlide(){
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="group rounded-xl mt-5 relative">
            <div className="w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[400px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px]">
                <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000">
                </div>
                <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 -translate-y-[-35%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={20}/>
                </div>
                <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 -translate-y-[-35%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={20}/>
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide,slideIndex)=>(
                        <div key={slideIndex} onClick={()=>{setCurrentIndex(slideIndex)}} className='text-2xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}