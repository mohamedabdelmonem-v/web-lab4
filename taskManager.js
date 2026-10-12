// Class representing an individual Task
class Task {
    constructor(id, title, completed = false) {
        // Define 'id' as a read-only and immutable property
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true
        });

        this.title = title;
        this.completed = completed;
    }

    // Returns a new Task instance with inverted completion status (Immutable)
    toggle() {
        return new Task(this.id, this.title, !this.completed);
    }
}

// Class representing the Manager of tasks
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Replaces tasks immutably
    setTasks(newTasks) {
        this.tasks = [...newTasks];
    }

    // Adds a task immutably
    addTask(task) {
        this.tasks = [...this.tasks, task];
    }

    // Removes a task immutably using filter
    removeTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }