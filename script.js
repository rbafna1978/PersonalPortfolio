document.getElementById('hamburger').addEventListener('click', function(){
  document.querySelector('.nav-links').classList.toggle('show');
});

document.querySelectorAll('.toggle-details').forEach(function(btn){
  btn.addEventListener('click', function(){
    var details = this.nextElementSibling;
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('.nav-links').classList.remove('show');
  });
});
