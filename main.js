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