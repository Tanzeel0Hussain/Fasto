const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let width = 0;
let height = 0;

function resize() {
  width = canvas.width = window.innerWidth * window.devicePixelRatio;
  height = canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  particles = Array.from(
    { length: Math.min(75, Math.floor(window.innerWidth / 18)) },
    () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.2 + 0.3) * window.devicePixelRatio,
      speed: (Math.random() * 0.14 + 0.04) * window.devicePixelRatio
    })
  );
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(135,155,255,.75)';

  for (const p of particles) {
    p.y -= p.speed;

    if (p.y < 0) {
      p.y = height;
      p.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);

resize();
draw();

document.getElementById('year').textContent = new Date().getFullYear();

const cards = document.querySelectorAll('.feature-card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        450px circle at ${x}px ${y}px,
        rgba(124,92,255,.12),
        rgba(255,255,255,.045) 45%
      )
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});
