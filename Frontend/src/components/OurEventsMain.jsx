import af1 from "../assets/OurEventImages/af1.jpg";
import af2 from "../assets/OurEventImages/af2.jpg";
import od1 from "../assets/OurEventImages/od1.jpg";
import od2 from "../assets/OurEventImages/od2.jpg";

export function OurEventsMain() {
    return (
        <div className="bg-contentColor pt-10 px-10 sm:pb-36 pb-16">
            <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                <div className="flex justify-center items-center relative order-1 lg:order-2 mr-10 sm:mr-0">
                    <img src={af1} className="rounded-full w-[170px] h-[170px] lg:w-[250px] lg:h-[250px] border-4 border-white" />
                    <img src={af2} className="rounded-full w-[170px] h-[170px] lg:w-[250px] lg:h-[250px] mt-40 lg:mt-60 ml-40 lg:ml-60 border-4 border-white absolute z-2" />
                </div>

                <div className="ml-5 lg:ml-10 pt-20 sm:pt-7 order-2 lg:order-1">
                    <div className="text-4xl lg:text-5xl font-ezcar">Afreen</div>
                    <div className="mt-2 text-md lg:text-lg">शायरी रंग है जन्नत का , जन्नत का रंग है शायरी </div>
                    <div className="w-full lg:w-[700px] mt-2 text-md lg:text-lg font-dmSans">
                        Poetry adds to reality, it does not simply describe it. It enriches the necessary competencies that daily life requires and provides. Afreen, The Literary Committee’s flagship event in Vivacity, invites bards and shayars alike to pour their hearts out on stage against the dusk-lit sky, setting the scene for an incredible evening punctuated by passion.
                    </div>
                </div>
            </div>


            <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

                <div className="flex justify-center items-center relative order-1 mr-10 sm:mr-0 xl:mr-20">
                    <img src={od1} className="rounded-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] border-4 border-white" />
                    <img src={od2} className="rounded-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] mt-40 lg:mt-60 ml-40 lg:ml-60 border-4 border-white absolute z-2" />
                </div>

                <div className="pt-20 order-2">
                    <div className="text-4xl lg:text-5xl font-ezcar">Open Discussion</div>
                    <div className="mt-2 text-md lg:text-lg font-playFair"><i>"Limitless discussion in a discussion-less World"</i></div>
                    <div className="w-full xl:w-[550px] 2xl:w-[700px] mt-2 text-md lg:text-lg font-dmSans">
                        Literary Committee presents Open Discussion, a bustling tavern where ideas and insights are presented under no pretense. Give your best drunken speech, showcase the very depth of your nerdy fandom, and start a cult to spark a revolution over specially curated topics that will tickle your curiosity. We promise not to judge, only award your outlandish notions with ramblings of our own.
                    </div>
                </div>
            </div>

            <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
                <div className="flex justify-center items-center relative order-1 lg:order-2 mr-10 sm:mr-0">
                    <img src={af1} className="rounded-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] border-4 border-white" />
                    <img src={af2} className="rounded-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] mt-40 lg:mt-60 ml-40 lg:ml-60 border-4 border-white absolute z-2" />
                </div>
                <div className="ml-5 lg:ml-10 pt-20 order-2 lg:order-1">
                    <div className="text-4xl lg:text-5xl font-ezcar">Odyssey</div>
                    <div className="mt-2 text-md lg:text-lg font-playFair"><i>"Two Voices, One Journey - Sail the Sea of Words."</i></div>
                    <div className="w-full lg:w-[700px] mt-2 text-md lg:text-lg font-dmSans">
                        An epic that holds prestige in history, mythology, and literature, has had its crowning achievement being the namesake of one of our premier events at Vivacity. Odyssey is the perfect opportunity to put all the musings and daydreams we often venture on paper. Literary Committee welcomes all who consider themselves dreamers. Come as a duo and present a hopeful ode to the countless empty yet fantastic thoughts, endless musings, and empirical jargon we conjure up for ourselves.
                    </div>
                </div>
            </div>
        </div>
    );
}
