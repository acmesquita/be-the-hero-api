const crypto = require('crypto')

export default function generateUniqId() {
  return crypto.randomBytes(4).toString('HEX')
}