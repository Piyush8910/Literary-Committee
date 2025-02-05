import { AppBar } from "../components/AppBar";
import ContactUs from "../components/ContactUs";

import { OurEventsHeading } from "../components/OurEventsHeading";
import { OurEventsMain } from "../components/OurEventsMain";

export function OurEvents(){
    return (
    <div className="overflow-hidden">
        <AppBar/>
        <OurEventsHeading/>
        <OurEventsMain/>
        <ContactUs/>
    </div>
    )
}