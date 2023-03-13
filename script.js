let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
// Access CSS background property with JavaScript
let el = document.querySelector('body');
let style = getComputedStyle(el).background;
let colorMatch = style.match(/\((\d+, \d+, \d+\))/g);
let match1 = colorMatch[0];
let match2 = colorMatch[1];
// Convert on load linear gradient colours to hex
let rgbValues1 = match1.match(/\d+/g);
let rgbValues2 = match2.match(/\d+/g);
let nums1 = rgbValues1.map(function(str) {
return parseInt(str); });
let nums2 = rgbValues2.map(function(str) {
    return parseInt(str); });
let r1 = nums1[0], g1 = nums1[1], b1 = nums1[2];
let r2 = nums2[0], g2 = nums2[1], b2 = nums2[2];
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
function rgbToHex(r,g,b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
let hex1 = rgbToHex(r1,g1,b1);
let hex2 = rgbToHex(r2,g2,b2);
// Change HTML colour input values to match CSS background colours
color1.value = hex1;
color2.value = hex2;
// Create random button
let randomBut = document.createElement('button');
randomBut.innerHTML = "?";
body.appendChild(randomBut);
randomBut.addEventListener ("click", function() {
    function randomNum(maxLimit = 256) {
        let num = Math.random()*maxLimit;
        num = Math.floor(num);
        return num;
    }
    let rhex1 = rgbToHex(randomNum(),randomNum(),randomNum());
    let rhex2 = rgbToHex(randomNum(),randomNum(),randomNum());
    color1.value = rhex1;
    color2.value = rhex2;
    randomGradient(color1.value,color2.value);
});

function randomGradient(c1,c2) {
    body.style.background = 'linear-gradient(to right, ' + c1 + ',' + c2 + ')';
    css.textContent = body.style.background + ';';
}

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
    css.textContent = body.style.background + ';';
}

setGradient();
color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);

