module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}],
             ['@babel/preset-reset', { runtime: "automic" }] ],
};