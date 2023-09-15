import bar from './bar.js';

// commonjs形式の読み込み方（nodeで使用される）
const foo = require("./foo.js");

bar();
foo();



// ＝＝＝＝＝＝＝＝reactの書き方＝＝＝＝＝＝＝＝
import React from "react";
import ReactDom from "react-dom";

// コンポーネント
const App = () => {
    return <h1>Hello!</h1>;
};

// 入れる場所
ReactDom.render(<App />, document.getElementById("app"));