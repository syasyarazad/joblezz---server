const { hashPassword, comparePassword } = require('./bcrypt')
const { signToken, verifyToken } = require('./jwt')

module.exports = { hashPassword, comparePassword, signToken, verifyToken }