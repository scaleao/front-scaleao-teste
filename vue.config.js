module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/main.scss";
        `,
      },
    },
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },

  transpileDependencies: ['quasar'],

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].favicon = './public/favicon.ico';
      return args;
    });
  },
  pwa: {
    name: 'Test',
    iconPaths: {
      favicon32: './public/favicon.ico',
      favicon16: './public/favicon.ico',
      appleTouchIcon: './public/favicon.ico',
      maskIcon: './public/favicon.ico',
      msTileImage: './public/favicon.ico'
    }
  },

  devServer: {
    proxy: {
      '/vendedores': {
        target: 'http://15.229.23.85', // Endereço do seu servidor Laravel
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
