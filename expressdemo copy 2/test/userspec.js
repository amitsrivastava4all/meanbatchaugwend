const userOperations = require('../db/helpers/useroperations');
const userObject = {
    'userid':'ram',
    'password':'ram123'
}
userOperations.addUser(userObject);