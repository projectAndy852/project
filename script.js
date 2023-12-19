const optionNao = document.getElementById('optionNao');

optionNao.addEventListener('mouseenter', () => {
  const randomLeft = Math.random() * (window.innerWidth - 200);
  const randomTop = Math.random() * (window.innerHeight - 100);
  
  optionNao.style.position = 'absolute';
  optionNao.style.left = `${randomLeft}px`;
  optionNao.style.top = `${randomTop}px`;
});

optionNao.addEventListener('mouseleave', () => {
  optionNao.style.position = 'initial';
});
