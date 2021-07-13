import {DECODE_URL} from '../constants/url'
import {createProxyMiddleware} from 'http-proxy-middleware'

const proxy = createProxyMiddleware({
  target: DECODE_URL,
  changeOrigin: true,
  logLevel: 'debug',
  onError: (err) => console.error(err)
});

export default proxy