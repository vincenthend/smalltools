const {DECODE_URL} = require('./constants/url')

module.exports = {
  reactStrictMode: false,
  rewrites() {
    return [
      {
        source: '/api/decode',
        destination: DECODE_URL
      }
    ]
  }
}
