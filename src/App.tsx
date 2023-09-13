import React from 'react';

import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

// function declaration

function hello() {
    //debugger
   // alert("Hello IT-Kamasutra")
}

hello();

function App() {
    console.log("App rendering")
    //debugger
    return (
        <div>
            <Rating />
            <AppTitle />
            <Rating/>
            <Accordion/>

        </div>

    );
}
function AppTitle (){
    console.log("AppTitle rendering")
    return <>This is APP component</>
}

function Rating() {
    console.log("Rating rendering")
    //debugger
    return (
        <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>
    );
}
function Star() {
    console.log("Star rendering")
    return (
        <div>Star</div>
    );
}



function Accordion() {
    console.log("Accordion rendering")
    //debugger
    return (
        <div>
        <AccordionTitle />
        <AccordionBody />
        </div>
    );
}

function AccordionTitle (){
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>Menu</h3>
        </div>
    );
}
function AccordionBody (){
    console.log("AccordionBody rendering")
    return  (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
export default App;
