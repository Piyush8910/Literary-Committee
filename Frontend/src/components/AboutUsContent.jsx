import legacy from "../assets/AboutUsImages/legacy.jpg"
import learning from "../assets/AboutUsImages/learning.jpg"
import haven from "../assets/AboutUsImages/haven.png"

export function AboutUsContent(){
    return(
        <div className="w-screen bg-contentColor text-white pt-10 px-4 xl:pl-20 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7 md:ml-10 items-center">

                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold">Fostering a Culture of Learning</div>
                    <div className="h-[5px] w-[180px] bg-greyforCoord mt-5 rounded-lg mx-auto md:mx-0"></div>
                    <div className="mt-5 max-w-xl mx-auto md:mx-0">The Literary Committee holds a prominent position in the science and tech council. It functions to uphold a culture that fosters learning, creativity, and expression. By encouraging intellectual growth, it helps individuals evolve and contributes to the institute’s development, making it a vital part of the LNMIIT academic ecosystem.</div> 
                </div>
                <div className="flex justify-center">
                    <img src={learning} className="rounded-full h-[200px] md:h-[270px] w-[200px] md:w-[270px]"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 items-center">
                <div className="flex justify-center order-1 md:order-none">
                    <img src={haven} className="rounded-full h-[200px] md:h-[270px] w-[200px] md:w-[270px]"/>
                </div>
                <div className="text-center md:text-left md:mr-3">
                    <div className="text-3xl md:text-4xl font-bold">A Haven for Literary Enthusiasts</div>
                    <div className="h-[5px] w-[180px] bg-greyforCoord mt-5 rounded-lg mx-auto md:mx-0"></div>
                    <div className="mt-5 max-w-xl mx-auto md:mx-0">It was started with a purpose to promote the interests of literary enthusiasts. The events organized by the committee encourages an individual to express themselves and bring out their creativity and innovation through all the best means. Besides technical education in the institute, the events conducted by the committee are a breath of fresh air and help maintain the stability among the LNMIIT family.</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 items-center">
                <div className="text-center md:text-left md:ml-10">
                    <div className="text-3xl md:text-4xl font-bold">Shaping Minds, Building Legacy</div>
                    <div className="h-[5px] w-[180px] bg-greyforCoord mt-5 rounded-lg mx-auto md:mx-0"></div>
                    <div className="mt-5 max-w-xl mx-auto md:mx-0">The Literary Committee plays a crucial role in shaping the attitude and thinking of those associated with it. Through its initiatives, it fosters intellectual growth, creativity, and expression. Upholding its rich legacy, the committee continues to inspire and impact individuals, ensuring its influence grows stronger with each passing year.</div> 
                </div>
                <div className="flex justify-center">
                    <img src={legacy} className="rounded-full h-[200px] md:h-[270px] w-[200px] md:w-[270px]"/>
                </div>
            </div>
        </div>
    )
}