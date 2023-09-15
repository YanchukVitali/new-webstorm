import React from "react";
import {findByTitle} from "@testing-library/react";
import {debug} from "util";


type AccordionPropsType = {
    titleVelue: string
}
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    //debugger
    return (
        <div>
            <AccordionTitle title={props.titleVelue}/>
            <AccordionBody />
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>---{props.title}---</h3>
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion