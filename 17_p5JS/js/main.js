 const controls = {
     velocityScale: 0.5,
     gravity: 0.0,
 };

 let particles = [];
 
 
 function setup() {
    createCanvas(windowWidth, 1000);

    background(1);
    stroke(255);
    noStroke()
    fill(255, 0, 0);
    strokeWeight(2);
    colorMode(HSB, 255)

    const gui = new dat.GUI();
    gui.add(controls, 'velocityScale', -1, 1);
    gui.add(controls, 'gravity', -1, 1);
    
    // ellipse(300, 300, 200, 200)
    // line(100, 100, 500, 500)
    // fill(0, 255, 0)
    // rect( 400, 100, 200, 200)
    // fill(0, 0, 255)
    // triangle(250, 300, 100, 500, 400, 500)
    // strokeWeight(10)
    // point(50, 50)
    // point(60, 51)
    // point(70, 52)
    // point(80, 53)
    // point(90, 54)
 }

 function draw() {
    background(0);
    // const x = random(windowWidth);
    // const y = random(windowHeight);

    const x = mouseX;
    const y = mouseY;
    // const size = 10;

    const vx = mouseX - pwinMouseX + 4
    const vy = mouseY - pwinMouseY + 4
    console.log(vx)

   const size = Math.abs(vx) + 20;
   const hue = frameCount % 255;
   
    if (keyIsDown(SHIFT)){
        particles.push({x, y, vx, vy, hue, size, life: 1.0})
    }
    updateParticle();
 }

 function updateParticle(){
     const outputParticles = [];
     for(let i = 0; i < particles.length; i++){
         const p = particles[i]
         
         p.x += p.vx * controls.velocityScale
         p.y += p.vy * controls.velocityScale

         p.vy += controls.gravity

         if (p.x >= windowWidth || p.x <= 0){
             p.vx = -p.vx
         }

         if(p.y >= windowHeight || p.y <= 0){
             p.vy = -p.vy
         }

         p.life -= 0.01

         if(p.life > 0 ) {
             outputParticles.push( p )
         }

         fill( p.hue, 255, 255, p.life*255);
         ellipse(p.x, p.y, p.size, p.size)
     }

     particles = outputParticles
 }
