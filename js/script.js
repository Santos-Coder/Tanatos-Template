/* global $, window */

$(function () {
    'use strict';
//------------------------------------ Header Height
    $('.header').height($(window).height());
//------------------------------------ padding top
    $('.main').css('paddingTop', ($(window).height() - $(this).height()) / 2);
//------------------------------------ nice scroll plugin
    $("body").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "5px",
        cursorborder: 0
    });
//------------------------------------ button scroll smooth
    $('.btns a').on('click', function () {
        var scro = $(this).attr('href');
        $('html, body').animate({
        scrollTop: $(scro).offset().top
      }, 1000);
  });
//------------------------------------ Fixed menu
    $('.menu i').on('click', function () {
        $('.fixed-menu').animate({
            right: 0
        }, 800);
    });
    $('.fa-times').on('click', function () {
        $('.fixed-menu').animate({
            right: -280
        }, 800);
    })
    $('.fixed-menu a').on('click', function () {
        var menuA = $(this).attr('href');
        $('html, body').animate({
        scrollTop: $(menuA).offset().top
      }, 800, function () {
            $('.fixed-menu').animate({
            right: -280
        }, 50);
        });
    });
//------------------------------------ header arrow down
    $('.down').click(function () {
        $('html, body').animate({
            scrollTop: $('.services').offset().top
        }, 1000);
    });
//------------------------------------ hide placeholder
    var dataText = '';
    $('input, textarea').focus(function () {
        dataText = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', dataText);
    });
//------------------------------------ testimonials
    function testiCheck() {
        var rightArrow = $('.testi .fa-chevron-right'),
            leftArrow = $('.testi .fa-chevron-left');
        
        $('.client:first').hasClass('active') ? leftArrow.fadeOut(10) : leftArrow.fadeIn(10);
        $('.client:last').hasClass('active') ? rightArrow.fadeOut(10) : rightArrow.fadeIn(10);
    }
    testiCheck();
    $('.testi i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testi .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                testiCheck();
            });
        } else {
            $('.testi .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                testiCheck();
            });
        }
    
    });
//------------------------------------ textarea 
    var textar = $('textarea').attr('maxlength');

    $('.rem').html(textar + " Remaining Character");
 
    $('textarea').keyup(function () {
        var remchar = $(this).val().length,
            remcal = textar - remchar;
          
    $('.rem').html(remcal + " Remaining Character");
    });
});