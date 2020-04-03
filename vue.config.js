const DefinePlugin = require('webpack').DefinePlugin
const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

var templateFunction = function (data) {
  console.log(data);

  var shared = '.sprite { background-image: url(I);background-size: Wpx Hpx;}'.replace('I', data.sprites[0].image).replace('W', data.spritesheet.width)
    .replace('H', data.spritesheet.height)

  var perSprite = data.sprites.map(function (sprite) {
    return '.sprite-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
      .replace('N', sprite.name)
      .replace('W', sprite.width)
      .replace('H', sprite.height)
      .replace('X', sprite.offset_x)
      .replace('Y', sprite.offset_y);
  }).join('\n');

  return shared + '\n' + perSprite;
};
module.exports = {
  publicPath: './',
  configureWebpack: config => {
    return {
      resolve: {
        modules: ['node_modules', './src/assets/images']
      },
      // config.resolve.modules = ['node_modules', './src/assets/images']
      // 定义一个插件数组。用来覆盖，在里面使用我们的主角
      plugins: [
        new ManifestPlugin({
          fileName: './assete-manifest.json'
        }),
        new SpritesmithPlugin({
          /*
          目标小图标，这里就是你需要整合的小图片的老巢。
          现在是一个个的散兵，把他们位置找到，合成一个
          */
          src: {
            cwd: path.resolve(__dirname, './src/assets/img'),
            glob: '*.png'
          },
          // 输出雪碧图文件及样式文件，这个是打包后，自动生成的雪碧图和样式，自己配置想生成去哪里就去哪里
          target: {
            image: path.resolve(__dirname, './src/assets/images/sprite.png'),
            css: [
              [path.resolve(__dirname, './src/assets/css/sprite.css'), {
                // 引用自己的模板
                format: 'function_based_template'
              }],
            ]
          },
          // 自定义模板入口，我们需要基本的修改webapck生成的样式，上面的大函数就是我们修改的模板
          customTemplates: {
            'function_based_template': templateFunction,
          },
          // 样式文件中调用雪碧图地址写法（Readme这么写的）
          apiOptions: {
            cssImageRef: '~sprite.png'
          },
          // 让合成的每个图片有一定的距离，否则就会紧挨着，不好使用
          spritesmithOptions: {
            padding: 20
          }
        })
      ]
      // config里面，覆盖掉以前的，要不然不好使
      // config.plugins = [...config.plugins, ...Plugins]
    }
  }
}