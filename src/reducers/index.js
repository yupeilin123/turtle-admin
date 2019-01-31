const context = require.context('./', false, /\.ts$/);
export default context.keys().filter(item => item !== './index.ts').map(key => context(key));