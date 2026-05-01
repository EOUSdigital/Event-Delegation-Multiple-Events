"use strict";

//Title 🟧 Module 8 - Events: Lesson 10. Event Delegation and Multiple Events

//? 🧩 Simple Example Setup

const parent2 = document.getElementById('parent2');

parent2.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked:", e.target.textContent);
    }
});

//? 🛠️ Guided Practice

const parent3 = document.getElementById("parent3");

["click", "mouseover"].forEach(event => {
    parent3.addEventListener(event, function (e) {
        console.log(event, e.target);
    });
});

//? 🛠️ Form Project with Event Delegation

const parent4 = document.getElementById('parent4');

parent4.addEventListener("click", function (e) {
    const btn = e.target.closest(".btn");
    if (btn) {
        btn.remove();
    } else {
        return;
    }
});

//? 🧩 Realistic Card UI

const parent5 = document.getElementById('parent5');

parent5.addEventListener("click", function (e) {
    const deleteItem = e.target.closest(".delete-btn");
    if (deleteItem) {
        const item = deleteItem.closest(".item");
        item.remove();
    }
});
