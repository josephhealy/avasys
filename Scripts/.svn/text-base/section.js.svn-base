var archiveHeight;

jQuery.getScript("../scripts/jquery-ui-drag.min.js", dragCallback);

var pgInited = false;
var dragInited = false;

function page_init() {
    pgInited = true;
    if (dragInited) dragInit();
}

function dragCallback() {
    dragInited = true;
    if (pgInited) dragInit();
}

function dragInit() {
    setHeight();
    $("#shuttle").draggable({
        axis: 'y',
        containment: 'parent',
        cursor: 'pointer',
        drag: scrolling
    });
}

function scrolling(event, ui) {
    $("#window").scrollTop(ui.position.top / 210 * archiveHeight);
}

function setHeight() {
    var win = $("#window");
    archiveHeight = win.attr("scrollHeight") - win.height();
}