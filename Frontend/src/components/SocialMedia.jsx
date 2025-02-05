import IntroVideo from "../Videos/IntroVideo.mp4"
import IG_Logo from "../assets/IG.png";
import YT_Logo from "../assets/yt_logo.png";
import { HeartButton1 } from "./HeartButton1";
import { HeartButton2 } from "./HeartButton2";

export function SocialMedia() {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-brownBlackShade" id="social">
            <div className="w-full lg:w-1/2 lg:flex-col flex justify-center lg:justify-normal py-10 lg:py-0">
                <div className="xl:w-[700px] 2xl:w-[800px] w-90% h-auto xl:h-[450px] 2xl:h-[560px] bg-black rounded-xl lg:mt-16 lg:ml-10  relative z-10 flex justify-center">
                    <video src={IntroVideo} className="rounded-xl w-full h-auto xl:h-[450px] 2xl:h-[560px]" autoPlay muted loop/>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 bg-socialColor2 flex items-center justify-center">
                    <div className="text-center lg:ml-24">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-700">
                                Find Us On Our<br />Social Media
                            </h2>
                        <div className="flex flex-col items-center space-y-6 mt-10">
                            <div className="flex items-center space-x-4 sm:space-x-6">
                                <img src={IG_Logo} alt="IG_Logo" className="h-20 sm:h-28 w-20 sm:w-28" />
                                <div><HeartButton1 text="Follow" link="https://www.instagram.com/literary_lnmiit/"/></div>
                            </div>
                            <div className="flex items-center space-x-4 sm:space-x-6">
                                <img src={YT_Logo} alt="YT_Logo" className="h-20 sm:h-28 w-20 sm:w-28" />
                                <div><HeartButton2 text="Subscribe" link="https://www.youtube.com/@LiteraryCommitteeLNMIIT"/></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
