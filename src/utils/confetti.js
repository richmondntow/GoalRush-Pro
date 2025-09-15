// Simple canvas confetti utility (no external deps)
// usage: import { launchConfetti } from '../utils/confetti'
export function launchConfetti() {
  const id = 'confetti-canvas';
  let canvas = document.getElementById(id);
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = id;
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  canvas.classList.add('active');

  const colors = ['#57D084', '#3AA0FF', '#FFD166', '#FF7AB6'];
  const pieces = [];
  const num = 80;
  for(let i=0;i<num;i++){
    pieces.push({
      x: Math.random()*canvas.width,
      y: -Math.random()*canvas.height,
      vx: (Math.random()-0.5)*6,
      vy: Math.random()*6 + 2,
      size: Math.random()*8 + 4,
      color: colors[Math.floor(Math.random()*colors.length)],
      rot: Math.random()*360,
      vrot: (Math.random()-0.5)*8
    });
  }

  let t = 0;
  function draw(){
    t += 1;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let p of pieces){
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12; // gravity
      p.rot += p.vrot;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size*0.6);
      ctx.restore();
    }
    // remove pieces off screen after some time
    if(t < 220) requestAnimationFrame(draw);
    else {
      // fade out then remove
      canvas.classList.remove('active');
      setTimeout(()=>{ try{ window.removeEventListener('resize', resize); canvas.remove(); }catch(e){} }, 500);
    }
  }
  requestAnimationFrame(draw);
}
