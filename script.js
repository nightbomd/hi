// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0
const btnClick = document.getElementById("btnClick").addEventListener('click', () => {
   clickCount++;
   render(`Button clicked <strong>${clickCount}</strong> times.`)
});


/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */

const div = document.getElementById("dblCard")
div.addEventListener("dblclick", (e) => {
   div.classList.toggle("activated");
   const state = div.classList.contains("activated") ? "ON" : "OFF";
   render(`<p> the highlight is ${state}</p>`);
});


/* --------------------------------t
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById("kbKey");
const kbCode = document.getElementById("kbCode");

document.addEventListener("keydown", (e) => {

   kbKey.textContent = e.key === "" ? '(space)' : e.key;
   kbCode.textContent = e.code;

   console.log(kbKey);

});
/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */
const dayObject = new Date();
const time = dayObject.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
const day = dayObject.toLocaleDateString('en-US', { weekday: 'long' });
document.getElementById('btnTime').addEventListener('click', () => {
  render(`The time is <strong>${time}</strong> on <strong>${day}</strong>.`)
})

/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out

   Option B — Scroll Progress Bar
   - Add a small Bootstrap progress bar element at the very top of the page
   - Select the inner bar element
   - Write a function that calculates % scrolled
     (current scroll position ÷ total scrollable height)
   - Update the width of the bar with that percentage
   - Run this function when the page loads and on every scroll event

   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */
let hoverCounter = 0;
const hv = document.getElementById("hover");
hv.addEventListener("mouseenter", () => {

   hv.classList.add("activated");
   hoverCounter++;
   console.log(hoverCounter);
   render(`<p>omg u hovered over the thingy ${hoverCounter} times!!!!`)
});
hv.addEventListener("mouseleave", () => {

   hv.classList.remove("activated");
});
document.getElementById("cuh").addEventListener("input", (e) => {
   const key = e.target.value;
   render(`<p>${key}</p>`)
});
