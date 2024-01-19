/* #1 */
let items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
});

/* #2 */
window.addEventListener('load', function() {
  document.body.style.backgroundColor = '#000';
});

/* #3 */
const header = document.querySelector('header');
const footer = document.querySelector('footer');
header.addEventListener('mouseenter', function() {
  footer.style.backgroundColor = 'lightblue';
});
header.addEventListener('mouseleave', function() {
  footer.style.backgroundColor = 'lightgreen';
});

/* #4 */
function changeContent(element) {
  let currentValue = 1;
  const interval = parseInt(element.dataset.interval);
  const limit = parseInt(element.dataset.limit);
  const intervalId = setInterval(() => {
    element.textContent = currentValue;
    if (currentValue >= limit) {
      clearInterval(intervalId);
    } else {
      currentValue++;
    }
  }, interval);
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      changeContent(entry.target);
      observer.unobserve(entry.target);
    }
  });
});
const itemElement = document.querySelector('.some-item');
observer.observe(itemElement);
