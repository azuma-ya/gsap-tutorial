document.addEventListener("mousemove", (e) => {
	const mouse = { x: e.clientX, y: e.clientY };

	gsap.to(".circle", { ...mouse, stagger: -0.1 });
	gsap.set(".cursor", { ...mouse });
});
