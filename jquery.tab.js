(function($) {
    $.fn.tabChange = function(opt) {
        //默认配置
        var _default = {
            activeClass  : 'active',
            btnClass     : 'tab-btn',
            contentClass : 'tab-content',
            event        : 'mouseover'
        };
        //自定义配置覆盖默认配置
        opt = $.extend(_default,opt);
        //初始化显示隐藏
        showOne(0);
        //绑定事件
        $(this).on(opt.event,function(){
            var _index = $(this).index();
            showOne(_index);
        })
        //显示隐藏
        function showOne(index){
            $('.' + opt.btnClass).eq(index).addClass(opt.activeClass).siblings().removeClass(opt.activeClass);
            $('.' + opt.contentClass).eq(index).show().siblings().hide();
        }
    }
})(jQuery)

