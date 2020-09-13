'use strict'

{
  const ham = document.getElementById('ham');
  const overlay = document.querySelector('.overlay');

  ham.addEventListener('click', () => {
    ham.classList.toggle('clicked');
    overlay.classList.toggle('clicked');
  });



}