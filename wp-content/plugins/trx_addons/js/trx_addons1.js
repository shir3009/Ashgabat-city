/* ATTENTION! This file was generated automatically! Don't change it!!!
----------------------------------------------------------------------- */
jQuery(document).ready(function() {
    "use strict";
    TRX_ADDONS_STORAGE['vc_init_counter'] = 0;
    trx_addons_init_actions();
});
jQuery(window).on('beforeunload', function() {
    "use strict";
    jQuery(window).on('beforeunload', function(e) {
        if (jQuery.browser && !jQuery.browser.safari) {
            if (typeof e.srcElement == 'undefined' || typeof e.srcElement.activeElement == 'undefined' || typeof e.srcElement.activeElement.href == 'undefined' || (e.srcElement.activeElement.href.indexOf('tel:') == -1 && e.srcElement.activeElement.href.indexOf('mailto:') == -1)) {
                jQuery('#page_preloader').css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 0.8
                }, 300);
                setTimeout(trx_addons_hide_preloader, 5000);
            }
        }
    })
});

function trx_addons_hide_preloader() {
    jQuery('#page_preloader').animate({
        opacity: 0
    }, 800, function() {
        jQuery(this).css({
            display: 'none'
        });
    });
}

function trx_addons_init_actions() {
    "use strict";
    if (TRX_ADDONS_STORAGE['vc_edit_mode'] > 0 && jQuery('.vc_empty-placeholder').length == 0 && TRX_ADDONS_STORAGE['vc_init_counter']++ < 30) {
        setTimeout(trx_addons_init_actions, 200);
        return;
    }
    jQuery('#page_preloader').animate({
        opacity: 0
    }, 800, function() {
        jQuery(this).css({
            display: 'none'
        });
    });
    if (trx_addons_is_retina()) {
        trx_addons_set_cookie('trx_addons_is_retina', 1, 365);
    }
    jQuery(document).on('action.init_hidden_elements', trx_addons_ready_actions);
    trx_addons_ready_actions();
    trx_addons_resize_actions();
    trx_addons_scroll_actions();
    jQuery(window).resize(function() {
        trx_addons_resize_actions();
    });
    jQuery(document).on('vc-full-width-row', function(e, el) {
        trx_addons_resize_actions();
    });
    jQuery(window).scroll(function() {
        trx_addons_scroll_actions();
    });
}

function trx_addons_ready_actions(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    if (container.find('.trx_addons_tabs:not(.inited)').length > 0 && jQuery.ui && jQuery.ui.tabs) {
        container.find('.trx_addons_tabs:not(.inited)').each(function() {
            var init = jQuery(this).data('active');
            if (isNaN(init)) {
                init = 0;
                var active = jQuery(this).find('> ul > li[data-active="true"]').eq(0);
                if (active.length > 0) {
                    init = active.index();
                    if (isNaN(init) || init < 0) init = 0;
                }
            } else {
                init = Math.max(0, init);
            }
            jQuery(this).addClass('inited').tabs({
                active: init,
                show: {
                    effect: 'fadeIn',
                    duration: 300
                },
                hide: {
                    effect: 'fadeOut',
                    duration: 300
                },
                create: function(event, ui) {
                    if (ui.panel.length > 0) jQuery(document).trigger('action.init_hidden_elements', [ui.panel]);
                },
                activate: function(event, ui) {
                    if (ui.newPanel.length > 0) jQuery(document).trigger('action.init_hidden_elements', [ui.newPanel]);
                }
            });
        });
    }
    if (container.find('.trx_addons_accordion:not(.inited)').length > 0 && jQuery.ui && jQuery.ui.accordion) {
        container.find('.trx_addons_accordion:not(.inited)').each(function() {
            var accordion = jQuery(this);
            var headers = accordion.data('headers');
            if (headers === undefined) headers = 'h5';
            var height_style = accordion.data('height-style');
            if (height_style === undefined) height_style = 'content';
            var init = accordion.data('active');
            var active = false;
            if (isNaN(init)) {
                init = 0;
                var active = accordion.find(headers + '[data-active="true"]').eq(0);
                if (active.length > 0) {
                    while (!active.parent().hasClass('trx_addons_accordion')) {
                        active = active.parent();
                    }
                    init = active.index();
                    if (isNaN(init) || init < 0) init = 0;
                }
            } else {
                init = Math.max(0, init);
            }
            accordion.addClass('inited').accordion({
                active: init,
                header: headers,
                heightStyle: height_style,
                create: function(event, ui) {
                    if (ui.panel.length > 0) {
                        jQuery(document).trigger('action.init_hidden_elements', [ui.panel]);
                    } else if (active !== false && active.length > 0) {
                        active.find('>' + headers).trigger('click');
                    }
                },
                activate: function(event, ui) {
                    if (ui.newPanel.length > 0) jQuery(document).trigger('action.init_hidden_elements', [ui.newPanel]);
                }
            });
        });
    }
    jQuery(document).trigger('action.init_sliders', [container]);
    jQuery(document).trigger('action.init_shortcodes', [container]);
    if (container.find('.trx_addons_video_player.with_cover .video_hover:not(.inited)').length > 0) {
        container.find('.trx_addons_video_player.with_cover .video_hover:not(.inited)').addClass('inited').on('click', function(e) {
            jQuery(this).parents('.trx_addons_video_player').addClass('video_play').find('.video_embed').html(jQuery(this).data('video'));
            var slider = jQuery(this).parents('.slider_swiper');
            if (slider.length > 0) {
                var id = slider.attr('id');
                TRX_ADDONS_STORAGE['swipers'][id].stopAutoplay();
            }
            jQuery(window).trigger('resize');
            e.preventDefault();
            return false;
        });
    }
    if (TRX_ADDONS_STORAGE['popup_engine'] == 'pretty') {
        container.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr('rel', 'prettyPhoto[slideshow]');
        var images = container.find("a[rel*='prettyPhoto']:not(.inited):not(.esgbox):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])").addClass('inited');
        try {
            images.prettyPhoto({
                social_tools: '',
                theme: 'facebook',
                deeplinking: false
            });
        } catch (e) {};
    } else if (TRX_ADDONS_STORAGE['popup_engine'] == 'magnific') {
        container.find("a[href$='jpg']:not(.inited):not(.lightbox-link),a[href$='jpeg']:not(.inited):not(.lightbox-link),a[href$='png']:not(.inited):not(.lightbox-link),a[href$='gif']:not(.inited):not(.lightbox-link)").each(function() {
            if (!jQuery(this).parent().hasClass('woocommerce-product-gallery__image')) jQuery(this).attr('rel', 'magnific');
        });
        var images = container.find("a[rel*='magnific']:not(.inited):not(.esgbox):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty']):not([target='_blank'])").addClass('inited');
        setTimeout(function() {
            images.unbind('click.prettyphoto');
        }, 100);
        try {
            images.magnificPopup({
                type: 'image',
                mainClass: 'mfp-img-mobile',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                midClick: true,
                preloader: true,
                tLoading: TRX_ADDONS_STORAGE['msg_magnific_loading'],
                gallery: {
                    enabled: true
                },
                image: {
                    tError: TRX_ADDONS_STORAGE['msg_magnific_error'],
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        if (!openerElement.is('img')) {
                            if (openerElement.parents('.trx_addons_hover').find('img').length > 0) openerElement = openerElement.parents('.trx_addons_hover').find('img');
                            else if (openerElement.find('img').length > 0) openerElement = openerElement.find('img');
                            else if (openerElement.siblings('img').length > 0) openerElement = openerElement.siblings('img');
                            else if (openerElement.parent().parent().find('img').length > 0) openerElement = openerElement.parent().parent().find('img');
                        }
                        return openerElement;
                    }
                },
                callbacks: {
                    beforeClose: function() {
                        jQuery('.mfp-figure figcaption').hide();
                        jQuery('.mfp-figure .mfp-arrow').hide();
                    }
                }
            });
        } catch (e) {};
    }
    if (container.find('.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)').length > 0) {
        container.find('.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)').addClass('inited').on('click', function(e) {
            var button = jQuery(this);
            var inc = button.hasClass('enabled') ? 1 : -1;
            var post_id = button.hasClass('post_counters_likes') ? button.data('postid') : button.data('commentid');
            var cookie_likes = trx_addons_get_cookie(button.hasClass('post_counters_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes');
            if (cookie_likes === undefined || cookie_likes === null) cookie_likes = '';
            jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                action: button.hasClass('post_counters_likes') ? 'post_counter' : 'comment_counter',
                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                post_id: post_id,
                likes: inc
            }).done(function(response) {
                var rez = {};
                try {
                    rez = JSON.parse(response);
                } catch (e) {
                    rez = {
                        error: TRX_ADDONS_STORAGE['msg_ajax_error']
                    };
                    console.log(response);
                }
                if (rez.error === '') {
                    var counter = rez.counter;
                    if (inc == 1) {
                        var title = button.data('title-dislike');
                        button.removeClass('enabled trx_addons_icon-heart-empty').addClass('disabled trx_addons_icon-heart');
                        cookie_likes += (cookie_likes.substr(-1) != ',' ? ',' : '') + post_id + ',';
                    } else {
                        var title = button.data('title-like');
                        button.removeClass('disabled trx_addons_icon-heart').addClass('enabled trx_addons_icon-heart-empty');
                        cookie_likes = cookie_likes.replace(',' + post_id + ',', ',');
                    }
                    button.data('likes', counter).attr('title', title).find(button.hasClass('post_counters_likes') ? '.post_counters_number' : '.comment_counters_number').html(counter);
                    trx_addons_set_cookie(button.hasClass('post_counters_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes', cookie_likes, 365);
                } else {
                    alert(TRX_ADDONS_STORAGE['msg_error_like']);
                }
            });
            e.preventDefault();
            return false;
        });
    }
    if (container.find('.socials_share .socials_caption:not(.inited)').length > 0) {
        container.find('.socials_share .socials_caption:not(.inited)').each(function() {
            "use strict";
            jQuery(this).addClass('inited').on('click', function(e) {
                "use strict";
                jQuery(this).siblings('.social_items').fadeToggle();
                e.preventDefault();
                return false;
            });
        });
    }
    if (container.find('.socials_share .social_items:not(.inited)').length > 0) {
        container.find('.socials_share .social_items:not(.inited)').each(function() {
            "use strict";
            jQuery(this).addClass('inited').on('click', '.social_item_popup > a.social_icons', function(e) {
                "use strict";
                var url = jQuery(this).data('link');
                window.open(url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0');
                e.preventDefault();
                return false;
            });
        });
    }
    container.find('.widget ul > li').each(function() {
        "use strict";
        if (jQuery(this).find('ul').length > 0) {
            jQuery(this).addClass('has_children');
        }
    });
    container.find('.widget_archive a:not(.inited)').addClass('inited').each(function() {
        "use strict";
        var val = jQuery(this).html().split(' ');
        if (val.length > 1) {
            val[val.length - 1] = '<span>' + val[val.length - 1] + '</span>';
            jQuery(this).html(val.join(' '))
        }
    });
    container.find('.trx_addons_scroll_to_top:not(.inited)').addClass('inited').on('click', function(e) {
        "use strict";
        jQuery('html,body').animate({
            scrollTop: 0
        }, 'slow');
        e.preventDefault();
        return false;
    });
}

function trx_addons_scroll_actions() {
    "use strict";
    var scroll_offset = jQuery(window).scrollTop();
    var scroll_to_top_button = jQuery('.trx_addons_scroll_to_top');
    var adminbar_height = Math.max(0, jQuery('#wpadminbar').height());
    if (scroll_to_top_button.length > 0) {
        if (scroll_offset > 100) scroll_to_top_button.addClass('show');
        else scroll_to_top_button.removeClass('show');
    }
    jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
        if (jQuery(this).offset().top < scroll_offset + jQuery(window).height()) jQuery(this).addClass(jQuery(this).data('animation'));
    });
}

function trx_addons_resize_actions(cont) {
    "use strict";
    if (window.trx_addons_resize_sliders) trx_addons_resize_sliders(cont);
    trx_addons_resize_video(cont);
}

