// 載入轉存 css 檔案的套件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
    entry: {
        // 指定進入點並設定名稱及來源
        // "名稱":"來源 scss or sass 檔案"
        "styles": "./styles/scss/style.scss"
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                // 需要用到的 loader
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 指定輸出位置
            // [name] 為上方進入點設定的 "名稱"
            filename: "./styles/css/[name].css"
        })
    ]
};

module.exports = config;