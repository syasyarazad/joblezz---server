const bcrypt = require('bcrypt')

// HASH PASSWORD
function hashPassword(password) {
    return bcrypt.hashSync(password, 8)
}

// COMPARE PASSWORD
function comparePassword(rawPassword, hashPassword) {
    return bcrypt.compareSync(rawPassword, hashPassword)
}


module.exports = { hashPassword, comparePassword }