// $(".menu-left").find('.dropdown').find('a').removeAttr('data-toggle');
// $('nav .toggle-submenu').click(function(e) {
//     if ($(this).hasClass('open')) {
//         $(this).next('.sub-menu').find('.sub-menu').slideUp();
//         $(this).next('.sub-menu').slideUp();
//         $(this).removeClass('open');
//         $(this).next('.sub-menu').find('.open').removeClass('open');
//     } else {
//         $(this).parent().siblings().find('.sub-menu').slideUp();
//         $(this).parent().siblings().find('.open').removeClass('open');
//         $(this).next('.sub-menu').slideDown();
//         $(this).addClass('open');
//     }
// });

// if ($(".left .menu").find('.current-menu-item').length === 0) {
//     $('.left .menu').find('.menu-item-has-children').first().find(".dropdown-menu").show();
//     console.log('empty');
// } else {
//     console.log("ok");
// }

// $(".left").find('.support').addClass("hidden-lg hidden-md");
// $(".content").find('.post-hot').addClass("hidden-lg hidden-md");
// $('.page-detail').find('.breadcrumb_last').hide();
// $('.page-detail').find('.breadcrumb_last').prev().hide();

// $(".menu-agency").each(function(index, item) {
//     count = $(item).find('li').length;
//     if (count > 0) {
//         remain = count - Math.floor(count / 2) * 2;
//         // alert(remain);
//         if (remain > 0) {
//             for (i = 0; i < (2 - remain); i++) {
//                 $(item).append("<li>&nbsp;</li>");
//             }
//         }
//     }
// });

// $(".list-agency").each(function(index, item) {
//     count = $(item).find('.nav').find('li').length;
//     if (count > 0) {
//         remain = count - Math.floor(count / 3) * 3;
//         // alert(remain);
//         if (remain > 0) {
//             for (i = 0; i < (3 - remain); i++) {
//                 $(item).find('ul').append("<li>&nbsp;</li>");
//             }
//         }
//     }
// });


// function substr_by_data(data, maxLength) {
//     if (data.length > maxLength) {
//         var trimmedString = data.substr(0, maxLength);
//         trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
//         return trimmedString + " ...";
//     } else {
//         return data;
//     }
// }

// function substr_title_hot_view(box, maxLength) {
//     $(".content").find(box).find(".hot-view").find("ul").find("li").each(function(index, item) {
//         link = $(item).find("a").last();
//         data = link.attr("title");
//         link.html(substr_by_data(data, maxLength));
//     });
// }

// function substr_title_slideshow_hot_view(maxLength) {
//     $(".content").find(".slideshow").find(".hot-view").find("ul").find("li").each(function(index, item) {
//         link = $(item).find("a");
//         data = link.attr("title");
//         alert(data);
//         link.html(substr_by_data(data, maxLength));
//     });
// }

// function substr_title_healing(maxLength) {
//     $(".left").find(".healing").find(".item").each(function(index, item) {
//         $(item).find("ul").find("li").each(function(index, item) {
//             link = $(item).find("a");
//             data = link.attr("title");
//             link.html(substr_by_data(data, maxLength));
//         });
//     });
// }

// function change_size() {
//     var container = $(window).width();
//     // alert(container);

//     if (container >= 1200) {
//         substr_title_hot_view(".slideshow", 50);
//         substr_title_hot_view(".list", 50);
//         substr_title_healing(50);
//     }
//     if (container >= 992 && container < 1200) {
//         substr_title_hot_view(".slideshow", 40);
//         substr_title_hot_view(".list", 45);
//         substr_title_healing(40);
//     }
//     if (container >= 768 && container < 992) {
//         substr_title_hot_view(".slideshow", 65);
//         substr_title_hot_view(".list", 78);
//         substr_title_healing(50);
//     }

//     if (container >= 550 && container < 768) {
//         substr_title_hot_view(".slideshow", 55);
//         substr_title_hot_view(".list", 65);
//         substr_title_healing(50);
//     }

//     if (container < 550) {
//         substr_title_hot_view(".slideshow", 500);
//         substr_title_hot_view(".list", 500);
//         substr_title_healing(500);
//     }
// }

// $(window).load(function() {
//     change_size();
// });

// $(window).resize(function() {
//     change_size();
// });

// $(".left").find(".menu").find(">li").each(function(index, item) {
//     parent = $(item).find("a");
//     child = $(item).find("ul").find("li");
//     if (child.length) {
//         newlink = child.first().find("a").attr("href");
//         parent.attr({
//             "href": newlink
//         });
//     }
// });

// $(".content").find(".category").each(function(index, item) {
//     parent = $(item).find(".panel-heading").find("a").first();
//     child = $(item).find("ul").find("li");
//     if (child.length) {
//         newlink = child.first().find("a").attr("href");
//         parent.attr({
//             "href": newlink
//         });
//     }
// });


// $("#menu-menu-top-mobile").find(">li").each(function(index, item) {
//     exist = $(item).find("ul");
//     if (exist.length == 0) {
//         check = $(item).find("a").html();
//         $(item).append('<ul class="dropdown-menu" style="margin-left:0px !important;"></ul>');
//     }
// });
"use strict";