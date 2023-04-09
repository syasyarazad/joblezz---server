const jwt = require('jsonwebtoken')

// SIGN TOKEN
function signToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

// VERIFY TOKEN
function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
}


module.exports = { signToken, verifyToken }