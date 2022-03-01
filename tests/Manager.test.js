const Manager = require('../lib/Manager');

describe('createOfficeValue', ()=> {
    it('should create a office value', () => {
        const office = 1;
        const employeeInfo = new Manager('Erinn', 4, 'erinnmatesi@gmail.com', office);

        expect(employeeInfo.office).toEqual(office);
    });
});

describe('getOffice', ()=> {
    it('should get the office name', () => {
        const office = 1;
        const employeeInfo = new Manager('Erinn', 4, 'erinnmatesi@gmail.com', office);

        expect(employeeInfo.getOffice()).toEqual(office);
    });
});

describe('getRole', ()=> {
    it('should get the role', () => {
        const role = 'Manager';
        const employeeInfo = new Manager('Erinn', 4, 'erinnmatesi@gmail.com', 1);

        expect(employeeInfo.getRole()).toEqual(role);
    });
});