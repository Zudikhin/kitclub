$(document).ready(function () {
    "use strict";

    $(".header_content_btn").click(function() {
        $(this).toggleClass("active");
        $(".header_dropdown").toggleClass("active");
        $(".back_modal").toggleClass("active");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".header_dropdown").removeClass("active");
        $(".header_content_btn").removeClass("active");
    });

    $(".project_main_menu_mobile_btn_sticks").click(function() {
        $(this).toggleClass("active");
        $(".project_dropdown").toggleClass("active");
        $(".project_back").toggleClass("active");
    });

    $(".header_content_drop select").select2();

    $('.project_main_hero_item_about_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // $(".project_main_hero_item_configurator_list_item_body_item_title img").hover(function() {
    //     $(this).parent().parent().addClass("hov");
    // });

    $(".project_main_hero_item_configurator_list_item_body_item_title img").on({
        mouseenter: function() {
            $(this).parent().parent().addClass("hov");
        },
        mouseleave: function() {
            $(this).parent().parent().removeClass("hov");
        }
    });

    $(".project_main_menu_desktop_item").click(function() {
        $(".project_main_menu_desktop_item").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".project_main_hero_item").removeClass("active");
        $("#" + attr).addClass("active");
    });

    $(".project_main_hero_item_configurator_list_item_title").click(function() {
        $(this).parent().toggleClass("accord");
    });

    $(".project_main_hero_item_color_facade_list_item").click(function() {
        $(".project_main_hero_item_color_facade_list_item").removeClass("active");
        $(this).addClass("active");
    });

    $(".project_main_hero_item_color_platbands_list_item").click(function() {
        $(".project_main_hero_item_color_platbands_list_item").removeClass("active");
        $(this).addClass("active");
    });

    $(".project_back").click(function() {
        $(this).removeClass("active");
        $(".project_main_menu_mobile_btn_sticks").removeClass("active");
        $(".project_dropdown").removeClass("active");
    });

    $(".project_dropdown_list_item").click(function() {
        var attrMobile = $(this).attr("data-target");
        $(".project_main_hero_item").removeClass("active");
        $("#" + attrMobile).addClass("active");
        var textInsert = $(this).children().text();
        $(".project_main_menu_mobile_current p").text(textInsert);
        $(".project_back").removeClass("active");
        $(".project_main_menu_mobile_btn_sticks").removeClass("active");
        $(".project_dropdown").removeClass("active");
    });

    $(".project_main_hero_item_contractor_title_manuf").click(function() {
        $(".project_main_hero_item_contractor_body_manufactor").addClass("active");
        $(".project_main_hero_item_contractor_title_contr").removeClass("active");
        $(".project_main_hero_item_contractor_body_contractor").removeClass("active");
        $(this).addClass("active");
    });

    $(".project_main_hero_item_contractor_title_contr").click(function() {
        $(".project_main_hero_item_contractor_title_manuf").removeClass("active");
        $(".project_main_hero_item_contractor_body_manufactor").removeClass("active");
        $(".project_main_hero_item_contractor_body_contractor").addClass("active");
        $(this).addClass("active");
    });

    if($(window).width() < 1199) {
        $(".project_main_hero_item_configurator_list_item_body_item_title_img").click(function() {
            $(this).toggleClass("open");
        });
    }

    $(document).on('click',function (e) {
        var el = '.project_main_hero_item_configurator_list_item_body_item_title_img';
        if (jQuery(e.target).closest(el).length) return;
        $(".project_main_hero_item_configurator_list_item_body_item_title_img").removeClass("open");
    });

});

