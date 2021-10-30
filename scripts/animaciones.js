export function animInicio() {
	let tl = gsap.timeline({delay: 0.3})

	tl.from(".hero-banner-content .banner-img", {duration: 0.5, y: "100", opacity: 0, ease: "ease"})
		.from(".hero-banner-content h1", {duration: 0.5, y: "100", opacity: 0, ease: "ease"}, "-=0.4")
		.from(".hero-banner-content h2", {duration: 0.5, y: "100", opacity: 0, ease: "ease"}, "-=0.4")

	gsap.from(".tecnologias img", {duration: 0.3, y: "100", opacity: 0, stagger: 0.2, ease: "ease"}, "-=0.8")
}

export function animProyectos() {
	// let tl = gsap.timeline({delay: 0.3})

	gsap.from(".proyectos .contenedor-proyectos .titulo-proyectos", {duration: 0.5, y: "-100", opacity: 0, delay:0.3, ease: "ease"})
	gsap.from(".proyectos .contenedor-proyectos .galeria", {duration: 0.3, y: "-100", opacity: 0, delay:0.3, ease: "ease"})
}

export function animContacto() {
  gsap.from('.contacto .contenido-contacto .titulo-contacto', {duration: 0.5, x: "-100", opacity: 0, delay:0.3, ease: "ease"})
  gsap.from('.contacto .contenido-contacto .texto-contacto', {duration: 0.5, x: "100", opacity: 0, delay:0.3, ease: "ease"})
  gsap.from('.contacto .contenido-contacto .formulario form', {duration: 0.5, y: "100", opacity: 0, delay:0.3, ease: "ease"})
  gsap.from('.contacto .contenido-contacto .formulario .info', {duration: 0.5, y: "-100", opacity: 0, delay:0.3, ease: "ease"})
}