import eventbg from "../assets/OurEventImages/eventbg1.png"

export function OurEventsHeading(){
    return(
        <div className="h-[500px] w-screen bg-contentColor flex justify-center items-center relative">
            <img src={eventbg} className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="text-7xl font-bold text-beige relative z-10">
                Our Events
            </div>
        </div>
    )
}