/* 跨域 */

export default {
  '/api': {
    target: process.env.API,
    changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  },
};
