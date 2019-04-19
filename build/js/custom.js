'use strict';

$('document').ready(function () {

    function color(codeColor, preveiwColor) {
        codeColor.on('sliderup slidermove', function () {
            preveiwColor.css('background', $(this).wheelColorPicker('getValue', 'css'));
        });
    }

    color($('[data-role="color-bg"]'), $('[data-role="preveiw-color-bg"]'));
    color($('[data-role="fill-color"]'), $('[data-role="preveiw-fill-color"]'));
    color($('[data-role="border-color"]'), $('[data-role="preveiw-border-color"]'));
    color($('[data-role="text-color"]'), $('[data-role="preveiw-text-color"]'));
    color($('[data-role="text-color"]'), $('[data-role="preveiw-text-color"]'));
    color($('[data-role="empty-text-color"]'), $('[data-role="preveiw-empty-text-color"]'));
    color($('[data-role="button-fill-color"]'), $('[data-role="preveiw-button-fill-color"]'));
    color($('[data-role="button-border-color"]'), $('[data-role="preveiw-button-border-color"]'));
    color($('[data-role="button-text-color"]'), $('[data-role="preveiw-button-text-color"]'));

    $('.header__menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header__menu-btn_active');
        $('.header__nav').toggleClass('header__nav_active');
    });
});