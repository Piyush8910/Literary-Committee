import { AppBar } from "../components/AppBar";
import ContactUs from "../components/ContactUs";
import { AbouUsTopBackground } from "../components/AboutUsTopBackground";
import { AboutUsAnimation } from "../components/AboutUsAnimation";
import { AboutUsContent } from "../components/AboutUsContent";

export function AboutUs(){
    return (
    <div className="overflow-x-clip">
        <AppBar/>
        <AbouUsTopBackground/>
        <AboutUsAnimation/>
        <AboutUsContent/>
        <ContactUs/>
    </div>
    )
}