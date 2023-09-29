
// ------------------------------------------------
//         The setTimeout() function
// ------------------------------------------------


// SIMPLE EXAMPLE - 1
// ------------------ 

// console.log("WARNING! In exactly five seconds something will explode");

// function theExplosion() {
//     console.log("BOOM!");
// }

// setTimeout(theExplosion, 5000);


// SIMPLE EXAMPLE - 2
// ------------------ 

// function theExplosion() {
//     alert("BOOM!");
// }

// const button = document.createElement("button");
// button.textContent = "WARNING";
// button.addEventListener("click", () => {
//     // this will delay the event by 5 seconds
//     setTimeout(theExplosion, 5000);
// });
// document.body.appendChild(button);


// RECURSION
// ---------
// let times = 0;
// function heyYou() {
//     console.log("Hey! You! I called you " + times + " times!");
//     times++;

//     const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
//     setTimeout(heyYou, nextCall);
// }
// heyYou();




// ------------------------------------------------
//         The setInterval() function
// ------------------------------------------------


// SIMPLE EXAMPLE
// -------------- 

// let times = 0;
// function heyYou() {
//     console.log("Hey! You! I called you " + times + " times!");
//     times++;
// }

// setInterval(heyYou, 1000);


// CLEARING TIMERS
// ---------------

const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");
let i = 0;
function myCallback(a, b) {
    // Your code here
    // Parameters are purely optional.
    console.log(a);
    console.log(b);
    i++;
    if (i === 10) {
        console.warn('STOP');
        clearInterval(intervalID);
    }
}

