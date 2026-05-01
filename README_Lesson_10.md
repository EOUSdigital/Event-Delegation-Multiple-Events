# 🟧 Module 08 – Lesson 10: Event Delegation & Multiple Events

## 📌 Overview
This lesson builds on event bubbling to introduce **event delegation**, a powerful technique for handling events efficiently using a single parent listener. It also covers handling **multiple event types** with cleaner, reusable code.

---

## 🧠 Concepts Covered

### 1. Event Delegation
- Attach one event listener to a parent element
- Use `e.target` and `.closest()` to detect which child triggered the event
- Works for both existing and dynamically added elements

---

### 2. Why Event Delegation?
- Reduces the number of event listeners
- Improves performance
- Simplifies code
- Supports dynamic UI elements

---

### 3. Using `.closest()`
- Finds the nearest matching ancestor element
- Handles clicks on nested elements (e.g. `<span>` inside a button)
- More reliable than `.classList.contains()` alone

---

### 4. Multiple Events
- Use one function for multiple event types
- Loop through event types instead of repeating code

---

## 💻 Example: Basic Event Delegation

```js
const parent = document.getElementById("parent");

parent.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    console.log("Button clicked:", e.target.textContent);
  }
});
```

---

## 💻 Example: Using `.closest()`

```js
const parent = document.getElementById("parent");

parent.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");

  if (btn) {
    console.log("Clicked:", btn.textContent);
  }
});
```

---

## 💻 Example: Realistic UI (Delete Cards)

```js
const parent5 = document.getElementById('parent5');

parent5.addEventListener("click", function (e) {
  const deleteBtn = e.target.closest(".delete-btn");

  if (deleteBtn) {
    const item = deleteBtn.closest(".item");
    item.remove();
  }
});
```

---

## 💻 Example: Multiple Events

```js
function handleEvent(e) {
  console.log("Event type:", e.type);
}

const btn = document.getElementById("child");

["click", "mouseover", "mouseout"].forEach(eventType => {
  btn.addEventListener(eventType, handleEvent);
});
```

---

## 🔑 Key Takeaways

- Event delegation uses event bubbling to handle child interactions
- `e.target` identifies where the event started
- `.closest()` ensures reliable element selection
- Use one listener instead of many
- Delegate events for dynamic and scalable UI behaviour
- Multiple events can be handled with one function

---

## ⚠️ Common Mistakes

- Using `e.target` directly without `.closest()`
- Adding multiple listeners unnecessarily
- Forgetting to check for null when using `.closest()`
- Removing wrong elements (e.g. button instead of container)

---

## 🛠️ Practice Tasks

### Task 1:
Use event delegation to detect which button is clicked inside a parent container.

### Task 2:
Remove a clicked button using `.closest()`.

### Task 3:
Create a card UI and remove entire cards using a delete button.

### Task 4:
Handle multiple events using one function and an array of event types.

---

## 🚀 Real-World Use Cases

- To-do list apps
- Shopping carts
- Dynamic dashboards
- CRUD interfaces

---

## 🤔 Reflection Questions

- 1️⃣ Why is event delegation more efficient than multiple listeners?
- Answer: Event delegation is more efficient because we can use one listener on the parent instead of many listeners on each child. That means less memory use and simpler code, especially for lists that can grow.
- 2️⃣ Why is `.closest()` more reliable than `.classList.contains()`?
- Answer: The `.closest()` is more reliable because it walks up from the clicked element to find the right parent, even if the click happened on a nested child like a `span`. The `.classList.contains()` only checks the current element, so it can miss the real target if the click was on a child element.
- 3️⃣ How does event bubbling make delegation possible?
- Answer: Event bubbling makes delegation possible because the event starts on the clicked element and then moves up to its parents. The parent listener can catch that bubbled event and decide which child was clicked.

---

## 💡 Final Thought

Event delegation is a core concept for building scalable, efficient, and maintainable front-end applications. 🚀
