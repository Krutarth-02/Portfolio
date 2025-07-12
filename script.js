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
    scale:2,
    y:-100,
    stagger:0.5,
});
t.from(".card", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2
});
