// script.js

document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  const message = document.getElementById('message');

  yesButton.addEventListener('click', function() {
    message.textContent = "Thank You so much for accepting my Date , Will Be Worth it";
    document.body.style.backgroundColor = 'lightgreen';
  });

  noButton.addEventListener('click', function() {
    message.textContent = "Hehe";
    document.body.style.backgroundColor = '#27ae60';
  });
});

const button = document.getElementById('btn');
  button.addEventListener('mouseover', function () {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  });
  button.addEventListener('click', function () {
      alert('you clicked me')
  })  
