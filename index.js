var lister = [37, 38, 39, 40];
var seconds
var minutes
// alert('hi')
$(document).keydown(function(e) {
    alert(e.which)
    if (lister.includes(e.which)) {
        alert("hi");
    }
});
function nextPage() {
    window.location="rules.html";
}
function nextPage1() {
    window.location="./Level 1/level1.html";
}
