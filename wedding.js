$(function() {

    $(window).scroll(function() {

        var mass = Math.max(20, 70-0.1*$(this).scrollTop()) + 'px';

        $('#expandable').css({'font-size': mass, 'line-height': mass});

    });

});