function trx_addons_resize_video(cont) {
    if (cont === undefined) cont = jQuery('body');
    cont.find('video').each(function() {
        "use strict";
        var video = jQuery(this).eq(0);
        var ratio = (video.data('ratio') != undefined ? video.data('ratio').split(':') : [16, 9]);
        ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
        var mejs_cont = video.parents('.mejs-video');
        var w_attr = video.data('width');
        var h_attr = video.data('height');
        if (!w_attr || !h_attr) {
            w_attr = video.attr('width');
            h_attr = video.attr('height');
            if (!w_attr || !h_attr) return;
            video.data({
                'width': w_attr,
                'height': h_attr
            });
        }
        var percent = ('' + w_attr).substr(-1) == '%';
        w_attr = parseInt(w_attr);
        h_attr = parseInt(h_attr);
        var w_real = Math.round(mejs_cont.length > 0 ? Math.min(percent ? 10000 : w_attr, mejs_cont.parents('div,article').width()) : video.width()),
            h_real = Math.round(percent ? w_real / ratio : w_real / w_attr * h_attr);
        if (parseInt(video.attr('data-last-width')) == w_real) return;
        if (mejs_cont.length > 0 && mejs) {
            trx_addons_set_mejs_player_dimensions(video, w_real, h_real);
        }
        if (percent) {
            video.height(h_real);
        } else {
            video.attr({
                'width': w_real,
                'height': h_real
            }).css({
                'width': w_real + 'px',
                'height': h_real + 'px'
            });
        }
        video.attr('data-last-width', w_real);
    });
    cont.find('.video_frame iframe').each(function() {
        "use strict";
        var iframe = jQuery(this).eq(0);
        if (iframe.attr('src').indexOf('soundcloud') > 0) return;
        var ratio = (iframe.data('ratio') != undefined ? iframe.data('ratio').split(':') : (iframe.parent().data('ratio') != undefined ? iframe.parent().data('ratio').split(':') : (iframe.find('[data-ratio]').length > 0 ? iframe.find('[data-ratio]').data('ratio').split(':') : [16, 9])));
        ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
        var w_attr = iframe.attr('width');
        var h_attr = iframe.attr('height');
        if (!w_attr || !h_attr) {
            return;
        }
        var percent = ('' + w_attr).substr(-1) == '%';
        w_attr = parseInt(w_attr);
        h_attr = parseInt(h_attr);
        var pw = iframe.parent().width(),
            ph = iframe.parent().height(),
            w_real = pw,
            h_real = Math.round(percent ? w_real / ratio : w_real / w_attr * h_attr);
        if (iframe.parent().css('position') == 'absolute' && h_real > ph) {
            h_real = ph;
            w_real = Math.round(percent ? h_real * ratio : h_real * w_attr / h_attr)
        }
        if (parseInt(iframe.attr('data-last-width')) == w_real) return;
        iframe.css({
            'width': w_real + 'px',
            'height': h_real + 'px'
        });
        iframe.attr('data-last-width', w_real);
    });
}

function trx_addons_set_mejs_player_dimensions(video, w, h) {
    "use strict";
    if (mejs) {
        for (var pl in mejs.players) {
            if (mejs.players[pl].media.src == video.attr('src')) {
                if (mejs.players[pl].media.setVideoSize) {
                    mejs.players[pl].media.setVideoSize(w, h);
                }
                mejs.players[pl].setPlayerSize(w, h);
                mejs.players[pl].setControlsSize();
            }
        }
    }
}

function trx_addons_get_cookie(name) {
    "use strict";
    var defa = arguments[1] != undefined ? arguments[1] : null;
    var start = document.cookie.indexOf(name + '=');
    var len = start + name.length + 1;
    if ((!start) && (name != document.cookie.substring(0, name.length))) {
        return defa;
    }
    if (start == -1) return defa;
    var end = document.cookie.indexOf(';', len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len, end));
}

function trx_addons_set_cookie(name, value, expires, path, domain, secure) {
    "use strict";
    var expires = arguments[2] != undefined ? arguments[2] : 0;
    var path = arguments[3] != undefined ? arguments[3] : '/';
    var domain = arguments[4] != undefined ? arguments[4] : '';
    var secure = arguments[5] != undefined ? arguments[5] : '';
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + '=' + escape(value) + ((expires) ? ';expires=' + expires_date.toGMTString() : '') + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ((secure) ? ';secure' : '');
}

function trx_addons_del_cookie(name, path, domain) {
    "use strict";
    var path = arguments[1] != undefined ? arguments[1] : '/';
    var domain = arguments[2] != undefined ? arguments[2] : '';
    if (trx_addons_get_cookie(name)) document.cookie = name + '=' + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

function trx_addons_clear_listbox(box) {
    "use strict";
    for (var i = box.options.length - 1; i >= 0; i--) box.options[i] = null;
}

function trx_addons_add_listbox_item(box, val, text) {
    "use strict";
    var item = new Option();
    item.value = val;
    item.text = text;
    box.options.add(item);
}

function trx_addons_del_listbox_item_by_value(box, val) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].value == val) {
            box.options[i] = null;
            break;
        }
    }
}

function trx_addons_del_listbox_item_by_text(box, txt) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].text == txt) {
            box.options[i] = null;
            break;
        }
    }
}

function trx_addons_find_listbox_item_by_value(box, val) {
    "use strict";
    var idx = -1;
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].value == val) {
            idx = i;
            break;
        }
    }
    return idx;
}

function trx_addons_find_listbox_item_by_text(box, txt) {
    "use strict";
    var idx = -1;
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].text == txt) {
            idx = i;
            break;
        }
    }
    return idx;
}

function trx_addons_select_listbox_item_by_value(box, val) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        box.options[i].selected = (val == box.options[i].value);
    }
}

function trx_addons_select_listbox_item_by_text(box, txt) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        box.options[i].selected = (txt == box.options[i].text);
    }
}

function trx_addons_get_listbox_values(box) {
    "use strict";
    var delim = arguments[1] ? arguments[1] : ',';
    var str = '';
    for (var i = 0; i < box.options.length; i++) {
        str += (str ? delim : '') + box.options[i].value;
    }
    return str;
}

function trx_addons_get_listbox_texts(box) {
    "use strict";
    var delim = arguments[1] ? arguments[1] : ',';
    var str = '';
    for (var i = 0; i < box.options.length; i++) {
        str += (str ? delim : '') + box.options[i].text;
    }
    return str;
}

function trx_addons_sort_listbox(box) {
    "use strict";
    var temp_opts = new Array();
    var temp = new Option();
    for (var i = 0; i < box.options.length; i++) {
        temp_opts[i] = box.options[i].clone();
    }
    for (var x = 0; x < temp_opts.length - 1; x++) {
        for (var y = (x + 1); y < temp_opts.length; y++) {
            if (temp_opts[x].text > temp_opts[y].text) {
                temp = temp_opts[x];
                temp_opts[x] = temp_opts[y];
                temp_opts[y] = temp;
            }
        }
    }
    for (var i = 0; i < box.options.length; i++) {
        box.options[i] = temp_opts[i].clone();
    }
}

function trx_addons_get_listbox_selected_index(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) return i;
    }
    return -1;
}

function trx_addons_get_listbox_selected_value(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) {
            return box.options[i].value;
        }
    }
    return null;
}

function trx_addons_get_listbox_selected_text(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) {
            return box.options[i].text;
        }
    }
    return null;
}

function trx_addons_get_listbox_selected_option(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) {
            return box.options[i];
        }
    }
    return null;
}

function trx_addons_get_radio_value(radioGroupObj) {
    "use strict";
    for (var i = 0; i < radioGroupObj.length; i++)
        if (radioGroupObj[i].checked) return radioGroupObj[i].value;
    return null;
}

function trx_addons_set_radio_checked_by_num(radioGroupObj, num) {
    "use strict";
    for (var i = 0; i < radioGroupObj.length; i++)
        if (radioGroupObj[i].checked && i != num) radioGroupObj[i].checked = false;
        else if (i == num) radioGroupObj[i].checked = true;
}

function trx_addons_set_radio_checked_by_value(radioGroupObj, val) {
    "use strict";
    for (var i = 0; i < radioGroupObj.length; i++)
        if (radioGroupObj[i].checked && radioGroupObj[i].value != val) radioGroupObj[i].checked = false;
        else if (radioGroupObj[i].value == val) radioGroupObj[i].checked = true;
}

function trx_addons_form_validate(form, opt) {
    "use strict";
    if (typeof(opt.error_message_show) == 'undefined') opt.error_message_show = true;
    if (typeof(opt.error_message_time) == 'undefined') opt.error_message_time = 5000;
    if (typeof(opt.error_message_class) == 'undefined') opt.error_message_class = 'trx_addons_message_box_error';
    if (typeof(opt.error_message_text) == 'undefined') opt.error_message_text = 'Incorrect data in the fields!';
    if (typeof(opt.error_fields_class) == 'undefined') opt.error_fields_class = 'trx_addons_field_error';
    if (typeof(opt.exit_after_first_error) == 'undefined') opt.exit_after_first_error = false;
    var error_msg = '';
    form.find(":input").each(function() {
        "use strict";
        if (error_msg != '' && opt.exit_after_first_error) return;
        for (var i = 0; i < opt.rules.length; i++) {
            if (jQuery(this).attr("name") == opt.rules[i].field) {
                var val = jQuery(this).val();
                var error = false;
                if (typeof(opt.rules[i].min_length) == 'object') {
                    if (opt.rules[i].min_length.value > 0 && val.length < opt.rules[i].min_length.value) {
                        if (error_msg == '') jQuery(this).get(0).focus();
                        error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].min_length.message) != 'undefined' ? opt.rules[i].min_length.message : opt.error_message_text) + '</p>';
                        error = true;
                    }
                }
                if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].max_length) == 'object') {
                    if (opt.rules[i].max_length.value > 0 && val.length > opt.rules[i].max_length.value) {
                        if (error_msg == '') jQuery(this).get(0).focus();
                        error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].max_length.message) != 'undefined' ? opt.rules[i].max_length.message : opt.error_message_text) + '</p>';
                        error = true;
                    }
                }
                if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].mask) == 'object') {
                    if (opt.rules[i].mask.value != '') {
                        var regexp = new RegExp(opt.rules[i].mask.value);
                        if (!regexp.test(val)) {
                            if (error_msg == '') jQuery(this).get(0).focus();
                            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].mask.message) != 'undefined' ? opt.rules[i].mask.message : opt.error_message_text) + '</p>';
                            error = true;
                        }
                    }
                }
                if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].equal_to) == 'object') {
                    if (opt.rules[i].equal_to.value != '' && val != jQuery(jQuery(this).get(0).form[opt.rules[i].equal_to.value]).val()) {
                        if (error_msg == '') jQuery(this).get(0).focus();
                        error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].equal_to.message) != 'undefined' ? opt.rules[i].equal_to.message : opt.error_message_text) + '</p>';
                        error = true;
                    }
                }
                if (opt.error_fields_class != '') jQuery(this).toggleClass(opt.error_fields_class, error);
            }
        }
    });
    if (error_msg != '' && opt.error_message_show) {
        var error_message_box = form.find(".trx_addons_message_box");
        if (error_message_box.length == 0) error_message_box = form.parent().find(".trx_addons_message_box");
        if (error_message_box.length == 0) {
            form.append('<div class="trx_addons_message_box"></div>');
            error_message_box = form.find(".trx_addons_message_box");
        }
        if (opt.error_message_class) error_message_box.toggleClass(opt.error_message_class, true);
        error_message_box.html(error_msg).fadeIn();
        setTimeout(function() {
            error_message_box.fadeOut();
        }, opt.error_message_time);
    }
    return error_msg != '';
}

function trx_addons_document_animate_to(id, callback) {
    "use strict";
    var oft = !isNaN(id) ? Number(id) : 0;
    if (isNaN(id)) {
        if (id.indexOf('#') == -1) id = '#' + id;
        var obj = jQuery(id).eq(0);
        if (obj.length == 0) return;
        oft = obj.offset().top;
    }
    var st = jQuery(window).scrollTop();
    var speed = Math.min(1200, Math.max(300, Math.round(Math.abs(oft - st) / jQuery(window).height() * 300)));
    if (jQuery('body').find('#wpadminbar').length > 0) {
        jQuery('body,html').stop(true).animate({
            scrollTop: oft - jQuery('#wpadminbar').height() + 1
        }, speed, 'linear', callback);
    } else {
        jQuery('body,html').stop(true).animate({
            scrollTop: oft + 1
        }, speed, 'linear', callback);
    }
}

