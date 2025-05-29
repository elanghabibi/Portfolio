document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.altKey && e.key.toLowerCase() === "k") {
    if (document.getElementById("fireworkCanvas")) return;

    // Canvas
    const canvas = document.createElement("canvas");
    canvas.id = "fireworkCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = 9999;
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const particles = [];

    function randomColor() {
      const colors = [
        "#ff3c3c",
        "#3cffd3",
        "#ffd93c",
        "#3c6cff",
        "#ff3cb1",
        "#6cff3c"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function Firework(x, y) {
      this.x = canvas.width / 2;
      this.y = canvas.height;
      this.targetX = x;
      this.targetY = y;
      this.speed = 5;
      this.angle = Math.atan2(y - this.y, x - this.x);
      this.color = randomColor();
      this.dead = false;
    }

    Firework.prototype.update = function () {
      const vx = Math.cos(this.angle) * this.speed;
      const vy = Math.sin(this.angle) * this.speed;
      this.x += vx;
      this.y += vy;

      if (
        Math.abs(this.x - this.targetX) < 8 &&
        Math.abs(this.y - this.targetY) < 8
      ) {
        this.dead = true;
        for (let i = 0; i < 80; i++) {
          particles.push(new Particle(this.targetX, this.targetY, this.color));
        }
      }
    };

    Firework.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    function Particle(x, y, color) {
      this.x = x;
      this.y = y;
      this.speed = Math.random() * 6 + 2;
      this.angle = Math.random() * Math.PI * 2;
      this.alpha = 1;
      this.color = color;
    }

    Particle.prototype.update = function () {
      const vx = Math.cos(this.angle) * this.speed;
      const vy = Math.sin(this.angle) * this.speed;
      this.x += vx;
      this.y += vy;
      this.speed *= 0.96;
      this.alpha -= 0.015;
    };

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${hexToRgb(this.color)}, ${this.alpha})`;
      ctx.fill();
    };

    function hexToRgb(hex) {
      const bigint = parseInt(hex.replace("#", ""), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r},${g},${b}`;
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((f, i) => {
        f.update();
        f.draw();
        if (f.dead) fireworks.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      if (performance.now() - startTime < 3000) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }

    const startTime = performance.now();
    for (let i = 0; i < 25; i++) {
      const offsetX = Math.random() * canvas.width * 0.6 + canvas.width * 0.2;
      const offsetY = Math.random() * canvas.height * 0.4 + 100;
      fireworks.push(new Firework(offsetX, offsetY));
    }

    animate();
  }
});
