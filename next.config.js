module.exports = {
  reactStrictMode: false,
  rewrites() {
    return [
      {
        source: '/api/decode',
        destination: 'http://nin10news.com/wp-content/themes/twentysixteen/inc/decode.php'
      }
    ]
  }
}
