function toggleMenu(){
    const menu = document.querySelector(".links");
    const icon = document.querySelector(".hamburg-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('.steplist').forEach(steplist => {
    steplist.addEventListener('click', function(event) {
      if (event.target.nodeName !== 'LI') return;
      const items = event.target.closest('.steplist').querySelectorAll('li');
      for (const item of items) {
        item.classList.toggle('active', item === event.target);
      }
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
