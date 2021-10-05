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
            var inner = $(this).find(".project_main_hero_item_configurator_list_item_body_item_title_img_popup").html();
            $(".modal_info_content").html(inner);
            $(".back_info").addClass("active");
            $(".modal_info").addClass("active");
        });
    }

    $(document).on('click',function (e) {
        var el = '.project_main_hero_item_configurator_list_item_body_item_title_img';
        if (jQuery(e.target).closest(el).length) return;
        $(".project_main_hero_item_configurator_list_item_body_item_title_img").removeClass("open");
    });

    $(".project_main_hero_item_configurator_list_item_body_item").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var priceItem = $(this).find(".project_main_hero_item_configurator_list_item_body_item_price").children().attr('value');
        var textPriceItem = $(this).find(".project_main_hero_item_configurator_list_item_body_item_price").children().text();
        priceItem = parseInt(priceItem);
        $(this).parent().siblings().find("span").attr('value', priceItem);
        $(this).parent().siblings().find("span").text(textPriceItem);
        totalBase();
    });

    function totalBase() {
        var total = 0;
        $(".project_main_hero_item_configurator_list_item").each(function() {
            var price = $(this).find(".project_main_hero_item_configurator_list_item_title").find("span").attr("value");
            price = parseInt(price);
            total += price;
        });
        var insertTotal;
        var textTotal = '' + total;
        if(textTotal.length == 5) {
            var onePart = textTotal.slice(0, 2);
            var twoPart = textTotal.slice(2, 5);
            insertTotal = onePart + ' ' + twoPart;
        } else if(textTotal.length == 6) {
            var onePart = textTotal.slice(0, 3);
            var twoPart = textTotal.slice(3, 6);
            insertTotal = onePart + ' ' + twoPart;
        } else if(textTotal.length == 7) {
            var onePart = textTotal.slice(0, 1);
            var twoPart = textTotal.slice(1, 4);
            var threePart = textTotal.slice(4, 7);
            insertTotal = onePart + ' ' + twoPart + ' ' + threePart;
        } else if(textTotal.length == 8) {
            var onePart = textTotal.slice(0, 2);
            var twoPart = textTotal.slice(2, 5);
            var threePart = textTotal.slice(5, 8);
            insertTotal = onePart + ' ' + twoPart + ' ' + threePart;
        }
        $(".project_main_hero_item_configurator_total_base .project_main_hero_item_configurator_total_number").text(insertTotal + ' ₽');
    } 

    totalBase();

    $(".back_info").click(function() {
        $(this).removeClass("active");
        $(".modal_info").removeClass("active");
    });

});

