// header>logo & nav-links
gsap.from(".logo, .nav-links", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.5,
  delay: .5
});

// hero>h2
gsap.from(".hero h2", {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 1.5
});

// hero-top, detail-top, detail-container
gsap.from(".hero-top", {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.5,
  delay: 2
});
gsap.from(".detail-top", {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.5,
  delay: 2
});
gsap.from(".detail-container", {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.5,
  delay: 2
});



// beer img
gsap.from(".beer img", {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 3
});
