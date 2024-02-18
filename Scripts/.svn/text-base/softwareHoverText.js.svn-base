$(document).ready(init);

function init() {
    registerHoverText('cots');
    registerHoverText('diy');
    registerHoverText('agile');
    registerHoverText('team');
    registerHoverText('offshore');
    registerHoverText('stack');
    registerHoverText('architecture');
    registerHoverText('cloud');
    registerHoverText('saas');
    registerHoverText('multi');
    registerHoverText('nosql');
    registerHoverText('clevel');
    registerHoverText('fund');
    registerHoverText('staff');
    registerHoverText('expert');
    
    /* Adding a colortip to any tag with a title attribute:
    $('a[title]').colorTip({ color: 'yellow' }); */

}

function registerHoverText(text) {
    $('#' + text).bind('mouseover', function () { $('#software_services').hide(); $('#software_' + text).show(); });
    $('#' + text).bind('mouseout', function () { $('#software_' + text).hide(); $('#software_services').show(); });
}
