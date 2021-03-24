// 生产环境下清除console打印
const plugins = []
if (process.env.VUE_APP_ENVNAME === 'prod') {
  //exclude(忽略)
  plugins.push(["transform-remove-console", { "exclude": ["error", "warn"] }])
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
