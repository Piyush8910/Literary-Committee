import LNM_logo from "../assets/lnm_logo.png"
import IG_Logo from "../assets/IG.png";
import YT_Logo from "../assets/yt_logo.png";

export default function ContactUs(){
    
    return(
        <div className="w-screen pb-16 text-white pt-10 bg-brownBlackShade" id="contactUs">
            <div className="text-4xl sm:text-5xl md:text-6xl flex justify-center font-bold">Contact Us</div>
            <div className="flex flex-col lg:flex-row items-center justify-center pt-10 lg:pt-20 gap-10 lg:gap-20 px-6 lg:px-0">
                <div className="w-full max-w-[500px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.966118263087!2d75.92091417505092!3d26.936288576633224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1735963966315!5m2!1sen!2sin" width="450" height="370" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl w-full h-[350px]"></iframe>
                </div>
                <div className="text-lg text-center lg:text-left">
                    <img src={LNM_logo} width={150} height={150} className="mx-auto lg:mx-0"/>
                    <div className="mt-6 space-y-2">
                        <div>Rupa ki Nangal, Post-Sumel,</div>
                        <div>Via - Jamdoli, Jaipur,</div>
                        <div>Rajasthan 302031</div>
                        <div className="mt-3">Phone - 0141 268 8090</div>
                        <div>Email - info.lnmiit@lnmiit.ac.in</div>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-5 gap-6">
                        <div className="hover:cursor-pointer" onClick={()=>{window.open("https://www.instagram.com/literary_lnmiit/", "_blank");}}><img src={IG_Logo} width={40} height={40}/></div>
                        <div className="hover:cursor-pointer" onClick={()=>{window.open("https://www.youtube.com/@LiteraryCommitteeLNMIIT", "_blank")}}><img src={YT_Logo} width={40} height={40}/></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}