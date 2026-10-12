# web-lab4
build a Dynamic Task Dashboard using vanilla JavaScript
## Project Overview
This project is a single-page Dynamic Task Management Dashboard built with vanilla JavaScript. It demonstrates key frontend concepts including DOM manipulation, Async/Await operations, ES6 Classes, Immutability patterns, and JSON processing.

## File Organization
- `index.html`: Contains the core layout structure and DOM element entry points.
- `styles.css`: Styles the dashboard cards, layout, buttons, and completed state indicators.
- `taskManager.js`: Defines the `Task` and `TaskManager` ES6 classes implementing immutability principles.
- `api.js`: Simulates an asynchronous backend server response using Promises and timeouts.
- `main.js`: Orchestrates DOM events, handles state, parses JSON, and updates the view dynamically.
- `README.md`: Documents project structure, challenges, and implementation notes.

## Challenges Faced
1. **Ensuring Strict Immutability**: Preventing direct modification of state arrays and task instances required careful use of array helper functions (`map`, `filter`, spread syntax) and `Object.defineProperty`.
2. **Proper DOM Event Delegation**: Generating buttons dynamically via JavaScript DOM methods (`createElement`, `appendChild`, `addEventListener`) without inline HTML attributes to keep handlers cleanly separated.
3. **JSON Conversion Pipeline**: Correctly implementing the explicit `JSON.stringify` and `JSON.parse` sequence before converting raw data back into custom class instances.