import AboutUsbg from "../assets/AboutUsImages/AboutUsbg.jpg"

export function AbouUsTopBackground(){
    return(
        <div className="h-[400px] w-screen bg-contentColor flex justify-center items-center relative">
            <img src={AboutUsbg} className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="text-7xl font-bold text-beige relative z-10">
                About Us
            </div>
        </div>
    )
}