const Employee = require('../lib/Employee');

describe('createEmployee', ()=> {
    it('should create an Employee object', () => {
        const name = 'Erinn';
        const id = 1;
        const email = 'erinnmatesi@gmail.com'
        const employeeInfo = new Employee(name, id, email);

        expect(typeof(employeeInfo)).toBe('object');
    });
});

describe('getName', ()=> {
    it('should get the Employee Name', () => {
        const name = 'Erinn';
        const employeeInfo = new Employee(name, 1, 'erinnmatesi@gmail.com');

        expect(employeeInfo.getName()).toEqual(name);
    });
});

describe('getID', ()=> {
    it('should get the Employee ID', () => {
        const id = 1;
        const employeeInfo = new Employee('Erinn', id, 'erinnmatesi@gmail.com');

        expect(employeeInfo.getID()).toEqual(id);
    });
});

describe('getEmail', ()=> {
    it('should get the Employee email', () => {
        const email = 1;
        const employeeInfo = new Employee('Erinn', 4, email);

        expect(employeeInfo.getEmail()).toEqual(email);
    });
});

describe('getRole', ()=> {
    it('should get the role', () => {
        const role = 'Employee';
        const employeeInfo = new Employee('Erinn', 4, 'erinnmatesi@gmail.com');

        expect(employeeInfo.getRole()).toEqual(role);
    });
});