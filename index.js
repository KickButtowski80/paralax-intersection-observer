const parallaxLayers = document.querySelectorAll(".parallax-layer");


const boxes = document.querySelectorAll('.box');
parallaxLayers.forEach((pl) => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('entry is intersecting', entry);
          pl.classList.add('fade-in');
        }
        else {
          pl.classList.remove('fade-in');
        }
   
          if (entry.target.classList.contains('layer3')) {
            boxes[0].classList.add('move-box-l-r');
            boxes[1].classList.add('move-box-r-l');
          } else {
            boxes[0].classList.remove('move-box-l-r');
            boxes[1].classList.remove('move-box-r-l');
          }

   
      })
    },
    {
      threshold: 0.6
    }
  )

  observer.observe(pl)

})