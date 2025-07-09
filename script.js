t  = gsap.timeline();
t.from(".nm", {
    duration: 2.5,    
    y: -100,
    opacity: 5,
    rotate:360,
    // ease: "power2.out"
});
t.from("li",{
    duration:0.5,
    scale:5,
    x:700,
    stagger:0.5,
})
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});