const openBtn = document.getElementById("openMenu");
    const closeBtn = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    openBtn.addEventListener("click", () => {
      menu.classList.add("show");
      overlay.classList.add("show");
    });
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    function closeMenu() {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  
  
  /* MATRIX CANVAS */
(function(){
  const c=document.getElementById('matrixCanvas'),ctx=c.getContext('2d');
  let w=c.width=innerWidth,h=c.height=innerHeight,cols=Math.floor(w/16),ypos=Array(cols).fill(0);
  function matrixRender(){
    ctx.fillStyle='rgba(0,0,0,0.06)';ctx.fillRect(0,0,w,h);
    ctx.fillStyle='rgba(0,255,150,0.65)';ctx.font='14px monospace';
    for(let i=0;i<ypos.length;i++){
      const text=String.fromCharCode(0x30A0+Math.random()*96);ctx.fillText(text,i*16,ypos[i]*16);
      if(ypos[i]*16>h&&Math.random()>0.975)ypos[i]=0;ypos[i]+=1;
    }
  }
  function loop(){matrixRender();requestAnimationFrame(loop);}
  loop();
  addEventListener('resize',()=>{w=c.width=innerWidth;h=c.height=innerHeight;const newCols=Math.floor(w/16);ypos.length=newCols;for(let i=0;i<newCols;i++)ypos[i]=ypos[i]||Math.random()*h/16;});
})();








// ==== main.html එකට යන එන බටන් දෙක
// Navigate from index.html → main.html
function goToMain() {
  // main.html එකට යන්න
  window.location.assign('cybervsethical.html');
}

function goBack() {
      // JS only back
      if (window.history.length > 1) {
        window.history.back(); // browser history exist
      } else {
        alert("No previous page in history"); // fallback
      }
    }
    
    
 // Freee.html ekt js
// Navigate from index.html → free.html
function goTofree() {
  window.location.assign('free.html'); // JS only navigation
}

// Membership.html ekt js
// Navigate from index.html → Membership.html
function goTomember() {
  window.location.assign('Membership.html'); // JS only navigation
}





//======= text box css and ja ======
const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // close all others
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });

        // toggle current one
        item.classList.toggle('active');
      });
    });