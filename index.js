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
function nextPage2() {
    window.location="../Level 2/index.html";
}
function nextPage3() {
    // NOAEL PUT YOUR LINK TO YOUR MAZE HERE
}
