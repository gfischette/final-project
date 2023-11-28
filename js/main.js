let button = document.querySelector('#button');
let form = document.querySelector('#form');

form.style.display = 'none';

button.onclick = () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
};
   

let descriptions = document.querySelectorAll('.description');
let covers = document.querySelectorAll('.carousel-item');

function hideAll() {
    descriptions.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  hideAll();

  covers.forEach(function(el) {
    el.onclick = (e) => {

      hideAll();

      switch (e.target.getAttribute('id')) {
        case 'heavenimg':
          document.querySelector('#heaven').style.display = 'block';
          break;
        case 'divineimg':
            document.querySelector('#divine').style.display = 'block';
            break;
      }
    }
  });