const button = document.getElementById('button');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

button.addEventListener('click', () =>  {
   if (icon1.style.display === 'none') {
      icon1.style.display = 'block';
      icon2.style.display = 'none';
   } else {
      icon1.style.display = 'none';
      icon2.style.display = 'block';
   }
});