function trx_addons_document_set_location(curLoc) {
    "use strict";
    if (history.pushState === undefined || navigator.userAgent.match(/MSIE\s[6-9]/i) != null) return;
    try {
        history.pushState(null, null, curLoc);
        return;
    } catch (e) {}
    location.href = curLoc;
}

function trx_addons_add_to_url(prm) {
    "use strict";
    var ignore_empty = arguments[1] !== undefined ? arguments[1] : true;
    var loc = location.href;
    var q = loc.indexOf('?');
    var attr = {};
    if (q > 0) {
        var qq = loc.substr(q + 1).split('&');
        var parts = '';
        for (var i = 0; i < qq.length; i++) {
            var parts = qq[i].split('=');
            attr[parts[0]] = parts.length > 1 ? parts[1] : '';
        }
    }
    for (var p in prm) {
        attr[p] = prm[p];
    }
    loc = (q > 0 ? loc.substr(0, q) : loc) + '?';
    var i = 0;
    for (p in attr) {
        if (ignore_empty && attr[p] == '') continue;
        loc += (i++ > 0 ? '&' : '') + p + '=' + attr[p];
    }
    return loc;
}

function trx_addons_browser_is_mobile() {
    "use strict";
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function trx_addons_browser_is_ios() {
    "use strict";
    return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null || navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
}

function trx_addons_is_retina() {
    "use strict";
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
    return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
}

function trx_addons_get_file_name(path) {
    "use strict";
    path = path.replace(/\\/g, '/');
    var pos = path.lastIndexOf('/');
    if (pos >= 0) path = path.substr(pos + 1);
    return path;
}

function trx_addons_get_file_ext(path) {
    "use strict";
    var pos = path.lastIndexOf('.');
    path = pos >= 0 ? path.substr(pos + 1) : '';
    return path;
}

function trx_addons_check_images_complete(cont) {
    "use strict";
    var complete = true;
    cont.find('img').each(function() {
        if (!complete) return;
        if (!jQuery(this).get(0).complete) complete = false;
    });
    return complete;
}

function trx_addons_replicate(str, num) {
    "use strict";
    var rez = '';
    for (var i = 0; i < num; i++) {
        rez += str;
    }
    return rez;
}

function trx_addons_serialize(mixed_val) {
    "use strict";
    var obj_to_array = arguments.length == 1 || argument[1] === true;
    switch (typeof(mixed_val)) {
        case "number":
            if (isNaN(mixed_val) || !isFinite(mixed_val)) return false;
            else return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
        case "string":
            return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";
        case "boolean":
            return "b:" + (mixed_val ? "1" : "0") + ";";
        case "object":
            if (mixed_val == null) return "N;";
            else if (mixed_val instanceof Array) {
                var idxobj = {
                    idx: -1
                };
                var map = [];
                for (var i = 0; i < mixed_val.length; i++) {
                    idxobj.idx++;
                    var ser = trx_addons_serialize(mixed_val[i]);
                    if (ser) map.push(trx_addons_serialize(idxobj.idx) + ser);
                }
                return "a:" + mixed_val.length + ":{" + map.join("") + "}";
            } else {
                var class_name = trx_addons_get_class(mixed_val);
                if (class_name == undefined) return false;
                var props = new Array();
                for (var prop in mixed_val) {
                    var ser = trx_addons_serialize(mixed_val[prop]);
                    if (ser) props.push(trx_addons_serialize(prop) + ser);
                }
                if (obj_to_array) return "a:" + props.length + ":{" + props.join("") + "}";
                else return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
            }
        case "undefined":
            return "N;";
    }
    return false;
}

function trx_addons_get_class(obj) {
    "use strict";
    if (obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) && obj.constructor) {
        var arr = obj.constructor.toString().match(/function\s*(\w+)/);
        if (arr && arr.length == 2) return arr[1];
    }
    return false;
}
jQuery(document).on('action.init_sliders', trx_addons_init_sliders);
jQuery(document).on('action.init_hidden_elements', trx_addons_init_hidden_sliders);

function trx_addons_init_sliders(e, container) {
    "use strict";
    if (container.find('.sc_slider_controller:not(.inited)').length > 0) {
        container.find('.sc_slider_controller:not(.inited)').each(function() {
            "use strict";
            var controller = jQuery(this).addClass('inited');
            var slider_id = controller.data('slider-id');
            if (!slider_id) return;
            var controller_id = controller.attr('id');
            if (controller_id == undefined) {
                controller_id = 'sc_slider_controller_' + Math.random();
                controller_id = controller_id.replace('.', '');
                controller.attr('id', controller_id);
            }
            jQuery('#' + slider_id + ' .slider_swiper').attr('data-controller', controller_id);
            var controller_style = controller.data('style');
            var controller_effect = controller.data('effect');
            var controller_interval = controller.data('interval');
            var controller_height = controller.data('height');
            var controller_per_view = controller.data('slides-per-view');
            var controller_space = controller.data('slides-space');
            var controller_controls = controller.data('controls');
            var controller_html = '';
            jQuery('#' + slider_id + ' .swiper-slide').each(function(idx) {
                "use strict";
                var slide = jQuery(this);
                var image = slide.data('image');
                var title = slide.data('title');
                var cats = slide.data('cats');
                var date = slide.data('date');
                controller_html += '<div class="swiper-slide"' + ' style="' + (image !== undefined ? 'background-image: url(' + image + ');' : '') + '"' + '>' + '<div class="sc_slider_controller_info">' + '<span class="sc_slider_controller_info_number">' + (idx < 9 ? '0' : '') + (idx + 1) + '</span>' + '<span class="sc_slider_controller_info_title">' + title + '</span>' + '</div>' + '</div>';
            });
            controller.html('<div id="' + controller_id + '_outer"' + ' class="slider_swiper_outer slider_style_controller' + ' slider_outer_' + (controller_controls == 1 ? 'controls slider_outer_controls_side' : 'nocontrols') + ' slider_outer_nopagination' + ' slider_outer_' + (controller_per_view == 1 ? 'one' : 'multi') + '"' + '>' + '<div id="' + controller_id + '_swiper"' + ' class="slider_swiper swiper-slider-container' + ' slider_' + (controller_controls == 1 ? 'controls slider_controls_side' : 'nocontrols') + ' slider_nopagination' + ' slider_notitles' + ' slider_noresize' + ' slider_' + (controller_per_view == 1 ? 'one' : 'multi') + '"' + ' data-slides-min-width="100"' + ' data-controlled-slider="' + slider_id + '"' + (controller_effect !== undefined ? ' data-effect="' + controller_effect + '"' : '') + (controller_interval !== undefined ? ' data-interval="' + controller_interval + '"' : '') + (controller_per_view !== undefined ? ' data-slides-per-view="' + controller_per_view + '"' : '') + (controller_space !== undefined ? ' data-slides-space="' + controller_space + '"' : '') + (controller_height !== undefined ? ' style="height:' + controller_height + '"' : '') + '>' + '<div class="swiper-wrapper">' + controller_html + '</div>' + '</div>' + (controller_controls == 1 ? '<div class="slider_controls_wrap"><a class="slider_prev swiper-button-prev" href="#"></a><a class="slider_next swiper-button-next" href="#"></a></div>' : '') + '</div>');
        });
    }
    if (container.find('.slider_swiper:not(.inited)').length > 0) {
        container.find('.slider_swiper:not(.inited)').each(function() {
            "use strict";
            if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
            var slider = jQuery(this);
            var id = slider.attr('id');
            if (id == undefined) {
                id = 'swiper_' + Math.random();
                id = id.replace('.', '');
                slider.attr('id', id);
            }
            var cont = slider.parent().hasClass('slider_swiper_outer') ? slider.parent().attr('id', id + '_outer') : slider;
            var cont_id = cont.attr('id');
            var is_controller = slider.parents('.sc_slider_controller').length > 0;
            var controller_id = slider.data('controller');
            slider.find('.swiper-slide').each(function(idx) {
                jQuery(this).attr('data-slide-number', idx);
            });
            slider.css({
                'display': 'block',
                'opacity': 0
            }).addClass(id).addClass('inited').data('settings', {
                mode: 'horizontal'
            });
            var smw = slider.data('slides-min-width');
            if (smw == undefined) {
                smw = 250;
                slider.attr('data-slides-min-width', smw);
            }
            var width = slider.width();
            if (width == 0) width = slider.parent().width();
            var spv = slider.data('slides-per-view');
            if (spv == undefined) {
                spv = 1;
                slider.attr('data-slides-per-view', spv);
            }
            if (width / spv < smw) spv = Math.max(1, Math.floor(width / smw));
            var space = slider.data('slides-space');
            if (space == undefined) space = 0;
            var interval = slider.data('interval');
            if (isNaN(interval)) interval = 0;
            if (TRX_ADDONS_STORAGE['swipers'] === undefined) TRX_ADDONS_STORAGE['swipers'] = {};
            TRX_ADDONS_STORAGE['swipers'][id] = new Swiper('.' + id, {
                calculateHeight: !slider.hasClass('slider_height_fixed'),
                resizeReInit: true,
                autoResize: true,
                effect: slider.data('effect') ? slider.data('effect') : 'slide',
                pagination: slider.hasClass('slider_pagination') ? '#' + cont_id + ' .slider_pagination_wrap' : false,
                paginationClickable: slider.hasClass('slider_pagination') ? '#' + cont_id + ' .slider_pagination_wrap' : false,
                paginationType: slider.hasClass('slider_pagination') && slider.data('pagination') ? slider.data('pagination') : 'bullets',
                nextButton: slider.hasClass('slider_controls') ? '#' + cont_id + ' .slider_next' : false,
                prevButton: slider.hasClass('slider_controls') ? '#' + cont_id + ' .slider_prev' : false,
                autoplay: slider.hasClass('slider_noautoplay') || interval == 0 ? false : parseInt(interval),
                autoplayDisableOnInteraction: true,
                initialSlide: 0,
                slidesPerView: spv,
                loopedSlides: spv,
                spaceBetween: space,
                speed: 600,
                centeredSlides: false,
                loop: true,
                grabCursor: !is_controller,
                slideToClickedSlide: is_controller,
                touchRatio: is_controller ? 0.2 : 1,
                onSlideChangeStart: function(swiper) {
                    cont.find('.slider_titles_outside_wrap .active').removeClass('active').fadeOut();
                    var controlled_slider = jQuery('#' + slider.data(is_controller ? 'controlled-slider' : 'controller') + ' .slider_swiper');
                    var controlled_id = controlled_slider.attr('id');
                    if (TRX_ADDONS_STORAGE['swipers'][controlled_id] && jQuery('#' + controlled_id).attr('data-busy') != 1) {
                        slider.attr('data-busy', 1);
                        setTimeout(function() {
                            slider.attr('data-busy', 0);
                        }, 300);
                        var slide_number = jQuery(swiper.slides[swiper.activeIndex]).data('slide-number');
                        var slide_idx = controlled_slider.find('[data-slide-number="' + slide_number + '"]').index();
                        TRX_ADDONS_STORAGE['swipers'][controlled_id].slideTo(slide_idx);
                    }
                },
                onSlideChangeEnd: function(swiper) {
                    var titles = cont.find('.slider_titles_outside_wrap .slide_info');
                    if (titles.length == 0) return;
                    titles.eq(jQuery(swiper.slides[swiper.activeIndex]).data('slide-number')).addClass('active').fadeIn(300);
                    cont.find('.trx_addons_video_player.with_cover.video_play').removeClass('video_play').find('.video_embed').empty();
                    slider.attr('data-busy', 0);
                }
            });
            slider.attr('data-busy', 1).animate({
                'opacity': 1
            }, 'fast');
            setTimeout(function() {
                slider.attr('data-busy', 0);
            }, 300);
        });
    }
}

