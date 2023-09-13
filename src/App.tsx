import React from 'react';

import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

// function declaration

function hello(){
    debugger
    alert("Hello IT-Kamasutra")
}
hello();

function App() {
    debugger
    return (
        <div>
            This is APP component

            <Accordion />
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>

    );
}

function Star(){
    debugger
    return(

        <div>Star</div>
    );
}
/*function Rating() {
    debugger
    return (
        <div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
        </div>
    );
}
*/
    function Accordion(){
        debugger
    return (
<div>
    <h3>Menu</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>
    );
    }
export default App;
