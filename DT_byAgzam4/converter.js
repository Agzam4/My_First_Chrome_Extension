function con() {
    unElemByClass('html');
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
}