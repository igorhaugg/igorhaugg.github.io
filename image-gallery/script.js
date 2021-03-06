window.onload = function() {

  const widthSize = document.getElementById("body").offsetWidth;
  const row = Math.floor(widthSize/310);

  let counter = 0;
  let limit = row*3;

  var looper = setInterval(function(){
      counter++;
      const element = document.createElement("div");
      const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      element.classList.add("item");
      element.style.backgroundColor = color;
      insertElement(element, color);
    if (counter == limit){
      clearInterval(looper);
    }
  }, 500);

};

function insertElement(element, color){
  const position = Math.floor(Math.random() * 100);
  const image = document.createElement("img");
  const iTag = document.createElement("i");

  image.src = `https://picsum.photos/310/200/?image=${position}`;
  iTag.classList.add("fa");
  iTag.classList.add("fa-camera");
  iTag.style.backgroundColor = color;

  element.appendChild(image);
  element.appendChild(iTag);

  document.getElementById('container').appendChild(element);
}
