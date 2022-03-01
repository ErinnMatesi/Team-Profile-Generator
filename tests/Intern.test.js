const Intern = require('../lib/Intern');

describe('createSchoolValue', ()=> {
    it('should create a school value', () => {
        const school = 'School Name';
        const employeeInfo = new Intern('Erinn', 4, 'erinnmatesi@gmail.com', school);

        expect(employeeInfo.school).toEqual(school);
    });
});

describe('getSchool', ()=> {
    it('should get the school name', () => {
        const school = 'School Name';
        const employeeInfo = new Intern('Erinn', 4, 'erinnmatesi@gmail.com', school);

        expect(employeeInfo.getSchool()).toEqual(school);
    });
});

describe('getRole', ()=> {
    it('should get the role', () => {
        const role = 'Intern';
        const employeeInfo = new Intern('Erinn', 4, 'erinnmatesi@gmail.com', 'School Name');

        expect(employeeInfo.getRole()).toEqual(role);
    });
});