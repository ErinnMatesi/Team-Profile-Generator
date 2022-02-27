import Employee from "./Employee";

class Engineer extends Employee {
    constructor(github) {
// add super() and other Employee parameters
// do I need to add name, id and email as variables here when they are already defined?
        const name = this.name;
        const id = this.id;
        const email = this.email;
        super(name, id, email);

        this.github = github;
    }
};

export default Engineer;