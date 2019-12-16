$(document).ready(function () {
    // $('.tab_content ul').removeClass('active');
    $(".fancybox").fancybox();

    $('.tab .tab_menu li').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.tab li').removeClass('active');
        // $('.tab_content ul').removeClass('active');

        $(this).addClass('active');
        $('.tab_content ul').removeClass('active').css({
            'display': 'none'
        });
        $("#" + tab_id).slideToggle().addClass('active');

    })



    $('.triger').click(function (event) {
        $(this).siblings('ul').slideToggle();
    });
    //



    $('.ex_menu li').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.tab li').removeClass('active');
        // $('.tab_content ul').removeClass('active');

        $(this).addClass('active');
        $('.tab_content ul').removeClass('active').css({
            'display': 'none'
        });
        $("#" + tab_id).slideToggle().addClass('active');

    });




    $('.triger').click(function (event) {
        $(this).siblings('ul').slideToggle();
    });
    //



    $('.ex_menu li').click(function () {

        $('.ex_menu li .click').removeClass('active');
        $('.ex_menu li a p').removeClass('active');

        $(this).children('a').children('.click').addClass('active');
        $(this).children('a').children('p').addClass('active');

    })


    //
    // $('.understand .table thead').click(function () {

    //     $(this).siblings('tbody').slideToggle();

    // })

    //modify by bluehorace

    // $('.understand .table thead').click(function () {
    //
    //     $(this).siblings('tbody').stop().slideToggle(50);
    //
    // });


    //toggle slide

    $('.table_wrap thead').click(function () {

        $th_height = $(this).height()+30;
        $tb_height = $(this).parent().height()+32;
        $table_wrap = $(this).closest('.table_wrap');

        $table_wrap.height($tb_height);

        if($table_wrap.height() === $tb_height){
            $table_wrap.height($th_height);
        }else {
            $table_wrap.height($tb_height);
        }
    })


});