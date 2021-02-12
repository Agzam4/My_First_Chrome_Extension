var url = window.location.host;
//body.onload = function () {
//    var black = document.createElement('blackscreen1234567890');
//    black.style = 'background: rgba(255, 255, 255, 0.5); min-height: 100%; min-width: 100%; display: block; top: 0px; right: 0px; z-index: 99999; position: fixed;';
//    document.body.appendChild(black);
//};

window.onload = function () {
    //unElemByClass('html');
    unElemByClass('img');
    unElemByClass('[dir=ltr] .im-mess .im-mess--text .page_post_sized_thumbs a.page_post_thumb_last_column, [dir=ltr] .im-mess .im-mess--text .page_post_sized_thumbs span.page_post_thumb_last_column');
    unElemByClass('[dir=ltr] .videoplayer_end_screen');
    unElemByClass('.videoplayer');
    unElemByClass('[dir] .page_post_sized_thumbs a.page_post_thumb_last_row, [dir] .page_post_sized_thumbs span.page_post_thumb_last_row');
    unElemByClass('.ow_ava.ow_ava_comm');
    unElemByClass('.button_user');
    unElemByClass('.emoji');
    //unElemByClass('img');
    //unElemByClass('img');


        var css = 'html { filter: drop-shadow(2px 4px 6px black) invert(100%);}',
            style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

    function unElemByClass(classname) {
        var css = classname + ' { filter: invert(100%);}',
            style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    };
};