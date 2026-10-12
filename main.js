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

        } catch (error) {
        // Error handling as requested
        statusMessage.textContent = "Failed to load tasks. Please try again.";
        console.error("Error fetching tasks:", error);
    }
}

// Function to render tasks using DOM creation methods (No inline HTML handlers)
function renderTasks() {
    // Clear current DOM container contents
    taskListContainer.innerHTML = '';

    taskManager.tasks.forEach(task => {
        // Create parent task element
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.completed ? 'completed' : ''}`;

        // Title span
        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;

        // Button wrapper
        const btnContainer = document.createElement('div');
        btnContainer.className = 'task-buttons';

        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = task.completed ? 'Undo' : 'Complete';
        toggleBtn.addEventListener('click', () => {
            taskManager.toggleTask(task.id);
            renderTasks();
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskManager.removeTask(task.id);
            renderTasks();
        });

        // Append buttons and spans to card
        btnContainer.appendChild(toggleBtn);
        btnContainer.appendChild(deleteBtn);
        
        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(btnContainer);

        // Append to task list in DOM
        taskListContainer.appendChild(taskDiv);
    });
}

// Event Listeners setup
loadTasksBtn.addEventListener('click', handleLoadTasks);