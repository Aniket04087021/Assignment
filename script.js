
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    particlesContainer.appendChild(particle);
    
    
    gsap.to(particle, {
        x: `${(Math.random() - 0.5) * 200}`,
        y: `${(Math.random() - 0.5) * 200}`,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}


gsap.from(".title", { 
    y: -100, 
    opacity: 0, 
    duration: 1.5, 
    ease: "power2.out"
});

gsap.from(".subtitle", { 
    y: 50, 
    opacity: 0, 
    duration: 1.5, 
    delay: 0.5 
});

gsap.from(".cta-button", { 
    scale: 0.8, 
    opacity: 0, 
    duration: 1.5, 
    delay: 1.2 
});


gsap.from(".cards-container .card", {
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1.5,
    delay: 1.5
});


document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX / window.innerWidth - 0.5) * 30;
    const moveY = (clientY / window.innerHeight - 0.5) * 30;
    
    gsap.to(".background-layer", {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power1.out"
    });
    
    
    gsap.to(".card", {
        rotateY: moveX * 0.05,
        rotateX: -moveY * 0.05,
        duration: 0.5,
        ease: "power1.out"
    });
});