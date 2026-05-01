"use strict";

//Title 🟧 Module 8 - Events: Lesson 10. Event Delegation and Multiple Events

//* 🧠 Concept Explanation

//  💡 What is Event Delegation?
//  👉 Instead of adding event listeners to many elements…
//  We add 'ONE listener to a parent' and use bubbling to handle all child interactions.

//! ❌ Without Delegation

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Clicked");
    });
});

//  👉 Problem:
//  • Does not work well for dynamic elements
//  • Adds many listeners (inefficient)

//? ✅ With Delegation

parent.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        console.log("Clicked");
    }
});

//  👉 One listener handles everything.


//? 🧠 Why This Works
//  Because of event bubbling (previous lesson):
//  • Child → Parent → Document
//  👉 The parent “catches” the event


//* 🧩 Simple Example (Your Setup)
//  • HTML → index.html
//  • JavaScript → script.js

//  ✅ Result
//  • Works for all buttons
//  • Works for future buttons added later

//? 🧠 Key Tool
e.target
//  👉 The actual clicked element

//! ⚠️ Common Mistakes
//  • Using e.currentTarget instead of e.target
//  • Forgetting .classList.contains()
//  • Attaching listeners to children instead of parent

//* 🧩 Multiple Events (Second Part of Lesson)
//  Sometimes you want:
//  👉 One function → multiple event types

//  ✅ Example

function handleEvent(e) {
    console.log("Event type:", e.type);
}

const btn = document.getElementById("child");

["click", "mouseover", "mouseout"].forEach(eventType => {
    btn.addEventListener(eventType, handleEvent);
});

//? 🔍 Output
//  • click
//  • mouseover
//  • mouseout

//? 🧠 Why This Is Useful
//  • Cleaner code
//  • Reusable logic
//  • Less repetition


//* 🛠️ Guided Practice

//  🎯 Task 1: Delegation
//  Modify your HTML:   👉 Use ONE event listener to log which button is clicked

//  🎯 Task 2: Multiple Events
//  Add:    JavaScript

//  ✅ You are done when:
//  • Clicking buttons logs correctly
//  • Hovering also logs
//  • Only ONE listener setup is used

//* 🧠 Real-World Connection (Important)

//  This is exactly how you will:
//  • Delete items in lists
//  • Edit dynamic content
//  • Handle UI interactions efficiently
//  👉 This is used in every modern app

//# 🤔 Reflection Question

//  Why do you think event delegation works "even for elements added after the page loads"?
//  Answer: In event delegation we add one listener to a parent. The parent "catches" the event, for all children, even for those added later.

//! ⁉️ Feedback
// Your reflection answer is correct and well-stated ✅
//  👉 You clearly understand that delegation works because the parent listener handles all child events via bubbling, even for elements added later.


//TODO  🛠️ Your Exercise (No Code — You Build It)

//* 🎯 Goal: Upgrade Your Form Project with Event Delegation
//  You will extend your existing form app to support deleting individual cards using one event listener.

//* 🧩 Requirements

//? 1️⃣ Add a Delete Button
//  • Each generated card must include a Delete button

//? 2️⃣ Use Event Delegation
//  • Do NOT add event listeners to each button
//  • Add ONE event listener to the parent container (your #output)

//? 3️⃣ Detect the Click
//  • When clicking inside the container:
//      ~ Check if the clicked element is a Delete button

//? 4️⃣ Remove the Card
//  • If it is:
//      ~ Remove the correct card only
//      ~ Not all cards

//* ✅ Success Criteria
//  You are done when:
//  • You can create multiple cards
//  • Each card has its own Delete button
//  • Clicking Delete removes only that card
//  • You are using only one event listener

//# 💡 Hints (Only if you need them later)
//  Think about: e.target
//  You will likely need:
//  → .classList.contains()
//  → .parentElement

//# 🤔 Reflection While You Build

//  Ask yourself:
//  👉 “How does the parent know which button was clicked?”
//  Answer: Use the event object, especially 'event.target', to see which child element was actually clicked, while 'event.currentTarget' tells you which element the handler is attached to.

//# 🤔 Reflection Question

//  In your current setup:
//  👉 Why does if (btn) work as a condition instead of checking .classList.contains()?
//  Answer: The if (btn) works because btn is either an element object or null, and JavaScript treats objects as truthy and null as falsy. The 'e.target.closest(".btn")' searches from the clicked element upward and returns the nearest matching element, or null if none is found. That means btn already contains the result of the class check. The 'classList.contains("btn")' only checks the exact element you clicked, not its ancestors. If you click a child inside the button, contains() on the child returns false, but 'closest(".btn")' can still find the button.

//! ⁉️ Feedback

//? ✅ Reflection 1 Feedback
//  • “Use event.target and event.currentTarget…”
//  ✔ Correct
//  ✔ You clearly understand the distinction
//  ✔ Good use of terminology
//  👉 This is exactly how event delegation is explained at a professional level.

