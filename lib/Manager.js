import Employee from "./Employee";

class Manager extends Employee {
    constructor(office) {
// add super() and other Employee parameters

        this.office = office;
    }
};

export default Manager;