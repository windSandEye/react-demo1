
let path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {//指定可以被import的文件名后缀
        extensions: ['.js', '.jsx', 'less', '.ts']
    },
    mode:'none',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: path.resolve(__dirname, './src'),
                exclude: '/node_modules/',
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            "@babel/preset-react"
                        ],
                        plugins: [
                            '@babel/plugin-transform-react-jsx',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }, 
            },
            { test: /\.css$/, use: ['style-loader,css-loader'] },
            //打包css文件
        ]
    },
    //4、服务器依赖包配置
    devServer: {//注意：网上很多都有colors属性，但是实际上的webpack2.x已经不支持该属性了
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}

