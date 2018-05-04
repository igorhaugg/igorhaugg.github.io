window.onload = start();

function start() {
  detail();
  gallery();
}

function detail() {
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  const details = Array.from(document.querySelectorAll('.item__details'));
  details.forEach((detail)=>(setText(detail, url)));
}

function setText(detail, url) {
  const element = document.createElement("span");

  fetch(url)
   .then(function(req){
     req.json().then(function(data){
       element.textContent = data[0];
       detail.appendChild(element);
     })
   })
   .catch(function(){
     alert("ERROR!")
   });

}

function gallery() {
    const sizes = [
      // ' ',
      'item--medium',
      'item--large'
      // 'item--full'
    ];

    const items = Array.from(document.querySelectorAll('.item'));

    items.forEach((item)=>(setSize(item, sizes)));

};

function setSize(item, sizes) {
  let random = Math.floor(Math.random() * sizes.length + 1);

  // if (random == 2) {
  //   random = Math.floor(Math.random() * sizes.length + 1);
  // }

  if (random !== sizes.length + 1){
    item.classList.add(sizes[random]);
  }

  item.addEventListener('click', function (){
    item.classList.toggle('item--full');
  });

  const position = Math.floor(Math.random() * 500);

  item.setAttribute('style', `background-image: url(https://picsum.photos/1024/768/?image=${position})`);
};
