//// FIRST EXAMPLE OF SCROLLING PAGE
// const hikeExp = document.querySelector(".hike-exp");
// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight / 2;

//   console.log(windowHeight);
//   if (hikePos < windowHeight) {
//     hikeExp.style.color = "red";
//   }
// }

//// SECOND EXAMPLE

// const slide = document.querySelector(".hike");

// let options = {
//   treshold: 0.5,
// };

// let observer = new IntersectionObserver(slideAnim, options);

// function slideAnim(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       slide.style.background = "white";
//     }
//   });
// }

// observer.observe(slide);

//MAGIC CURSOR

// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//   triggerElement: ".hike-exp",
//   triggerHook: 0.3,
// })
//   .addIndicators({ colorStart: "white", colorTrigger: "white" })
//   .setClassToggle(".hike", "active")
//   .addTo(controller);

// console.log(controller);
