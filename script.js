
// GSAP Animations
gsap.from(".headline", { opacity: 0, y: -50, duration: 1 });
gsap.from(".subtext", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".cta-buttons", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

// Parallax Effect
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.querySelector(".hero").style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});

// Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x00f0ff });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
