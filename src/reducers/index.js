const context = require.context('./', false, /\.js$/);
export default context.keys().filter(item => item !== './index.js').map(key => context(key));