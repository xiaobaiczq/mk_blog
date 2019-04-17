//给模态框添加关闭事件
$(document).on('click', ' .mclose', function () {
    $(this).parents('.modal').css("display", "none");
});

var server;
var isfree = false;
var isValid = false;
var islogin = false;
$(function () {
    var player = videojs('thd-video');
    player.on('ready', function () {
        //alert('我准备好了');
        //sn = $(this).attr("ard");
        player.volume(0.2);
    });

    player.on('play', function () {
        //alert("播放中:" );
        //ask();
        // free()
        checkUserLogin();
        checkUserService();
    });
    player.on('pause', function () {
        //alert("暂停了 ");
        // if (!isfree) {
        //     free();
        // }
    });
    player.on('timeupdate', function () {
      return;

    });
    player.on('ended', function () {
        // player.src(server + sn + ".m3u8");
        // this.play();
        // checkUserLogin();
        // checkUserService();
        //alert('播放已结束！');
        free();
    });
});

function ask() {
    $.ajax({
        type: "post",
        url: '/getServer',
        // async: false,
        data: {},
        success: function (svs) {
            server = svs
            isfree = false;
        },
    });
}

function free() {
    var server = $("#asdfsfdasdf").attr("ptaf")
    $.ajax({
        type: "post",
        url: '/freeServer',
        data: {
            "server": server
        },
        success: function () {
            isfree = true;
        },
    });
}
window.onbeforeunload = function (event) {
    // if (server != undefined) {
    //     if (!isfree) {
    //         free();
    //     }
    // }
    if (!isfree) {
        free();
    }
};

function checkUserLogin() {
    $.ajax({
        type: "post",
        url: '/isLogin',
        data: {},
        success: function (dt) {
            islogin = dt;
        },
    });
}

function checkUserService() {
    $.ajax({
        type: "post",
        url: '/isValid',
        data: {},
        success: function (dt) {
            isValid = dt;
        },
    });
}
