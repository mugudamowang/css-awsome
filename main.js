// 用mvc改写js代码

!function () {
    //m  未添加数据处理模块

    // v    视图
    var iframeview = document.getElementsByClassName('ifm');

    // c    控制器
    var controller = {
        view: null,     //使用闭包,间接访问
        init: function (view) {
            this.view = view
            this.bindEvent()
        },
        bindEvent: function () {
            this.resize()
            window.onresize = this.resize()
            this.load()
        },
        resize: function () {
            var parentHeight = this.view[0].parentElement.clientHeight - 50;    //父组件高度
            for (var i = 0; i < this.view.length; i++) {
                this.view[i].style.height = parentHeight + 'px';
            }
        },
        load: function () {
            let divider = document.querySelector('.divider')
            divider.classList.add('dive')
            let main = document.querySelector('main')
            main.classList.add('show')
        }
    }

    controller.init.call(controller, iframeview)//   call(this,parameter)
}.call()//立即执行函数


/*  原来的代码, 缺乏组织 ,如果没有注释将会难以阅读, 若长度过长, 难以维护和阅读, 注释也没用
let iframe = document.getElementById('ifm');

function resizeIframe() {
    let parentHeight = iframe.parentElement.clientHeight - 50;
    document.getElementById('ifm').style.height = parentHeight + 'px';
}
resizeIframe();
window.onresize = resizeIframe;

!(function load() {
    let divider = document.querySelector('.divider')
    divider.classList.add('dive')
    let main = document.querySelector('main')
    main.classList.add('show')
}).call()
*/