//? ✅ Reflection 2 Feedback
//  Your explanation:
//  • “btn is either an element or null… closest() already performs the check…”
//  ✔ Completely correct
//  ✔ You explained:
//  • Truthy/falsy behavior
//  • Difference between .closest() and .classList.contains()
//  • Edge case (nested elements)
//  👉 That last point about nested elements is especially important — that’s real-world thinking


//TODO  🧠 Goal of This Upgrade

//  Instead of buttons acting as “items”:
//  👉 We’ll create card-like elements
//  👉 Each card will have a Delete button inside
//  👉 You will remove the entire card, not just the button

//* 🧩 Your New HTML (parent5)

//  HTML

//? 🧠 What Changed (Important)

//  🟦 Instead of:
//  button = item

//  🆕 Now:
//  div.item = card
//  button = action inside the card

//  👉 This matches real apps:
//  • A post
//  • A task
//  • A product card

//? 🛠️ Your Task (No Code Given Intentionally)

//  🎯 You need to:
//  1. Add one event listener to #parent5
//  2. Detect:
//  👉 Was a .delete-btn clicked?
//  3. If yes:
//  👉 Remove the entire .item card, not just the button

//# 💡 Hints (only if needed)
//  • You will still use: e.target
//  • You will still use: .closest()

//  But now think:
//  👉 First find the button
//  👉 Then find the card container

//? 🔍 Expected Behavior

//  🟦 Before:
//  Item One   [Delete]
//  Item Two   [Delete]
//  Item Three [Delete]

//  🆕 Click Delete on Item Two →
//  Item One   [Delete]
//  Item Three [Delete]

//! ⚠️ Common Pitfall
//  👉 Don’t remove the button
//  👉 Remove the whole card (.item)

//* 🧠 Mental Model
//  Click → span
//       ↓
//  .closest(".delete-btn")  ✅ check action
//       ↓
//  .closest(".item")        ✅ find container
//       ↓
//  .remove()

//# 🤔 Reflection Question

//  Why do you think we use two '.closest()' calls instead of just one?
//  Answer: We use two .closest() calls because they solve two different lookup problems. The first finds the actual button that was clicked, and the second finds the containing .item so it can be removed. The 'e.target' can be a child inside the button, like an icon or <span>, not the button itself. The 'e.target.closest(".delete-btn")' walks upward until it finds the nearest delete button, so the click still works even when the user clicks a nested element.


//TODO  🧠 What You Did Well

const deleteItem = e.target.closest(".delete-btn");
const item = e.target.closest(".item");

if (deleteItem && item) {
    item.remove();
};

//  ✔️ Key strengths:
//  • You separated concerns:
//      • deleteItem → checks intent (was delete clicked?)
//      • item → finds what to remove
//  • You used .closest() correctly for:
//      • Nested elements (like <span> inside button)
//      • Reliable targeting
//  • Your condition:
if (deleteItem && item) {};

//  👉 Ensures:
//  • Only delete when the correct action is triggered
//  • Only remove valid elements

//* 🧠 Why This Is a Strong Pattern

//  You are now following a real-world structure:
//  1. Detect action (delete button)
//  2. Find related element (card)
//  3. Perform action (remove)
//  👉 This pattern is used everywhere in UI development.

//? 🔧 Optional Micro-Improvement

//  You could slightly optimize by only searching for '.item' after confirming delete click:

if (deleteItem) {
    const item = deleteItem.closest(".item");
    item.remove();
}

//  👉 Why?
//  • Avoids unnecessary DOM searches
//  • Slightly cleaner logic flow

//* 🧠 Big Picture (Important)

//  You have now mastered:
//  • Event bubbling
//  • Event delegation
//  • Targeting nested elements
//  • Controlling UI behaviour

//  👉 This is the foundation of:
//  • To-do apps
//  • Dashboards
//  • CRUD interfaces

//# 🤔 Reflection Question

//  Why is it better to find '.item' from the delete button (deleteItem.closest(...)) instead of from 'e.target' again?
//  Answer: Using deleteItem.closest('.item') is better because it starts from the exact button that was clicked and walks up to the correct card item, instead of trying to rediscover the target from the event again. This is more reliable when the click lands on a nested element like the <span> inside the button, because 'e.target' may point to the inner span rather than the button itself.

//! ⁉️ Feedback

//* ✅ Correct — clear and well reasoned.
//  👉 You identified the key point:
//  • deleteItem is already the confirmed action element
//  • It avoids relying on e.target, which can vary (e.g. <span>)
//  👉 Using deleteItem.closest(".item") is more reliable and intentional

//  🔧 Small refinement:
//  You could simplify it to:
//  • “It is better because we start from a known correct element (the delete button) instead of a potentially inconsistent one (e.target).”
