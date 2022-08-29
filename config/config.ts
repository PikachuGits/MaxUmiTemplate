import { defineConfig } from '@umijs/max';
// import extraPostCSSPlugins from './postcss';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  access: {},
  model: {},
  initialState: {},
  request: {},
  mfsu: false,
  antd: {},
  history: { type: 'hash' },
  dva: {
    extraModels: [],
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
    title: true,
  },
  proxy,
  routes,
  npmClient: 'pnpm',
  metas: [{ name: 'referrer', content: 'no-referrer' }],
  // extraPostCSSPlugins,
});
