import coord1 from "../assets/coord1.jpg"
import coord2 from "../assets/coord2.png"
import IG from "../assets/IG.png"
import linkedin from "../assets/linkedin.png"

export default function CoordDash(){
    return(
        <div className="bg-contentColor text-white pt-10 pb-10">
            <div className="m-5 md:10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                <div className="px-5 lg:ml-5 flex flex-col items-center lg:items-start">
                    <div className="text-3xl sm:text-5xl font-bold text-center lg:text-left">Meet Our Coordinators</div>
                    <div className="h-[5px] w-[180px] bg-greyforCoord mx-auto lg:mx-0 mt-5 rounded-lg"></div>
                    <div className="max-w-[600px] mt-6 bg-beige text-black py-7 px-6 rounded-xl font-noto text-sm sm:text-base text-center lg:text-left mx-auto lg:mx-0">
                        The Club coordinators are the giants upon whose shoulders the Literary Committee aspires to stand on.<br/> The people who we would stand on our desks for, the streetlights under which Kalam studied, the apple that fell on Newton’s scalp; innumerable metaphors come to mind but still, words falter when conveying their roles in the functioning and nourishing of our humble committee.
                    </div>
                    <div className="text-3xl sm:text-5xl mt-10 lg:ml-28 font-vibes text-center">
                        <div>“Oh Captain</div>
                        <div className="ml-14 mt-2">My Captain”</div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                    <div className="text-center">
                        <img src={coord1} width={250} height={250} className="rounded-full mx-auto"/>
                        <div className="text-lg sm:text-xl font-semibold mt-6">
                            SAHIL GAUR
                        </div>
                        <div className="flex justify-center gap-3 mt-3">
                            <img src={IG} width={27} height={27} className="cursor-pointer hover:opacity-80" onClick={()=>{window.open("https://www.instagram.com/saaahil_g/", "_blank");}}/>
                            <img src={linkedin} width={27} height={27} className="cursor-pointer hover:opacity-80" onClick={()=>{window.open("https://www.linkedin.com/in/links1/", "_blank");}}/>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src={coord2} width={250} height={250} className="rounded-full mx-auto"/>
                        <div className="text-lg sm:text-xl font-semibold mt-6">
                            ABIR SAMANTA 
                        </div>
                        <div className="flex justify-center gap-3 mt-3">
                            <img src={IG} width={27} height={27} className="cursor-pointer hover:opacity-80" onClick={()=>{window.open("https://www.instagram.com/apintofabeer/", "_blank");}}/>
                            <img src={linkedin} width={27} height={27} className="cursor-pointer hover:opacity-80" onClick={()=>{window.open("https://www.linkedin.com/in/abir-samanta-06901a264/", "_blank");}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}