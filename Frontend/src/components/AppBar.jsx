import { useState } from "react";
import LNM_logo from "../assets/lnm_logo.png"
import { useNavigate } from "react-router-dom";

export function AppBar(){

    const navigate = useNavigate()
    const [isMobileMenuOpen,setisMobileMenuOpen] = useState(false)

    const scrollToContact=()=>{
        event.preventDefault();
        document.getElementById("contactUs").scrollIntoView({behavior:"smooth"});
    }

    const toggleMobileMenu = ()=>{
        setisMobileMenuOpen(!isMobileMenuOpen)
    }

    return(
        <nav className="fixed top-0 left-0 w-full font-serif flex justify-between z-50 text-white px-5 bg-black">
            <div className="font-serif flex justify-between z-50 text-white lg:py-2 pl-7 pr-3 lg:pr-10 py-2 bg-black w-screen">
                <div className="flex items-center flex-1">
                        <span className="-mt-1 hover:cursor-pointer" onClick={()=>{navigate('/')}}>
                            <img src={LNM_logo} width={135}/>
                        </span>
                </div>

                <div className="hidden lg:flex flex-1 items-center justify-end font-poppins font-semibold">
                    <ul className="flex gap-8 text-[18px]">
                        <li className="cursor-pointer hover:text-gray-300" onClick={()=>{
                            navigate('/')
                            window.scrollTo(0, 0);
                            }}>Home</li>
                        <li className="cursor-pointer hover:text-gray-300" onClick={()=>{
                            navigate('/about-us')
                            window.scrollTo(0, 0);
                            }}>About Us</li>
                        <li className="cursor-pointer hover:text-gray-300" onClick={()=>{
                            navigate('/our-events')
                            window.scrollTo(0, 0);
                            }}>Our Events</li>
                        <li className="cursor-pointer hover:text-gray-300" onClick={()=>{
                            scrollToContact()
                            window.scrollTo(0, 0);
                            }}>Contact</li>
                    </ul>
                </div>

                <div className="lg:hidden flex items-center">
                    <button className="text-white p-2" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className={`z-50 lg:hidden fixed top-0 left-0 h-full bg-black w-64 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
                    <div className="flex flex-col items-center py-4 text-white">
                        <ul className="flex flex-col gap-4 text-[18px] mt-10">
                            <li className="cursor-pointer hover:text-gray-300" onClick={()=>{navigate('/');
                                window.scrollTo(0, 0);
                            }}>Home</li>
                            <li className="cursor-pointer hover:text-gray-300" onClick={()=>{
                                navigate('/about-us');
                                window.scrollTo(0, 0);
                                }}>About Us</li>
                            <li className="cursor-pointer hover:text-gray-300" onClick={()=>{
                                navigate('/our-events');
                                window.scrollTo(0, 0);
                                }}>Our Events</li>
                            <li className="cursor-pointer hover:text-gray-300" onClick={scrollToContact}>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}