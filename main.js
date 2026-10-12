// Instantiate TaskManager
const taskManager = new TaskManager();

// DOM Element Selectors
const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskListContainer = document.getElementById('taskList');

// Main function to load and render tasks
async function handleLoadTasks() {
    try {
        // Step 1: Update UI status
        statusMessage.textContent = "Loading tasks...";
        
        // Step 2: Fetch raw data asynchronously
        const rawData = await fetchTasks();

        // Step 3: Specific JSON Requirement (Stringify then Parse)
        const jsonString = JSON.stringify(rawData);
        const parsedData = JSON.parse(jsonString);

        // Step 4: Convert raw parsed objects into Task class instances
        const taskInstances = parsedData.map(item => new Task(item.id, item.title, item.completed));

        // Step 5: Store in TaskManager immutably
        taskManager.setTasks(taskInstances);

        // Step 6: Render tasks to DOM and clear status
        renderTasks();
        statusMessage.textContent = "";