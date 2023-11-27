gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray(".item");

// let selector = null;

// const itemArray = [
//   {
//     id: ".one"
//   }
// ]

const tl = gsap.timeline({
  scrollTrigger: {
   trigger: '.container',
   pin: true,
   start: "top top",
   end: "bottom top",
   scrub: true,
  }
})

items.forEach(item => {
  tl.to(item, {
    y: "0%",
    delay: 2,
    duration: 10,
    ease: "power2.out"
  })
});