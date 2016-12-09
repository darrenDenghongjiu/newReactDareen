import React from 'react';
import ReactDOM from 'react-dom';
import {
    IndexRoute,
    Router,
    Route,
    hashHistory
}from 'react-router';
import HttpUtil from './Helper/HttpUtil';
import Strings from './Helper/Strings';

// require('../../../UI/html/css/*.css');
const appNode = document.getElementById('app');
window.CaiTuo = {
    Http: HttpUtil,
    Strings: Strings
};


const App = React.createClass({
    componentDidMount(){
        var html = document.getElementsByTagName('html')[0];
        var size = html.style.fontSize;
        if (size == '0px') {
            !function (win, option) {
                var count = 0,
                    designWidth = option.designWidth,
                    designHeight = option.designHeight || 0,
                    designFontSize = option.designFontSize || 20,
                    callback = option.callback || null,
                    root = document.documentElement,
                    body = document.body,
                    rootWidth, newSize, t, self;
                root.style.width = '100%';
                //返回root元素字体计算结果

                function _getNewFontSize() {
                    var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
                    return parseInt(scale * 10000 * designFontSize) / 10000;
                }

                !function () {
                    rootWidth = root.getBoundingClientRect().width;
                    //self = self ? self : arguments.callee;

                    // 如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试20次，否则使用win.innerWidth计算

                    if (rootWidth !== win.innerWidth && count < 20) {
                        win.setTimeout(function () {
                            //count++;

                            // self();

                        }, 0);
                    } else {
                        newSize = _getNewFontSize();
                        //如果css已经兼容当前分辨率就不管了

                        if (newSize + 'px' !== getComputedStyle(root)['font-size']) {
                            root.style.fontSize = newSize + "px";
                            return callback && callback(newSize);
                        }
                    }
                }();
                //横竖屏切换的时候改变fontSize，根据需要选择使用

                win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                    clearTimeout(t);
                    t = setTimeout(function () {
                        self();
                    }, 300);
                }, false);
            }(window, {
                designWidth: 750,
                designHeight: 0,
                designFontSize: 20,
                callback: function (argument) {
                }
            });
        }
    },

    render(){
        return (
            <div>{this.props.children}</div>
        );
    }
});

//界面组件引用，参考如下
import Test from  './Pages/Test.jsx';
import Test1 from  './Pages/Test1.jsx';

//first 引入路由
const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Test}/>
            <Route path='test' component={Test}/>
            <Route path='test1' component={Test1}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, appNode);·