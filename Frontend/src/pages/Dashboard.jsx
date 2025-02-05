import { AppBar } from "../components/AppBar";
import { Background } from "../components/Background";
import Content from "../components/Content";
import { SocialMedia } from "../components/SocialMedia";
import CoordDash from "../components/CoordDash";
import ContactUs from "../components/ContactUs";

export function Dashboard(){
    return (
    <div className="overflow-hidden">
        <AppBar/>
        <Background/>
        <Content/>
        <SocialMedia/>
        <CoordDash/>
        <ContactUs/>
    </div>
    )
}