function trx_addons_init_hidden_sliders(e, container) {
    "use strict";
    trx_addons_init_sliders(e, container);
    trx_addons_resize_sliders(container);
}

function trx_addons_resize_sliders(container) {
    "use strict";
    if (container === undefined) container = jQuery('body');
    container.find('.slider_swiper.inited').each(function() {
        "use strict";
        if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
        var id = jQuery(this).attr('id');
        var slider_width = jQuery(this).width();
        var slide = jQuery(this).find('.swiper-slide').eq(0);
        var slide_width = slide.width();
        var slide_height = slide.height();
        var last_width = jQuery(this).data('last-width');
        if (isNaN(last_width)) last_width = 0;
        var ratio = jQuery(this).data('ratio');
        if (ratio === undefined || ('' + ratio).indexOf(':') < 1) {
            ratio = slide_height > 0 ? slide_width + ':' + slide_height : "16:9";
            jQuery(this).attr('data-ratio', ratio);
        }
        ratio = ratio.split(':');
        var ratio_x = !isNaN(ratio[0]) ? Number(ratio[0]) : 16;
        var ratio_y = !isNaN(ratio[1]) ? Number(ratio[1]) : 9;
        if (!jQuery(this).hasClass('slider_noresize')) {
            jQuery(this).height(Math.floor(slide_width / ratio_x * ratio_y));
        }
        if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != 'auto') {
            if (last_width == 0 || last_width != slider_width) {
                var smw = jQuery(this).data('slides-min-width');
                var spv = jQuery(this).data('slides-per-view');
                if (slider_width / spv < smw) spv = Math.max(1, Math.floor(slider_width / smw));
                jQuery(this).data('last-width', slider_width);
                if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != spv) {
                    TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView = spv;
                    TRX_ADDONS_STORAGE['swipers'][id].params.loopedSlides = spv;
                }
                TRX_ADDONS_STORAGE['swipers'][id].onResize();
            }
        }
    });
}

function trx_addons_sc_fullheight_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    if (container === undefined || container.length === undefined || container.length == 0) return;
    container.find('.trx_addons_stretch_height').each(function() {
        "use strict";
        var fullheight_item = jQuery(this);
        if (jQuery(this).parents('div:hidden,article:hidden').length > 0) {
            return;
        }
        var wh = 0;
        var fullheight_row = jQuery(this).parents('.vc_row-o-full-height');
        if (fullheight_row.length > 0) {
            wh = fullheight_row.css('height') != 'auto' ? fullheight_row.height() : 'auto';
        } else {
            if (screen.height > 1000) {
                var adminbar = jQuery('#wpadminbar');
                wh = jQuery(window).height() - (adminbar.length > 0 ? adminbar.height() : 0);
            } else wh = 'auto';
        }
        if (wh == 'auto' || wh > 0) fullheight_item.height(wh);
    });
}
jQuery(document).ready(function() {
    "use strict";
    jQuery('.sc_recent_news_header_category_item_more').on('click', function() {
        "use strict";
        jQuery(this).toggleClass('opened').find('.sc_recent_news_header_more_categories').slideToggle();
    });
});
jQuery(document).on('action.init_shortcodes', function(e, container) {
    "use strict";
    var toc_menu = jQuery('#toc_menu');
    if (toc_menu.length == 0) trx_addons_build_page_toc();
    toc_menu = jQuery('#toc_menu:not(.inited)');
    if (toc_menu.length == 0) return;
    var toc_menu_items = toc_menu.addClass('inited').find('.toc_menu_item');
    trx_addons_detect_active_toc();
    var wheel_busy = false,
        wheel_time = 0;
    jQuery('.toc_menu_item > a').on('click', function(e) {
        "use strict";
        if (trx_addons_scroll_to_anchor(jQuery(this), true)) {
            e.preventDefault();
            return false;
        }
    });
    jQuery(window).on('scroll', function() {
        "use strict";
        trx_addons_mark_active_toc();
    });
    trx_addons_mark_active_toc();
    if (TRX_ADDONS_STORAGE['scroll_to_anchor'] == 1) {
        var wheel_stop = false;
        jQuery(document).on('action.stop_wheel_handlers', function(e) {
            "use strict";
            wheel_stop = true;
        });
        jQuery(document).on('action.start_wheel_handlers', function(e) {
            "use strict";
            wheel_stop = false;
        });
        jQuery(window).bind('mousewheel DOMMouseScroll', function(e) {
            if (screen.width < 960 || jQuery(window).width() < 960 || wheel_stop || trx_addons_browser_is_ios()) {
                return;
            }
            if (wheel_busy || wheel_time == e.timeStamp) {
                e.preventDefault();
                return false;
            }
            wheel_time = e.timeStamp;
            var wheel_dir = e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? -1 : 1;
            var items = trx_addons_detect_active_toc();
            var doit = false;
            if (wheel_dir == -1) {
                doit = true;
                setTimeout(function() {
                    if (items.prev >= 0) trx_addons_scroll_to_anchor(toc_menu_items.eq(items.prev).find('a'), false);
                    else trx_addons_document_animate_to(0);
                }, 10);
            } else {
                if (items.next >= 0) {
                    doit = true;
                    setTimeout(function() {
                        trx_addons_scroll_to_anchor(toc_menu_items.eq(items.next).find('a'), false);
                    }, 10);
                }
            }
            if (doit) {
                wheel_busy = true;
                setTimeout(function() {
                    wheel_busy = false;
                }, trx_addons_browser_is_ios() ? 1200 : 100);
                e.preventDefault();
                return false;
            }
        });
    }

    function trx_addons_detect_active_toc() {
        "use strict";
        var items = {
            loc: '',
            current: [],
            prev: -1,
            next: -1
        };
        toc_menu_items.each(function(idx) {
            "use strict";
            var id = '#' + jQuery(this).data('id');
            var pos = id.indexOf('#');
            if (pos < 0 || id.length == 1) return;
            var href = jQuery(this).find('a').attr('href');
            var href_pos = href.indexOf('#');
            if (href_pos < 0) href_pos = href.length;
            var loc = window.location.href;
            var pos2 = loc.indexOf('#');
            if (pos2 > 0) loc = loc.substring(0, pos2);
            var now = pos == 0;
            if (!now) now = loc == href.substring(0, href_pos);
            if (!now) return;
            var off = jQuery(id).offset().top;
            var id_next = jQuery(this).next().data('id');
            var off_next = id_next ? jQuery('#' + id_next).offset().top : 1000000;
            var scroll_offset = jQuery(window).scrollTop();
            if (off > scroll_offset + 50) {
                if (items.next < 0) items.next = idx;
            } else if (off < scroll_offset - 50) items.prev = idx;
            if (off < scroll_offset + jQuery(window).height() * 0.8 && scroll_offset < off_next - 50) {
                items.current.push(idx);
                if (items.loc == '') items.loc = href_pos == 0 ? loc + id : id;
            }
        });
        return items;
    }



    function trx_addons_scroll_to_anchor(link_obj, click_event) {
        "use strict";
        var href = click_event ? link_obj.attr('href') : '#' + link_obj.parent().data('id');
        if (href === undefined) return false;
        var pos = href.indexOf('#');
        if (pos < 0 || href.length == 1) return false;
        if (jQuery(href.substr(pos)).length > 0) {
            var loc = window.location.href;
            var pos2 = loc.indexOf('#');
            if (pos2 > 0) loc = loc.substring(0, pos2);
            var now = pos == 0;
            if (!now) now = loc == href.substring(0, pos);
            if (now) {
                wheel_busy = true;
                setTimeout(function() {
                    wheel_busy = false;
                }, trx_addons_browser_is_ios() ? 1200 : 100);
                trx_addons_document_animate_to(href.substr(pos), function() {
                    if (TRX_ADDONS_STORAGE['update_location_from_anchor'] == 1) trx_addons_document_set_location(pos == 0 ? loc + href : href);
                });
                return true;
            }
        }
        return false;
    }
});

