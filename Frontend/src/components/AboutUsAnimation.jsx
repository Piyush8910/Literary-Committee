import "../mycss.css"

import grp1 from "../assets/AboutUsImages/grp1.jpg"
import grp2 from "../assets/AboutUsImages/grp2.jpg"
import grp3 from "../assets/AboutUsImages/grp3.jpg"
import grp4 from "../assets/AboutUsImages/grp4.jpg"
import grp5 from "../assets/AboutUsImages/grp5.jpg"
import grp6 from "../assets/AboutUsImages/grp6.jpg"
import grp7 from "../assets/AboutUsImages/grp7.jpg"
import grp8 from "../assets/AboutUsImages/grp8.jpg"

import art1 from "../assets/AboutUsImages/art1.jpg"
import art2 from "../assets/AboutUsImages/art2.jpg"

export function AboutUsAnimation(){
    return(
        <div className="bg-brownBlackShade pt-20 px-4 lg:pb-28 lg:pt-28">

            <div className="flex flex-wrap lg:flex-nowrap lg:justify-around gap-8 p-5">
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={grp5} className="w-full h-full object-cover"/>
                </div>
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={grp3} className="w-full h-full object-cover"/>
                </div>
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={art1} className="w-full h-full object-cover"/>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap lg:justify-around gap-8 p-5 mt-16 sm:mt-24 lg:mt-32">
                <div className="border-2 h-[200px] sm:h-[250px] w-full lg:w-[700px] text-white text-3xl p-5 sm:p-0 sm:text-5xl font-vibes flex justify-center text-center items-center" id="block">
                    "Manuscripts don't burn."    
                </div>
                <div className="border-2 h-[200px] sm:h-[250px] w-full lg:w-[300px]" id="block">
                    <img src={grp6} className="w-full h-full object-cover"/>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap lg:justify-around gap-8 p-5 mt-16 sm:mt-24 lg:mt-32">
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={grp7} className="w-full h-full object-cover"/>
                </div>
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={grp4} className="w-full h-full object-cover"/>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap lg:justify-around gap-8 p-5 mt-16 sm:mt-24 lg:mt-32">
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={grp2} className="w-full h-full object-cover"/>
                </div>
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={art2} className="w-full h-full object-cover"/>
                </div>
                <div className="border-2 h-[250px] sm:h-[300px] w-full lg:w-[350px]" id="block">
                    <img src={grp8} className="w-full h-full object-cover"/>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap lg:justify-around gap-8 p-5 mt-16 sm:mt-24 lg:mt-32">
                <div className="border-2 h-[200px] sm:h-[250px] w-full lg:w-[300px]" id="block">
                    <img src={grp1} className="w-full h-full object-cover"/>
                </div>
                <div className="border-2 h-[200px] sm:h-[250px] w-full lg:w-[700px] text-white text-xl p-5 sm:p-10 sm:text-3xl font-vibes flex justify-center text-center items-center" id="block">
                    "Stories of Imagination tend to upset those without One."
                </div>
            </div>
        </div>
    )
}