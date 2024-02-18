﻿$(document).ready(init);
var pageLoaded;
var pageJsLoaded;

function init() {
    $("div#clock").clock();
    
    $('li.nav_section').hoverIntent(
        function () {
            $(this).children('ul').stop(false, true).slideDown(800, "easeOutQuad");
        }
        , function () {}
    );

    $('ul#side_nav').mouseleave(
        function () {
            $('li.nav_section ul').filter(":not(.active)").stop(false, true).slideUp(1000, "easeOutQuad");
        }
    );

    $('#header_bug_slides').cycle(
        {
            fx: 'fade',
            sync: false,
            timeout: 9000,
            containerResize: false,
            random: true,
            pause: true,
            //following 2 lines fix a bug in firefox on mac
            width: $('#header_bug_slides').width(),
            fit: true
        }
    );

    firstPage = true;
    $.historyInit(gotoPage);
    $('a').click(onLinkClick);
}

function gotoPage(url) {
    if (url == '') url = "/";
        $("#footer").fadeOut('normal')
    
    //reset
    page_init = null;
    pageLoaded = pageJsLoaded = false;
    
    //fade out and fetch page
    $("#col_2").fadeOut(
        'normal'
        , function () { $(this).load(url + " #col_2 > *", contentCallback);}
    )
    
    var split = url.split('/');
    var section;
    
    //check for homepage
    if (split.length <= 2) {
        //retract all open sections and make them inactive
        $("ul#side_nav ul.active").slideUp(1000);
        $("ul#side_nav .active").removeClass('active');

        //check logo
        $("#ds_logo img").fadeTo(1000, 1);

        //load custom javascript for section
        jQuery.getScript("/home.js", jsCallback);
    } else if (split.length > 2) {

        //check logo
        $("#ds_logo img").fadeTo(1000, 0.4);
        section = split[1];
        var sob = $("ul#side_nav ul#ctl00_" + section);

        //check if this section is already active
        if (!sob.hasClass('active')) {
            //retract all other sections and make them inactive
            $("ul#side_nav ul.active").slideUp(1000, function () {
                $(this).removeClass('active');
            });

            //extend this section and make it active
            sob.addClass('active').slideDown(800);
        }

        $("ul#side_nav li.active").removeClass('active');

        if (split.length == 3) {
            page = section;
            $("ul#side_nav li#ctl00_" + page + "_all").addClass('active');

            //load custom javascript for section
            jQuery.getScript(url + "section.js", jsCallback);
        } else if (split.length > 3) {
            page = cleanPage(split[2]);
            $("ul#side_nav li#ctl00_" + page).addClass('active');

            //load custom javascript for page
            if (url.indexOf("/about/") == -1) {
                jQuery.getScript('/' + section + '/page.js', jsCallback);
            } else {
                jQuery.getScript(url + "page.js", jsCallback);
            }
        }
    }
}

function onLinkClick() {
    //var url = $(this).attr('href').replace(/^.*#/, '');
    var url = $(this).attr('href');
    //check for external links
    if (url.indexOf("/") == 0) {
        $.historyLoad(url);
        return false;
    }
}

function contentCallback(responseText, textStatus, XMLHttpRequest) {
    $("#col_2, #footer").fadeIn('normal');
    pageLoaded = true;
    if (pageJsLoaded && page_init) page_init();
    //special code for project pages
    var exp = '\/\/START_FLAG[^\/]*\/\/END_FLAG';
    var tags = responseText.match(new RegExp(exp, 'mg'));
    if (tags) {
        for (var i = 0; i < tags.length; i++) {
            var clean = tags[i];
            //clean = clean.substring(12);
            //clean = clean.substring(0, clean.length - 10);
            eval(clean);
        }
    }
    $('a').click(onLinkClick);
}

function jsCallback(responseText, textStatus, XMLHttpRequest) {
    pageJsLoaded = true;
    if (pageLoaded && page_init) page_init();
}

function cleanPage(page) {
    var i;
    while ((i = page.indexOf('-')) != -1) {
        page = page.substring(0, i) + page.substring(i + 1);
    }
    return page;
}