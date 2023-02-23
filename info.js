function show_info() {
    var elem = document.getElementById('info');
    elem.style.visibility = 'visible';
    elem.style.position = 'relative';
    var elem2 = document.getElementById('info_button');
    elem2.style.visibility = 'hidden';
    elem2.style.position = 'fixed';
}
function remove_info() {
    var elem = document.getElementById('info');
    elem.style.visibility = 'hidden';
    elem.style.position = 'fixed';
    var elem2 = document.getElementById('info_button');
    elem2.style.visibility = 'visible';
    elem2.style.position = 'relative';
}
function show_render() {
    var elem = document.getElementById('render');
    elem.style.visibility = 'visible';
    elem.style.position = 'relative';
    var elem2 = document.getElementById('info_button');
    elem2.style.visibility = 'hidden';
    elem2.style.position = 'fixed';
}
function remove_render() {
    var elem = document.getElementById('render');
    elem.style.visibility = 'hidden';
    elem.style.position = 'fixed';
    var elem2 = document.getElementById('info_button');
    elem2.style.visibility = 'visible';
    elem2.style.position = 'relative';
}