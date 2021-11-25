const speakeasy = require('speakeasy')

var verified = speakeasy.totp.verify({
    secret: 'mTM9c[.0Q)IAI*fHRX{*^FrTZwe?#7Er',
    encoding: 'ascii',
    token: '605790'

})

console.log(verified)
