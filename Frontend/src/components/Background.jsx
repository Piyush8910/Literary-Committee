import { TypeAnimation } from "react-type-animation";

export function Background(){

    const scrollToSocial=()=>{
        event.preventDefault();
        document.getElementById("social").scrollIntoView({behavior:"smooth"});
    }

    return (
        <div className="bg-custom-image bg-cover bg-center h-screen flex flex-col justify-center items-center px-4">
            <div className="flex flex-col sm:flex-row items-center text-white text-5xl sm:text-6xl md:text-8xl mb-6 text-center">
                <img src="/LC_logo.png" className="w-[300px] sm:w-20 md:w-28 mt-2" alt="logo" />
                <TypeAnimation 
                    sequence={['', 1000, 'Literary Committee',1000,'',1000,'साहित्यिक समिति',1000,'',1000,'সাহিত্য কমিটি',1000,'',1000,'Comité Littéraire',1000,'',1000,'  文学委員会  ',1000,'',1000,'Comitatus Litterarius',1000,'',1000,'Comité Literario',1000,'',1000,'문학 위원회',1000,'']} 
                    wrapper="span" 
                    speed={30} 
                    repeat={Infinity} 
                    className="align-middle"
                />
            </div>
            <div className="mt-10">
            <button className="px-10 py-3 text-lg font-bold text-black bg-beige hover:bg-beigeDark rounded-lg shadow-lg transition-all duration-250 ease-in-out" onClick={scrollToSocial}>Explore</button>
            </div>
        </div>
    );
}