function trx_addons_build_page_toc() {
    "use strict";
    var toc = '',
        toc_count = 0;
    jQuery('[id^="toc_menu_"],.sc_anchor').each(function(idx) {
        "use strict";
        var obj = jQuery(this);
        var obj_id = obj.attr('id') || ('sc_anchor_' + Math.random()).replace('.', '');
        var row = obj.parents('.wpb_row');
        if (row.length == 0) row = obj.parent();
        var row_id = row.length > 0 && row.attr('id') != undefined && row.attr('id') != '' ? row.attr('id') : '';
        var id = row_id || obj_id.substr(10);
        if (row.length > 0 && row_id == '') {
            row.attr('id', id);
        }
        var url = obj.data('url');
        var icon = obj.data('icon') || 'toc_menu_icon_default';
        var title = obj.attr('title');
        var description = obj.data('description');
        var separator = obj.data('separator');
        toc_count++;
        toc += '<div class="toc_menu_item' + (separator == 'yes' ? ' toc_menu_separator' : '') + '" data-id="' + id + '">' + (title || description ? '<a href="' + (url ? url : '#' + id) + '" class="toc_menu_description">' + (title ? '<span class="toc_menu_description_title">' + title + '</span>' : '') + (description ? '<span class="toc_menu_description_text">' + description + '</span>' : '') + '</a>' : '') + '<a href="' + (url ? url : '#' + id) + '" class="toc_menu_icon ' + icon + '"></a>' + '</div>';
    });
    if (toc_count > 0) 
    {
        toc += '<div class="Language">' + 
        '<a href="#"> <div class="tkm"> <img  src="images/tkm.png" > </img>  </div> </a>'+
        '<a href="#"> <div class="ru"> <img src="images/ru.png" > </img>  </div> </a>'+
        '<a href="#"> <div class="en"> <img src="images/en.png" > </img>  </div> </a>';


        jQuery('body').append('<div id="toc_menu" class="toc_menu"><div class="toc_menu_inner">' + toc + '</div></div>');
    }
}﻿(function() {
    var j = false;
    window.JQClass = function() {};
    JQClass.classes = {};
    JQClass.extend = function extender(f) {
        var g = this.prototype;
        j = true;
        var h = new this();
        j = false;
        for (var i in f) {
            h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function(d, e) {
                return function() {
                    var b = this._super;
                    this._super = function(a) {
                        return g[d].apply(this, a || [])
                    };
                    var c = e.apply(this, arguments);
                    this._super = b;
                    return c
                }
            })(i, f[i]) : f[i]
        }

        function JQClass() {
            if (!j && this._init) {
                this._init.apply(this, arguments)
            }
        }
        JQClass.prototype = h;
        JQClass.prototype.constructor = JQClass;
        JQClass.extend = extender;
        return JQClass
    }
})();
(function($) {
    JQClass.classes.JQPlugin = JQClass.extend({
        name: 'plugin',
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return 'is-' + this.name
        },
        _init: function() {
            $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
            var c = camelCase(this.name);
            $[c] = this;
            $.fn[c] = function(a) {
                var b = Array.prototype.slice.call(arguments, 1);
                if ($[c]._isNotChained(a, b)) {
                    return $[c][a].apply($[c], [this[0]].concat(b))
                }
                return this.each(function() {
                    if (typeof a === 'string') {
                        if (a[0] === '_' || !$[c][a]) {
                            throw 'Unknown method: ' + a;
                        }
                        $[c][a].apply($[c], [this].concat(b))
                    } else {
                        $[c]._attach(this, a)
                    }
                })
            }
        },
        setDefaults: function(a) {
            $.extend(this.defaultOptions, a || {})
        },
        _isNotChained: function(a, b) {
            if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) {
                return true
            }
            return $.inArray(a, this._getters) > -1
        },
        _attach: function(a, b) {
            a = $(a);
            if (a.hasClass(this._getMarker())) {
                return
            }
            a.addClass(this._getMarker());
            b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
            var c = $.extend({
                name: this.name,
                elem: a,
                options: b
            }, this._instSettings(a, b));
            a.data(this.name, c);
            this._postAttach(a, c);
            this.option(a, b)
        },
        _instSettings: function(a, b) {
            return {}
        },
        _postAttach: function(a, b) {},
        _getMetadata: function(d) {
            try {
                var f = d.data(this.name.toLowerCase()) || '';
                f = f.replace(/'/g, '"');
                f = f.replace(/([a-zA-Z0-9]+):/g, function(a, b, i) {
                    var c = f.substring(0, i).match(/"/g);
                    return (!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':')
                });
                f = $.parseJSON('{' + f + '}');
                for (var g in f) {
                    var h = f[g];
                    if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
                        f[g] = eval(h)
                    }
                }
                return f
            } catch (e) {
                return {}
            }
        },
        _getInst: function(a) {
            return $(a).data(this.name) || {}
        },
        option: function(a, b, c) {
            a = $(a);
            var d = a.data(this.name);
            if (!b || (typeof b === 'string' && c == null)) {
                var e = (d || {}).options;
                return (e && b ? e[b] : e)
            }
            if (!a.hasClass(this._getMarker())) {
                return
            }
            var e = b || {};
            if (typeof b === 'string') {
                e = {};
                e[b] = c
            }
            this._optionsChanged(a, d, e);
            $.extend(d.options, e)
        },
        _optionsChanged: function(a, b, c) {},
        destroy: function(a) {
            a = $(a);
            if (!a.hasClass(this._getMarker())) {
                return
            }
            this._preDestroy(a, this._getInst(a));
            a.removeData(this.name).removeClass(this._getMarker())
        },
        _preDestroy: function(a, b) {}
    });

    function camelCase(c) {
        return c.replace(/-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    $.JQPlugin = {
        createPlugin: function(a, b) {
            if (typeof a === 'object') {
                b = a;
                a = 'JQPlugin'
            }
            a = camelCase(a);
            var c = camelCase(b.name);
            JQClass.classes[c] = JQClass.classes[a].extend(b);
            new JQClass.classes[c]()
        }
    }
})(jQuery);
(function($) {
    var w = 'countdown';
    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.JQPlugin.createPlugin({
        name: w,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: 'dHMS',
            layout: '',
            compact: false,
            padZeroes: false,
            significant: 0,
            description: '',
            expiryUrl: '',
            expiryText: '',
            alwaysExpire: false,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            '': {
                labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
                labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
                compactLabels: ['y', 'm', 'w', 'd'],
                whichLabels: null,
                digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                timeSeparator: ':',
                isRTL: false
            }
        },
        _getters: ['getTimes'],
        _rtlClass: w + '-rtl',
        _sectionClass: w + '-section',
        _amountClass: w + '-amount',
        _periodClass: w + '-period',
        _rowClass: w + '-row',
        _holdingClass: w + '-holding',
        _showClass: w + '-show',
        _descrClass: w + '-descr',
        _timerElems: [],
        _init: function() {
            var c = this;
            this._super();
            this._serverSyncs = [];
            var d = (typeof Date.now == 'function' ? Date.now : function() {
                return new Date().getTime()
            });
            var e = (window.performance && typeof window.performance.now == 'function');

            function timerCallBack(a) {
                var b = (a < 1e12 ? (e ? (performance.now() + performance.timing.navigationStart) : d()) : a || d());
                if (b - g >= 1000) {
                    c._updateElems();
                    g = b
                }
                f(timerCallBack)
            }
            var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            var g = 0;
            if (!f || $.noRequestAnimationFrame) {
                $.noRequestAnimationFrame = null;
                setInterval(function() {
                    c._updateElems()
                }, 980)
            } else {
                g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d();
                f(timerCallBack)
            }
        },
        UTCDate: function(a, b, c, e, f, g, h, i) {
            if (typeof b == 'object' && b.constructor == Date) {
                i = b.getMilliseconds();
                h = b.getSeconds();
                g = b.getMinutes();
                f = b.getHours();
                e = b.getDate();
                c = b.getMonth();
                b = b.getFullYear()
            }
            var d = new Date();
            d.setUTCFullYear(b);
            d.setUTCDate(1);
            d.setUTCMonth(c || 0);
            d.setUTCDate(e || 1);
            d.setUTCHours(f || 0);
            d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
            d.setUTCSeconds(h || 0);
            d.setUTCMilliseconds(i || 0);
            return d
        },
        periodsToSeconds: function(a) {
            return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
        },
        resync: function() {
            var d = this;
            $('.' + this._getMarker()).each(function() {
                var a = $.data(this, d.name);
                if (a.options.serverSync) {
                    var b = null;
                    for (var i = 0; i < d._serverSyncs.length; i++) {
                        if (d._serverSyncs[i][0] == a.options.serverSync) {
                            b = d._serverSyncs[i];
                            break
                        }
                    }
                    if (b[2] == null) {
                        var c = ($.isFunction(a.options.serverSync) ? a.options.serverSync.apply(this, []) : null);
                        b[2] = (c ? new Date().getTime() - c.getTime() : 0) - b[1]
                    }
                    if (a._since) {
                        a._since.setMilliseconds(a._since.getMilliseconds() + b[2])
                    }
                    a._until.setMilliseconds(a._until.getMilliseconds() + b[2])
                }
            });
            for (var i = 0; i < d._serverSyncs.length; i++) {
                if (d._serverSyncs[i][2] != null) {
                    d._serverSyncs[i][1] += d._serverSyncs[i][2];
                    delete d._serverSyncs[i][2]
                }
            }
        },
        _instSettings: function(a, b) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(a) {
            if (!this._hasElem(a)) {
                this._timerElems.push(a)
            }
        },
        _hasElem: function(a) {
            return ($.inArray(a, this._timerElems) > -1)
        },
        _removeElem: function(b) {
            this._timerElems = $.map(this._timerElems, function(a) {
                return (a == b ? null : a)
            })
        },
        _updateElems: function() {
            for (var i = this._timerElems.length - 1; i >= 0; i--) {
                this._updateCountdown(this._timerElems[i])
            }
        },
        _optionsChanged: function(a, b, c) {
            if (c.layout) {
                c.layout = c.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }
            this._resetExtraLabels(b.options, c);
            var d = (b.options.timezone != c.timezone);
            $.extend(b.options, c);
            this._adjustSettings(a, b, c.until != null || c.since != null || d);
            var e = new Date();
            if ((b._since && b._since < e) || (b._until && b._until > e)) {
                this._addElem(a[0])
            }
            this._updateCountdown(a, b)
        },
        _updateCountdown: function(a, b) {
            a = a.jquery ? a : $(a);
            b = b || this._getInst(a);
            if (!b) {
                return
            }
            a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
            if ($.isFunction(b.options.onTick)) {
                var c = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
                if (b.options.tickInterval == 1 || this.periodsToSeconds(c) % b.options.tickInterval == 0) {
                    b.options.onTick.apply(a[0], [c])
                }
            }
            var d = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
            if (d && !b._expiring) {
                b._expiring = true;
                if (this._hasElem(a[0]) || b.options.alwaysExpire) {
                    this._removeElem(a[0]);
                    if ($.isFunction(b.options.onExpiry)) {
                        b.options.onExpiry.apply(a[0], [])
                    }
                    if (b.options.expiryText) {
                        var e = b.options.layout;
                        b.options.layout = b.options.expiryText;
                        this._updateCountdown(a[0], b);
                        b.options.layout = e
                    }
                    if (b.options.expiryUrl) {
                        window.location = b.options.expiryUrl
                    }
                }
                b._expiring = false
            } else if (b._hold == 'pause') {
                this._removeElem(a[0])
            }
        },
        _resetExtraLabels: function(a, b) {
            for (var n in b) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                    a[n] = b[n]
                }
            }
            for (var n in a) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/) && typeof b[n] === 'undefined') {
                    a[n] = null
                }
            }
        },
        _adjustSettings: function(a, b, c) {
            var d = null;
            for (var i = 0; i < this._serverSyncs.length; i++) {
                if (this._serverSyncs[i][0] == b.options.serverSync) {
                    d = this._serverSyncs[i][1];
                    break
                }
            }
            if (d != null) {
                var e = (b.options.serverSync ? d : 0);
                var f = new Date()
            } else {
                var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a[0], []) : null);
                var f = new Date();
                var e = (g ? f.getTime() - g.getTime() : 0);
                this._serverSyncs.push([b.options.serverSync, e])
            }
            var h = b.options.timezone;
            h = (h == null ? -f.getTimezoneOffset() : h);
            if (c || (!c && b._until == null && b._since == null)) {
                b._since = b.options.since;
                if (b._since != null) {
                    b._since = this.UTCDate(h, this._determineTime(b._since, null));
                    if (b._since && e) {
                        b._since.setMilliseconds(b._since.getMilliseconds() + e)
                    }
                }
                b._until = this.UTCDate(h, this._determineTime(b.options.until, f));
                if (e) {
                    b._until.setMilliseconds(b._until.getMilliseconds() + e)
                }
            }
            b._show = this._determineShow(b)
        },
        _preDestroy: function(a, b) {
            this._removeElem(a[0]);
            a.empty()
        },
        pause: function(a) {
            this._hold(a, 'pause')
        },
        lap: function(a) {
            this._hold(a, 'lap')
        },
        resume: function(a) {
            this._hold(a, null)
        },
        toggle: function(a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? 'pause' : 'resume'](a)
        },
        toggleLap: function(a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? 'lap' : 'resume'](a)
        },
        _hold: function(a, b) {
            var c = $.data(a, this.name);
            if (c) {
                if (c._hold == 'pause' && !b) {
                    c._periods = c._savePeriods;
                    var d = (c._since ? '-' : '+');
                    c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
                    this._addElem(a)
                }
                c._hold = b;
                c._savePeriods = (b == 'pause' ? c._periods : null);
                $.data(a, this.name, c);
                this._updateCountdown(a, c)
            }
        },
        getTimes: function(a) {
            var b = $.data(a, this.name);
            return (!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
        },
        _determineTime: function(k, l) {
            var m = this;
            var n = function(a) {
                var b = new Date();
                b.setTime(b.getTime() + a * 1000);
                return b
            };
            var o = function(a) {
                a = a.toLowerCase();
                var b = new Date();
                var c = b.getFullYear();
                var d = b.getMonth();
                var e = b.getDate();
                var f = b.getHours();
                var g = b.getMinutes();
                var h = b.getSeconds();
                var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var j = i.exec(a);
                while (j) {
                    switch (j[2] || 's') {
                        case 's':
                            h += parseInt(j[1], 10);
                            break;
                        case 'm':
                            g += parseInt(j[1], 10);
                            break;
                        case 'h':
                            f += parseInt(j[1], 10);
                            break;
                        case 'd':
                            e += parseInt(j[1], 10);
                            break;
                        case 'w':
                            e += parseInt(j[1], 10) * 7;
                            break;
                        case 'o':
                            d += parseInt(j[1], 10);
                            e = Math.min(e, m._getDaysInMonth(c, d));
                            break;
                        case 'y':
                            c += parseInt(j[1], 10);
                            e = Math.min(e, m._getDaysInMonth(c, d));
                            break
                    }
                    j = i.exec(a)
                }
                return new Date(c, d, e, f, g, h, 0)
            };
            var p = (k == null ? l : (typeof k == 'string' ? o(k) : (typeof k == 'number' ? n(k) : k)));
            if (p) p.setMilliseconds(0);
            return p
        },
        _getDaysInMonth: function(a, b) {
            return 32 - new Date(a, b, 32).getDate()
        },
        _normalLabels: function(a) {
            return a
        },
        _generateHTML: function(c) {
            var d = this;
            c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
            var e = false;
            var f = 0;
            var g = c.options.significant;
            var h = $.extend({}, c._show);
            for (var i = Y; i <= S; i++) {
                e |= (c._show[i] == '?' && c._periods[i] > 0);
                h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
                f += (h[i] ? 1 : 0);
                g -= (c._periods[i] > 0 ? 1 : 0)
            }
            var j = [false, false, false, false, false, false, false];
            for (var i = S; i >= Y; i--) {
                if (c._show[i]) {
                    if (c._periods[i]) {
                        j[i] = true
                    } else {
                        j[i] = g > 0;
                        g--
                    }
                }
            }
            var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
            var l = c.options.whichLabels || this._normalLabels;
            var m = function(a) {
                var b = c.options['compactLabels' + l(c._periods[a])];
                return (h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
            };
            var n = (c.options.padZeroes ? 2 : 1);
            var o = function(a) {
                var b = c.options['labels' + l(c._periods[a])];
                return ((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + d._sectionClass + '">' + '<span class="' + d._amountClass + '">' + d._minDigits(c, c._periods[a], n) + '</span>' + '<span class="' + d._periodClass + '">' + (b ? b[a] : k[a]) + '</span></span>' : '')
            };
            return (c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + o(Y) + o(O) + o(W) + o(D) + o(H) + o(M) + o(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
        },
        _buildLayout: function(c, d, e, f, g, h) {
            var j = c.options[f ? 'compactLabels' : 'labels'];
            var k = c.options.whichLabels || this._normalLabels;
            var l = function(a) {
                return (c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
            };
            var m = function(a, b) {
                return c.options.digits[Math.floor(a / b) % 10]
            };
            var o = {
                desc: c.options.description,
                sep: c.options.timeSeparator,
                yl: l(Y),
                yn: this._minDigits(c, c._periods[Y], 1),
                ynn: this._minDigits(c, c._periods[Y], 2),
                ynnn: this._minDigits(c, c._periods[Y], 3),
                y1: m(c._periods[Y], 1),
                y10: m(c._periods[Y], 10),
                y100: m(c._periods[Y], 100),
                y1000: m(c._periods[Y], 1000),
                ol: l(O),
                on: this._minDigits(c, c._periods[O], 1),
                onn: this._minDigits(c, c._periods[O], 2),
                onnn: this._minDigits(c, c._periods[O], 3),
                o1: m(c._periods[O], 1),
                o10: m(c._periods[O], 10),
                o100: m(c._periods[O], 100),
                o1000: m(c._periods[O], 1000),
                wl: l(W),
                wn: this._minDigits(c, c._periods[W], 1),
                wnn: this._minDigits(c, c._periods[W], 2),
                wnnn: this._minDigits(c, c._periods[W], 3),
                w1: m(c._periods[W], 1),
                w10: m(c._periods[W], 10),
                w100: m(c._periods[W], 100),
                w1000: m(c._periods[W], 1000),
                dl: l(D),
                dn: this._minDigits(c, c._periods[D], 1),
                dnn: this._minDigits(c, c._periods[D], 2),
                dnnn: this._minDigits(c, c._periods[D], 3),
                d1: m(c._periods[D], 1),
                d10: m(c._periods[D], 10),
                d100: m(c._periods[D], 100),
                d1000: m(c._periods[D], 1000),
                hl: l(H),
                hn: this._minDigits(c, c._periods[H], 1),
                hnn: this._minDigits(c, c._periods[H], 2),
                hnnn: this._minDigits(c, c._periods[H], 3),
                h1: m(c._periods[H], 1),
                h10: m(c._periods[H], 10),
                h100: m(c._periods[H], 100),
                h1000: m(c._periods[H], 1000),
                ml: l(M),
                mn: this._minDigits(c, c._periods[M], 1),
                mnn: this._minDigits(c, c._periods[M], 2),
                mnnn: this._minDigits(c, c._periods[M], 3),
                m1: m(c._periods[M], 1),
                m10: m(c._periods[M], 10),
                m100: m(c._periods[M], 100),
                m1000: m(c._periods[M], 1000),
                sl: l(S),
                sn: this._minDigits(c, c._periods[S], 1),
                snn: this._minDigits(c, c._periods[S], 2),
                snnn: this._minDigits(c, c._periods[S], 3),
                s1: m(c._periods[S], 1),
                s10: m(c._periods[S], 10),
                s100: m(c._periods[S], 100),
                s1000: m(c._periods[S], 1000)
            };
            var p = e;
            for (var i = Y; i <= S; i++) {
                var q = 'yowdhms'.charAt(i);
                var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
                p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
            }
            $.each(o, function(n, v) {
                var a = new RegExp('\\{' + n + '\\}', 'g');
                p = p.replace(a, v)
            });
            return p
        },
        _minDigits: function(a, b, c) {
            b = '' + b;
            if (b.length >= c) {
                return this._translateDigits(a, b)
            }
            b = '0000000000' + b;
            return this._translateDigits(a, b.substr(b.length - c))
        },
        _translateDigits: function(b, c) {
            return ('' + c).replace(/[0-9]/g, function(a) {
                return b.options.digits[a]
            })
        },
        _determineShow: function(a) {
            var b = a.options.format;
            var c = [];
            c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
            c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
            c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
            c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
            c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
            c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
            c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
            return c
        },
        _calculatePeriods: function(c, d, e, f) {
            c._now = f;
            c._now.setMilliseconds(0);
            var g = new Date(c._now.getTime());
            if (c._since) {
                if (f.getTime() < c._since.getTime()) {
                    c._now = f = g
                } else {
                    f = c._since
                }
            } else {
                g.setTime(c._until.getTime());
                if (f.getTime() > c._until.getTime()) {
                    c._now = f = g
                }
            }
            var h = [0, 0, 0, 0, 0, 0, 0];
            if (d[Y] || d[O]) {
                var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
                var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
                var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
                var l = function(a) {
                    return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
                };
                var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
                h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
                h[O] = (d[O] ? m - h[Y] * 12 : 0);
                f = new Date(f.getTime());
                var n = (f.getDate() == i);
                var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
                if (f.getDate() > o) {
                    f.setDate(o)
                }
                f.setFullYear(f.getFullYear() + h[Y]);
                f.setMonth(f.getMonth() + h[O]);
                if (n) {
                    f.setDate(o)
                }
            }
            var p = Math.floor((g.getTime() - f.getTime()) / 1000);
            var q = function(a, b) {
                h[a] = (d[a] ? Math.floor(p / b) : 0);
                p -= h[a] * b
            };
            q(W, 604800);
            q(D, 86400);
            q(H, 3600);
            q(M, 60);
            q(S, 1);
            if (p > 0 && !c._since) {
                var r = [1, 12, 4.3482, 7, 24, 60, 60];
                var s = S;
                var t = 1;
                for (var u = S; u >= Y; u--) {
                    if (d[u]) {
                        if (h[s] >= t) {
                            h[s] = 0;
                            p = 1
                        }
                        if (p > 0) {
                            h[u]++;
                            p = 0;
                            s = u;
                            t = 1
                        }
                    }
                    t *= r[u]
                }
            }
            if (e) {
                for (var u = Y; u <= S; u++) {
                    if (e && h[u]) {
                        e--
                    } else if (!e) {
                        h[u] = 0
                    }
                }
            }
            return h
        }
    })
})(jQuery);
jQuery(document).on('action.init_hidden_elements', trx_addons_sc_countdown_init);
jQuery(document).on('action.init_shortcodes', trx_addons_sc_countdown_init);

function trx_addons_sc_countdown_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    container.find('.sc_countdown:not(.inited)').each(function() {
        "use strict";
        jQuery(this).addClass('inited');
        var id = jQuery(this).attr('id');
        var curDate = new Date();
        var curDateTimeStr = curDate.getFullYear() + '-' + (curDate.getMonth() < 9 ? '0' : '') + (curDate.getMonth() + 1) + '-' + (curDate.getDate() < 10 ? '0' : '') + curDate.getDate() + ' ' + (curDate.getHours() < 10 ? '0' : '') + curDate.getHours() + ':' + (curDate.getMinutes() < 10 ? '0' : '') + curDate.getMinutes() + ':' + (curDate.getSeconds() < 10 ? '0' : '') + curDate.getSeconds();
        var interval = 1;
        var endDateStr = jQuery(this).data('date');
        var endDateParts = endDateStr.split('-');
        var endTimeStr = jQuery(this).data('time');
        var endTimeParts = endTimeStr.split(':');
        if (endTimeParts.length < 3) endTimeParts[2] = '00';
        var endDateTimeStr = endDateStr + ' ' + endTimeStr;
        if (curDateTimeStr < endDateTimeStr) {
            jQuery(this).find('.sc_countdown_placeholder').countdown({
                until: new Date(endDateParts[0], endDateParts[1] - 1, endDateParts[2], endTimeParts[0], endTimeParts[1], endTimeParts[2]),
                tickInterval: interval,
                onTick: trx_addons_sc_countdown
            });
        } else {
            jQuery(this).find('.sc_countdown_placeholder').countdown({
                since: new Date(endDateParts[0], endDateParts[1] - 1, endDateParts[2], endTimeParts[0], endTimeParts[1], endTimeParts[2]),
                tickInterval: interval,
                onTick: trx_addons_sc_countdown
            });
        }
    });
}

function trx_addons_sc_countdown(dt) {
    "use strict";
    var counter = jQuery(this).parent();
    for (var i = 3; i < dt.length; i++) {
        var v = (dt[i] < 10 ? '0' : '') + dt[i];
        var item = counter.find('.sc_countdown_item').eq(i - 3);
        var digits = item.find('.sc_countdown_digits span').addClass('hide');
        for (var ch = v.length - 1; ch >= 0; ch--) {
            digits.eq(ch + (i == 3 && v.length < 3 ? 1 : 0)).removeClass('hide').text(v.substr(ch, 1));
        }
        trx_addons_sc_countdown_update_canvas(item, dt[i]);
    }
}

function trx_addons_sc_countdown_update_canvas(item, value) {
    var canvas = item.find('canvas');
    if (canvas.length == 0) return;
    var digits = canvas.next();
    var brd = parseInt(digits.css('border-top-width'));
    var w = Math.ceil(digits.width() + 2 * brd);
    var needRepaint = false;
    if (canvas.attr('width') != w) {
        needRepaint = true;
        canvas.attr({
            'width': w,
            'height': w
        });
    }
    if (item.data('old-value') == value && !needRepaint) return;
    item.data('old-value', value);
    var percent = value * 100 / canvas.data('max-value');
    var angle = 360 * percent / 100;
    var Ar = angle * Math.PI / 180;
    var canvas_dom = canvas.get(0);
    var context = canvas_dom.getContext('2d');
    var r = (w - brd) / 2;
    var cx = w / 2;
    var cy = w / 2;
    context.beginPath();
    context.clearRect(0, 0, w, w);
    context.arc(cx, cy, r, 0, Ar, false);
    context.imageSmoothingEnabled = true;
    context.lineWidth = brd;
    context.strokeStyle = canvas.data('color');
    context.stroke();
}
jQuery(document).on('action.init_shortcodes', function(e, container) {
    "use strict";
    if (container.find('.sc_form_form:not(.inited)').length > 0) {
        container.find('.sc_form_form:not(.inited)').addClass('inited').submit(function(e) {
            "use strict";
            sc_form_validate(jQuery(this));
            e.preventDefault();
            return false;
        });
    }
    jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').each(function() {
        "use strict";
        sc_form_mark_filled(jQuery(this));
    });
    jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').on('blur change', function() {
        "use strict";
        sc_form_mark_filled(jQuery(this));
    });
    jQuery('input, textarea, select').on('change', function() {
        "use strict";
        jQuery(this).removeClass('trx_addons_field_error');
    });
});

