import { SlideBar } from "./SlideBar"

export default function Content(){
    return (
        <div className="w-full text-white flex flex-col justify-center bg-contentColor">
            <div className="font-medium text-6xl ml-7 mt-11">
                Abode of Writers of LNMIIT
            </div>
            <div className="flex mt-10 sm:mt-3 text-xl ml-7 font-ezcar p-2"><i>
            " Tremble, therefore, tyrants of the world! Tremble before the virtual writer! "</i>
            </div>

            <div className="h-[1100px] xl:h-[500px] xl:mb-12 flex flex-col gap-7 xl:flex-row items-center xl:flex xl:justify-around mb-3">
                <SlideBar slideNumber={1}/>
                <SlideBar slideNumber={2}/>
                <SlideBar slideNumber={3}/>
            </div>
        </div>
    )
}