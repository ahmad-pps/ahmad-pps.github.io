const myHeading = document.querySelector('h2');
myHeading.textContent = 'Learning Techniques';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.png') {
      myImage.setAttribute('src','images/2.png');
    } else {
      myImage.setAttribute('src','images/1.png');
    }
}