function sc_form_mark_filled(field) {
    "use strict";
    if (field.val() != '') field.addClass('filled');
    else field.removeClass('filled');
}

function sc_form_validate(form) {
    "use strict";
    var url = form.attr('action');
    if (url == '') return false;
    form.find('input').removeClass('trx_addons_error_field');
    var error = trx_addons_form_validate(form, {
        rules: [{
            field: "name",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_name_empty']
            },
        }, {
            field: "email",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_email_empty']
            },
            mask: {
                value: TRX_ADDONS_STORAGE['email_mask'],
                message: TRX_ADDONS_STORAGE['msg_field_email_not_valid']
            }
        }, {
            field: "message",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_text_empty']
            },
        }]
    });
    if (!error && url != '#') {
        jQuery.post(url, {
            action: "send_sc_form",
            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
            data: form.serialize()
        }).done(function(response) {
            "use strict";
            var rez = {};
            try {
                rez = JSON.parse(response);
            } catch (e) {
                rez = {
                    error: TRX_ADDONS_STORAGE['msg_ajax_error']
                };
                console.log(response);
            }
            var result = form.find(".trx_addons_message_box").toggleClass("trx_addons_message_box_error", false).toggleClass("trx_addons_message_box_success", false);
            if (rez.error === '') {
                form.get(0).reset();
                result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_send_complete']);
            } else {
                result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_send_error'] + ' ' + rez.error);
            }
            result.fadeIn().delay(3000).fadeOut();
        });
    }
    return !error;
}
jQuery(document).on('action.init_hidden_elements', trx_addons_sc_googlemap_init);
jQuery(document).on('action.init_shortcodes', trx_addons_sc_googlemap_init);

