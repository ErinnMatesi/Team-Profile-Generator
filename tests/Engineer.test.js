const Engineer = require('../lib/Engineer');

describe('createGithubValue', ()=> {
    it('should create a github value', () => {
        const github = 'ErinnMatesi';
        const employeeInfo = new Engineer('Erinn', 4, 'erinnmatesi@gmail.com', github);

        expect(employeeInfo.github).toEqual(github);
    });
});

describe('getGithub', ()=> {
    it('should get the github name', () => {
        const github = 'ErinnMatesi';
        const employeeInfo = new Engineer('Erinn', 4, 'erinnmatesi@gmail.com', github);

        expect(employeeInfo.getGithub()).toEqual(github);
    });
});

describe('getRole', ()=> {
    it('should get the role', () => {
        const role = 'Engineer';
        const employeeInfo = new Engineer('Erinn', 4, 'erinnmatesi@gmail.com', 'ErinnMatesi');

        expect(employeeInfo.getRole()).toEqual(role);
    });
});