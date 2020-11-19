const expect = require('chai').expect;
const getUser = require('./controller/get-user').getUser;

describe('Get User tests', () => {
  it('Get a user by email --> logistics@gmail.com', () => {
    return getUser('logistics@gmail.com')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        //Test result of name, email, password and department for the response
        response = response[0];
        expect(response.name).to.equal('Logistics & Supplies');
        expect(response.email).to.equal('logistics@gmail.com');
        expect(response.password).to.equal('123456');
        expect(response.department).to.equal('logistics');
      });
  });

  it('Get a user by email --> sales@gmail.com', () => {
    return getUser('sales@gmail.com')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        //Test result of name, email, password and department for the response
        response = response[0];
        expect(response.name).to.equal('Sales & Marketing');
        expect(response.email).to.equal('sales@gmail.com');
        expect(response.password).to.equal('123456');
        expect(response.department).to.equal('sales');
      });
  });
});