function trx_addons_sc_googlemap_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    if (container.find('.sc_googlemap:not(.inited)').length > 0) {
        container.find('.sc_googlemap:not(.inited)').each(function() {
            "use strict";
            if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
            var map = jQuery(this).addClass('inited');
            var map_id = map.attr('id');
            var map_zoom = map.data('zoom');
            var map_style = map.data('style');
            var map_markers = [];
            map.find('.sc_googlemap_marker').each(function() {
                var marker = jQuery(this);
                map_markers.push({
                    icon: marker.data('icon'),
                    address: marker.data('address'),
                    latlng: marker.data('latlng'),
                    description: marker.data('description'),
                    title: marker.data('title')
                });
            });
            trx_addons_sc_googlemap_create(jQuery('#' + map_id).get(0), {
                style: map_style,
                zoom: map_zoom,
                markers: map_markers
            });
        });
    }
}

function trx_addons_sc_googlemap_create(dom_obj, coords) {
    "use strict";
    if (typeof TRX_ADDONS_STORAGE['googlemap_init_obj'] == 'undefined') trx_addons_sc_googlemap_init_styles();
    TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder = '';
    try {
        var id = dom_obj.id;
        TRX_ADDONS_STORAGE['googlemap_init_obj'][id] = {
            dom: dom_obj,
            markers: coords.markers,
            geocoder_request: false,
            opt: {
                zoom: coords.zoom,
                center: null,
                scrollwheel: false,
                scaleControl: false,
                disableDefaultUI: false,
                panControl: true,
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                styles: TRX_ADDONS_STORAGE['googlemap_styles'][coords.style ? coords.style : 'default'],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        };
        trx_addons_sc_googlemap_build(id);
    } catch (e) {
        console.log(TRX_ADDONS_STORAGE['msg_sc_googlemap_not_avail']);
    };
}

function trx_addons_sc_googlemap_refresh() {
    "use strict";
    for (var id in TRX_ADDONS_STORAGE['googlemap_init_obj']) {
        trx_addons_sc_googlemap_build(id);
    }
}

function trx_addons_sc_googlemap_build(id) {
    "use strict";
    TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map = new google.maps.Map(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].dom, TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt);
    for (var i in TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers) TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].inited = false;
    trx_addons_sc_googlemap_add_markers(id);
    jQuery(window).resize(function() {
        if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map) TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map.setCenter(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center);
    });
}

function trx_addons_sc_googlemap_add_markers(id) {
    "use strict";
    for (var i in TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers) {
        if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].inited) continue;
        if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].latlng == '') {
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request !== false) continue;
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder == '') TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder = new google.maps.Geocoder();
            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request = i;
            TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder.geocode({
                address: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var idx = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request;
                    if (results[0].geometry.location.lat && results[0].geometry.location.lng) {
                        TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = '' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
                    } else {
                        TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = results[0].geometry.location.toString().replace(/\(\)/g, '');
                    }
                    TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request = false;
                    setTimeout(function() {
                        trx_addons_sc_googlemap_add_markers(id);
                    }, 200);
                } else dcl(TRX_ADDONS_STORAGE['msg_sc_googlemap_geocoder_error'] + ' ' + status);
            });
        } else {
            var latlngStr = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].latlng.split(',');
            var markerInit = {
                map: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map,
                position: new google.maps.LatLng(latlngStr[0], latlngStr[1]),
                clickable: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].description != ''
            };
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].icon) markerInit.icon = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].icon;
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].title) markerInit.title = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].title;
            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].marker = new google.maps.Marker(markerInit);
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center == null) {
                TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center = markerInit.position;
                TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map.setCenter(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center);
            }
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].description != '') {
                TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].infowindow = new google.maps.InfoWindow({
                    content: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].description
                });
                google.maps.event.addListener(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].marker, "click", function(e) {
                    var latlng = e.latLng.toString().replace("(", '').replace(")", "").replace(" ", "");
                    for (var i in TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers) {
                        if (trx_addons_googlemap_compare_latlng(latlng, TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].latlng)) {
                            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].infowindow.open(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map, TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].marker);
                            break;
                        }
                    }
                });
            }
            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].inited = true;
        }
    }
}

function trx_addons_googlemap_compare_latlng(l1, l2) {
    "use strict";
    var l1 = l1.replace(/\s/g, '', l1).split(',');
    var l2 = l2.replace(/\s/g, '', l2).split(',');
    var m0 = Math.min(l1[0].length, l2[0].length);
    l1[0] = Number(l1[0]).toFixed(m0);
    l2[0] = Number(l2[0]).toFixed(m0);
    var m1 = Math.min(l1[1].length, l2[1].length);
    l1[1] = Number(l1[1]).toFixed(m1);
    l2[1] = Number(l2[1]).toFixed(m1);
    return l1[0] == l2[0] && l1[1] == l2[1];
}

