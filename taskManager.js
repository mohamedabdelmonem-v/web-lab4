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