function trx_addons_sc_googlemap_init_styles() {
    TRX_ADDONS_STORAGE['googlemap_init_obj'] = {};
    TRX_ADDONS_STORAGE['googlemap_styles'] = {
        'default': [],
        'greyscale': [{
            "stylers": [{
                "saturation": -100
            }]
        }],
        'inverse': [{
            "stylers": [{
                "invert_lightness": true
            }, {
                "visibility": "on"
            }]
        }],
        'simple': [{
            stylers: [{
                hue: "#00ffe6"
            }, {
                saturation: -20
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 100
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }]
    };
    jQuery(document).trigger('action.add_googlemap_styles');
}
'use strict';
(function(window, document) {
    'use strict';

    function Pathformer(element) {
        if (typeof element === 'undefined') {
            throw new Error('Pathformer [constructor]: "element" parameter is required');
        }
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            }
        }
        if (element.constructor instanceof window.SVGElement || /^svg$/i.test(element.nodeName)) {
            this.el = element;
        } else {
            throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        }
        this.scan(element);
    }
    Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];
    Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];
    Pathformer.prototype.scan = function(svg) {
        var fn, element, pathData, pathDom, elements = svg.querySelectorAll(this.TYPES.join(','));
        for (var i = 0; i < elements.length; i++) {
            element = elements[i];
            fn = this[element.tagName.toLowerCase() + 'ToPath'];
            pathData = fn(this.parseAttr(element.attributes));
            pathDom = this.pathMaker(element, pathData);
            element.parentNode.replaceChild(pathDom, element);
        }
    };
    Pathformer.prototype.lineToPath = function(element) {
        var newElement = {};
        newElement.d = 'M' + element.x1 + ',' + element.y1 + 'L' + element.x2 + ',' + element.y2;
        return newElement;
    };
    Pathformer.prototype.rectToPath = function(element) {
        var newElement = {},
            x = parseFloat(element.x) || 0,
            y = parseFloat(element.y) || 0,
            width = parseFloat(element.width) || 0,
            height = parseFloat(element.height) || 0;
        newElement.d = 'M' + x + ' ' + y + ' ';
        newElement.d += 'L' + (x + width) + ' ' + y + ' ';
        newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
        newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
        return newElement;
    };
    Pathformer.prototype.polylineToPath = function(element) {
        var i, path;
        var newElement = {};
        var points = element.points.trim().split(' ');
        if (element.points.indexOf(',') === -1) {
            var formattedPoints = [];
            for (i = 0; i < points.length; i += 2) {
                formattedPoints.push(points[i] + ',' + points[i + 1]);
            }
            points = formattedPoints;
        }
        path = 'M' + points[0];
        for (i = 1; i < points.length; i++) {
            if (points[i].indexOf(',') !== -1) {
                path += 'L' + points[i];
            }
        }
        newElement.d = path;
        return newElement;
    };
    Pathformer.prototype.polygonToPath = function(element) {
        var newElement = Pathformer.prototype.polylineToPath(element);
        newElement.d += 'Z';
        return newElement;
    };
    Pathformer.prototype.ellipseToPath = function(element) {
        var startX = element.cx - element.rx,
            startY = element.cy;
        var endX = parseFloat(element.cx) + parseFloat(element.rx),
            endY = element.cy;
        var newElement = {};
        newElement.d = 'M' + startX + ',' + startY + 'A' + element.rx + ',' + element.ry + ' 0,1,1 ' + endX + ',' + endY + 'A' + element.rx + ',' + element.ry + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };
    Pathformer.prototype.circleToPath = function(element) {
        var newElement = {};
        var startX = element.cx - element.r,
            startY = element.cy;
        var endX = parseFloat(element.cx) + parseFloat(element.r),
            endY = element.cy;
        newElement.d = 'M' + startX + ',' + startY + 'A' + element.r + ',' + element.r + ' 0,1,1 ' + endX + ',' + endY + 'A' + element.r + ',' + element.r + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };
    Pathformer.prototype.pathMaker = function(element, pathData) {
        var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        for (i = 0; i < element.attributes.length; i++) {
            attr = element.attributes[i];
            if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
                pathTag.setAttribute(attr.name, attr.value);
            }
        }
        for (i in pathData) {
            pathTag.setAttribute(i, pathData[i]);
        }
        return pathTag;
    };
    Pathformer.prototype.parseAttr = function(element) {
        var attr, output = {};
        for (var i = 0; i < element.length; i++) {
            attr = element[i];
            if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
                throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
            }
            output[attr.name] = attr.value;
        }
        return output;
    };
    'use strict';
    var requestAnimFrame, cancelAnimFrame, parsePositiveInt;

    function Vivus(element, options, callback) {
        this.isReady = false;
        this.setElement(element, options);
        this.setOptions(options);
        this.setCallback(callback);
        if (this.isReady) {
            this.init();
        }
    }
    Vivus.LINEAR = function(x) {
        return x;
    };
    Vivus.EASE = function(x) {
        return -Math.cos(x * Math.PI) / 2 + 0.5;
    };
    Vivus.EASE_OUT = function(x) {
        return 1 - Math.pow(1 - x, 3);
    };
    Vivus.EASE_IN = function(x) {
        return Math.pow(x, 3);
    };
    Vivus.EASE_OUT_BOUNCE = function(x) {
        var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
            rate = Math.pow(base, 1.5),
            rateR = Math.pow(1 - x, 2),
            progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
        return (1 - rateR) + (progress * rateR);
    };
    Vivus.prototype.setElement = function(element, options) {
        if (typeof element === 'undefined') {
            throw new Error('Vivus [constructor]: "element" parameter is required');
        }
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
            }
        }
        this.parentEl = element;
        if (options && options.file) {
            var objElm = document.createElement('object');
            objElm.setAttribute('type', 'image/svg+xml');
            objElm.setAttribute('data', options.file);
            objElm.setAttribute('built-by-vivus', 'true');
            element.appendChild(objElm);
            element = objElm;
        }
        switch (element.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
                this.el = element;
                this.isReady = true;
                break;
            case window.HTMLObjectElement:
                var onLoad, self;
                self = this;
                onLoad = function(e) {
                    if (self.isReady) {
                        return;
                    }
                    self.el = element.contentDocument && element.contentDocument.querySelector('svg');
                    if (!self.el && e) {
                        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
                    } else if (self.el) {
                        if (element.getAttribute('built-by-vivus')) {
                            self.parentEl.insertBefore(self.el, element);
                            self.parentEl.removeChild(element);
                            self.el.setAttribute('width', '100%');
                            self.el.setAttribute('height', '100%');
                        }
                        self.isReady = true;
                        self.init();
                        return true;
                    }
                };
                if (!onLoad()) {
                    element.addEventListener('load', onLoad);
                }
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
        }
    };
    Vivus.prototype.setOptions = function(options) {
        var allowedTypes = ['delayed', 'async', 'oneByOne', 'scenario', 'scenario-sync'];
        var allowedStarts = ['inViewport', 'manual', 'autostart'];
        if (options !== undefined && options.constructor !== Object) {
            throw new Error('Vivus [constructor]: "options" parameter must be an object');
        } else {
            options = options || {};
        }
        if (options.type && allowedTypes.indexOf(options.type) === -1) {
            throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
        } else {
            this.type = options.type || allowedTypes[0];
        }
        if (options.start && allowedStarts.indexOf(options.start) === -1) {
            throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
        } else {
            this.start = options.start || allowedStarts[0];
        }
        this.isIE = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1);
        this.duration = parsePositiveInt(options.duration, 120);
        this.delay = parsePositiveInt(options.delay, null);
        this.dashGap = parsePositiveInt(options.dashGap, 1);
        this.forceRender = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
        this.selfDestroy = !!options.selfDestroy;
        this.onReady = options.onReady;
        this.frameLength = this.currentFrame = this.map = this.delayUnit = this.speed = this.handle = null;
        this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;
        this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
        this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;
        if (this.delay >= this.duration) {
            throw new Error('Vivus [constructor]: delay must be shorter than duration');
        }
    };
    Vivus.prototype.setCallback = function(callback) {
        if (!!callback && callback.constructor !== Function) {
            throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        }
        this.callback = callback || function() {};
    };
    Vivus.prototype.mapping = function() {
        var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
        timePoint = totalLength = lengthMeter = 0;
        paths = this.el.querySelectorAll('path');
        for (i = 0; i < paths.length; i++) {
            path = paths[i];
            if (this.isInvisible(path)) {
                continue;
            }
            pathObj = {
                el: path,
                length: Math.ceil(path.getTotalLength())
            };
            if (isNaN(pathObj.length)) {
                if (window.console && console.warn) {
                    console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
                }
                continue;
            }
            this.map.push(pathObj);
            path.style.strokeDasharray = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
            path.style.strokeDashoffset = pathObj.length + this.dashGap;
            pathObj.length += this.dashGap;
            totalLength += pathObj.length;
            this.renderPath(i);
        }
        totalLength = totalLength === 0 ? 1 : totalLength;
        this.delay = this.delay === null ? this.duration / 3 : this.delay;
        this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);
        for (i = 0; i < this.map.length; i++) {
            pathObj = this.map[i];
            switch (this.type) {
                case 'delayed':
                    pathObj.startAt = this.delayUnit * i;
                    pathObj.duration = this.duration - this.delay;
                    break;
                case 'oneByOne':
                    pathObj.startAt = lengthMeter / totalLength * this.duration;
                    pathObj.duration = pathObj.length / totalLength * this.duration;
                    break;
                case 'async':
                    pathObj.startAt = 0;
                    pathObj.duration = this.duration;
                    break;
                case 'scenario-sync':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
                    this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
                    break;
                case 'scenario':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
                    break;
            }
            lengthMeter += pathObj.length;
            this.frameLength = this.frameLength || this.duration;
        }
    };
    Vivus.prototype.drawer = function() {
        var self = this;
        this.currentFrame += this.speed;
        if (this.currentFrame <= 0) {
            this.stop();
            this.reset();
            this.callback(this);
        } else if (this.currentFrame >= this.frameLength) {
            this.stop();
            this.currentFrame = this.frameLength;
            this.trace();
            if (this.selfDestroy) {
                this.destroy();
            }
            this.callback(this);
        } else {
            this.trace();
            this.handle = requestAnimFrame(function() {
                self.drawer();
            });
        }
    };
    Vivus.prototype.trace = function() {
        var i, progress, path, currentFrame;
        currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            progress = (currentFrame - path.startAt) / path.duration;
            progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
            if (path.progress !== progress) {
                path.progress = progress;
                path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
                this.renderPath(i);
            }
        }
    };
    Vivus.prototype.renderPath = function(index) {
        if (this.forceRender && this.map && this.map[index]) {
            var pathObj = this.map[index],
                newPath = pathObj.el.cloneNode(true);
            pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
            pathObj.el = newPath;
        }
    };
    Vivus.prototype.init = function() {
        this.frameLength = 0;
        this.currentFrame = 0;
        this.map = [];
        new Pathformer(this.el);
        this.mapping();
        this.starter();
        if (this.onReady) {
            this.onReady(this);
        }
    };
    Vivus.prototype.starter = function() {
        switch (this.start) {
            case 'manual':
                return;
            case 'autostart':
                this.play();
                break;
            case 'inViewport':
                var self = this,
                    listener = function() {
                        if (self.isInViewport(self.parentEl, 1)) {
                            self.play();
                            window.removeEventListener('scroll', listener);
                        }
                    };
                window.addEventListener('scroll', listener);
                listener();
                break;
        }
    };
    Vivus.prototype.getStatus = function() {
        return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
    };
    Vivus.prototype.reset = function() {
        return this.setFrameProgress(0);
    };
    Vivus.prototype.finish = function() {
        return this.setFrameProgress(1);
    };
    Vivus.prototype.setFrameProgress = function(progress) {
        progress = Math.min(1, Math.max(0, progress));
        this.currentFrame = Math.round(this.frameLength * progress);
        this.trace();
        return this;
    };
    Vivus.prototype.play = function(speed) {
        if (speed && typeof speed !== 'number') {
            throw new Error('Vivus [play]: invalid speed');
        }
        this.speed = speed || 1;
        if (!this.handle) {
            this.drawer();
        }
        return this;
    };
    Vivus.prototype.stop = function() {
        if (this.handle) {
            cancelAnimFrame(this.handle);
            this.handle = null;
        }
        return this;
    };
    Vivus.prototype.destroy = function() {
        this.stop();
        var i, path;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            path.el.style.strokeDashoffset = null;
            path.el.style.strokeDasharray = null;
            this.renderPath(i);
        }
    };
    Vivus.prototype.isInvisible = function(el) {
        var rect, ignoreAttr = el.getAttribute('data-ignore');
        if (ignoreAttr !== null) {
            return ignoreAttr !== 'false';
        }
        if (this.ignoreInvisible) {
            rect = el.getBoundingClientRect();
            return !rect.width && !rect.height;
        } else {
            return false;
        }
    };
    Vivus.prototype.parseAttr = function(element) {
        var attr, output = {};
        if (element && element.attributes) {
            for (var i = 0; i < element.attributes.length; i++) {
                attr = element.attributes[i];
                output[attr.name] = attr.value;
            }
        }
        return output;
    };
    Vivus.prototype.isInViewport = function(el, h) {
        var scrolled = this.scrollY(),
            viewed = scrolled + this.getViewportH(),
            elBCR = el.getBoundingClientRect(),
            elHeight = elBCR.height,
            elTop = scrolled + elBCR.top,
            elBottom = elTop + elHeight;
        h = h || 0;
        return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
    };
    Vivus.prototype.docElem = window.document.documentElement;
    Vivus.prototype.getViewportH = function() {
        var client = this.docElem.clientHeight,
            inner = window.innerHeight;
        if (client < inner) {
            return inner;
        } else {
            return client;
        }
    };
    Vivus.prototype.scrollY = function() {
        return window.pageYOffset || this.docElem.scrollTop;
    };
    requestAnimFrame = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        });
    })();
    cancelAnimFrame = (function() {
        return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(id) {
            return window.clearTimeout(id);
        });
    })();
    parsePositiveInt = function(value, defaultValue) {
        var output = parseInt(value, 10);
        return (output >= 0) ? output : defaultValue;
    };
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return Vivus;
        });
    } else if (typeof exports === 'object') {
        module.exports = Vivus;
    } else {
        window.Vivus = Vivus;
    }
}(window, document));
jQuery(document).on('action.init_shortcodes', function(e, container) {
    "use strict";
    var time = 50;
    container.find('.sc_icon_type_svg:not(.inited)').each(function(idx) {
        "use strict";
        var cont = jQuery(this);
        var id = cont.addClass('inited').attr('id');
        if (id === undefined) {
            id = 'sc_icons_' + Math.random();
            id = id.replace('.', '');
        } else id += '_' + idx;
        cont.find('svg').attr('id', id);
        setTimeout(function() {
            cont.css('visibility', 'visible');
            var obj = new Vivus(id, {
                type: 'async',
                duration: 20
            });
            cont.data('svg_obj', obj);
            cont.parent().hover(function() {
                cont.data('svg_obj').reset().play();
            }, function() {});
        }, time);
        time += 300;
    });
});
jQuery(document).on('action.init_hidden_elements', trx_addons_sc_skills_init);
jQuery(document).on('action.init_shortcodes', trx_addons_sc_skills_init);
jQuery(window).on('scroll', trx_addons_sc_skills_init);

function trx_addons_sc_skills_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    var scrollPosition = jQuery(window).scrollTop() + jQuery(window).height();
    container.find('.sc_skills_item:not(.inited)').each(function() {
        "use strict";
        var skillsItem = jQuery(this);
        if (jQuery(this).parents('div:hidden,article:hidden').length > 0) {
            return;
        }
        var scrollSkills = skillsItem.offset().top;
        if (scrollPosition > scrollSkills) {
            var init_ok = true;
            var skills = skillsItem.parents('.sc_skills').eq(0);
            var type = skills.data('type');
            var total = (type == 'pie' && skills.hasClass('sc_skills_compact_on')) ? skillsItem.find('.sc_skills_data .pie') : skillsItem.find('.sc_skills_total').eq(0);
            var start = parseFloat(total.data('start'));
            var stop = parseFloat(total.data('stop'));
            var maximum = parseInt(total.data('max'));
            var startPercent = Math.round(start / maximum * 100);
            var stopPercent = Math.round(stop / maximum * 100);
            var ed = total.data('ed');
            var speed = parseInt(total.data('speed'));
            var step = start != parseInt(start) || stop != parseInt(stop) ? parseFloat(total.data('step')) : parseInt(total.data('step'));
            var duration = parseInt(total.data('duration'));
            if (isNaN(duration)) duration = Math.ceil(maximum / step) * speed;
            if (type == 'bar') {
                var dir = skills.data('dir');
                var count = skillsItem.find('.sc_skills_count').eq(0);
                if (dir == 'horizontal') count.css('width', startPercent + '%').animate({
                    width: stopPercent + '%'
                }, duration);
                else if (dir == 'vertical') count.css('height', startPercent + '%').animate({
                    height: stopPercent + '%'
                }, duration);
                trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total);
            } else if (type == 'counter') {
                trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total);
            } else if (type == 'pie') {
                if (window.Chart) {
                    var steps = parseInt(total.data('steps'));
                    var bg_color = total.data('bg_color');
                    var border_color = total.data('border_color');
                    var cutout = parseInt(total.data('cutout'));
                    var easing = total.data('easing');
                    var options = {
                        segmentShowStroke: border_color != '',
                        segmentStrokeColor: border_color,
                        segmentStrokeWidth: border_color != '' ? 1 : 0,
                        percentageInnerCutout: cutout,
                        animationSteps: steps,
                        animationEasing: easing,
                        animateRotate: true,
                        animateScale: false,
                    };
                    var pieData = [];
                    total.each(function() {
                        "use strict";
                        var color = jQuery(this).data('color');
                        var stop = parseInt(jQuery(this).data('stop'));
                        var stopPercent = Math.round(stop / maximum * 100);
                        pieData.push({
                            value: stopPercent,
                            color: color
                        });
                    });
                    if (total.length == 1) {
                        trx_addons_sc_skills_animate_counter(start, stop, Math.round(1500 / steps), step, ed, total);
                        pieData.push({
                            value: 100 - stopPercent,
                            color: bg_color
                        });
                    }
                    var canvas = skillsItem.find('canvas');
                    canvas.attr({
                        width: skillsItem.width(),
                        height: skillsItem.width()
                    }).css({
                        width: skillsItem.width(),
                        height: skillsItem.height()
                    });
                    new Chart(canvas.get(0).getContext("2d")).Doughnut(pieData, options);
                } else init_ok = false;
            }
            if (init_ok) skillsItem.addClass('inited');
        }
    });
}

function trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total) {
    "use strict";
    start = Math.min(stop, start + step);
    total.text(start + ed);
    if (start < stop) {
        setTimeout(function() {
            trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total);
        }, speed);
    }
}