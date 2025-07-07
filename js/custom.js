const mainBox01 = document.querySelector('.box01');
const coin = document.querySelector('.coin');
const mainBox02 = document.querySelector('.box02');
const cat = document.querySelector('.cat');

gsap.registerPlugin(ScrollTrigger);

function getVw(vw) {
  return window.innerWidth * (vw / 100);
}
/* main */
gsap.to(mainBox01, {
rotation: -90,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".space",
    start: "top top",
    end: "+=1000",
    scrub: true
  }
});
gsap.to(coin, {
y : 600,
x : -600,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".space",
    start: () => `top+=${getVw(25)}`,
    end: () => `top+=${getVw(100)}`,
    scrub: true,
    onLeave: () => {
      gsap.to(coin, {
        opacity: 0,
        duration: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(coin, {
        opacity: 1,
        duration: 0,
      });
    },
  }
});
gsap.to(mainBox02, {
y : '80vw',
rotation : 180,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".space",
    start: () => `top+=${getVw(41)}`,
    end: () => `top+=${getVw(100)}`,
    scrub: true,
    onLeave: () => {
      gsap.to(mainBox02, {
        opacity: 0,
        duration: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(mainBox02, {
        opacity: 1,
        duration: 0,
      });
    },
  }
});
gsap.to(cat, {
  y: '80vw',
  rotation: 60,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".space",
    start: () => `top+=${getVw(31)}`,
    end: () => `top+=${getVw(100)}`,
    scrub: true,
    onLeave: () => {
      gsap.to(cat, {
        opacity: 0,
        duration: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(cat, {
        opacity: 1,
        duration: 0,
      });
    },
  },
});

/* section01 */

ScrollTrigger.create({
  trigger: "main",
  start: () => `${getVw(90)} top`,
  end: () => `${getVw(200)} top`, 
  pin: ".section01-img-wrap",
  scrub: true,
});

//왼쪽
const leftImgTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    start: () => `top+=${getVw(66)}`,
    end: () => `top+=${getVw(156)}`,
    scrub: true,
  }
});
leftImgTimeline.to(".left-img-wrap .left-hand, .left-img-wrap .left", {
  x: 500,
  ease: "power2.out",
  duration: 1
});
leftImgTimeline.to(".left-img-wrap .left-hand", {
  x: 0,
  ease: "power2.out",
  duration: 1
});

// 오른쪽
const rightImgTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    start: () => `top+=${getVw(110)}`,
    end: () => `top+=${getVw(200)}`,
    scrub: true,
  }
});
rightImgTimeline.to(".right-img-wrap .right-hand, .right-img-wrap .right", {
  x: -400,
  ease: "power2.out",
  duration: 1
});
rightImgTimeline.to(".right-img-wrap .right-hand", {
  x: 0,
  ease: "power2.out",
  duration: 1
}); 

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  });

ScrollTrigger.create({
  start: () => `top+=${getVw(270)}`,
  onEnter: () => {
    document.querySelector(".tear").style.display = "block";
  },
  onLeaveBack: () => {
    document.querySelector(".tear").style.display = "none";
  }
});

/* section02 */
gsap.to('.left-ticket', {
x: '-17.7vw',
rotation: 70,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".section02",
    start: () => `top+=${getVw(10.5)}`,
    end: () => `top+=${getVw(52)}`,
    scrub: true
  }
});
gsap.to('.right-ticket', {
x: '17.7vw',
rotation: -70,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".section02",
    start: () => `top+=${getVw(10.5)}`,
    end: () => `top+=${getVw(52)}`,
    scrub: true
  }
});

/* img */
gsap.to('.section02-face01', {
x: '38.5vw',
y: '36.4vw',
rotation: -90,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".section02",
    start: () => `top+=${getVw(10.4)}`,
    end: () => `top+=${getVw(104)}`,
    scrub: true
  }
});
gsap.to('.section02-face02', {
x: '38.5vw',
y: '52vw',
rotation: -200,
ease: "power2.out",
  scrollTrigger: {
    trigger: ".section02",
    start: () => `top+=${getVw(10.4)}`,
    end: () => `top+=${getVw(104)}`,
    scrub: true
  }
});

const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section02",
        start: () => `top+=${getVw(10.4)}`,
        end: () => `top+=${getVw(130)}`,
        scrub: true
      }
    });

    tl.to(".section02-head", {
      x: '10.4vw',
      y: '31.2vw',
      rotate: 90,
      duration: 0.2
    })
    .to(".section02-head", {
      x: '-83vw', 
      y: '78vw',
      duration: 0.8
    });
const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section02",
        start: () => `top+=${getVw(10.4)}`,
        end: () => `top+=${getVw(130)}`,
        scrub: true
      }
    });

    t2.to(".section02-clock", {
      x: '10.4vw',
      y: '26vw',
      duration: 0.2
    })
    .to(".section02-clock", {
      x: '-44.2vw', 
      y: '104vw',
      rotate: 90,
      duration: 0.8
    })

gsap.to('.section02-hand', {
  y: getVw(30),
  scale: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: 'body',
    start: () => getVw(507),
    end: () => getVw(548),
    scrub: true,
  }
});

/* section03 */
ScrollTrigger.create({
  trigger: ".section03",
  start: "top top",
  end: "bottom bottom",
  pin: ".section03-bg",
  scrub: true,
});

// group1 이동
gsap.to('.section03-group1', {
  y: '60vw',
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section03",
    start: "top+=900",
    end: "top+=1700",
    scrub: true,
  }
});
gsap.to('.section03-group2', {
  y: '58vw',
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section03",
    start: "top+=1500",
    end: "top+=2300",
    scrub: true,
  }
});
gsap.to('.section03-group3', {
  y: '38vw',
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section03",
    start: "top+=2200",
    end: "top+=3000",
    scrub: true,
  }
});
gsap.to('.section03-group4', {
  y: '60vw',
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section03",
    start: "top+=2900",
    end: "top+=3700",
    scrub: true,
  }
});
gsap.to('.section03-group5', {
  y: '42vw',
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section03",
    start: "top+=3600",
    end: "top+=4000",
    scrub: true,
  }
});

/* 글자 나오게 ---------- 위치 수정 */
ScrollTrigger.create({
  trigger : '.section03',
  start: "top+=900",
  end : 'top+=1500',
  onEnter: () => {
    document.querySelector(".section03-txt1").style.opacity = 1;
  },
  onLeave: () => {
    document.querySelector(".section03-txt1").style.opacity = 0;
  },
  onEnterBack: () => {
    document.querySelector(".section03-txt1").style.opacity = 1;
  },
  onLeaveBack: () => {
    document.querySelector(".section03-txt1").style.opacity = 0;
  }
});
ScrollTrigger.create({
  trigger : '.section03',
  start: "top+=1700",
  end : 'top+=2200',
  onEnter: () => {
    document.querySelector(".section03-txt2").style.opacity = 1;
  },
  onLeave: () => {
    document.querySelector(".section03-txt2").style.opacity = 0;
  },
  onEnterBack: () => {
    document.querySelector(".section03-txt2").style.opacity = 1;
  },
  onLeaveBack: () => {
    document.querySelector(".section03-txt2").style.opacity = 0;
  }
});
ScrollTrigger.create({
  trigger : '.section03',
  start: "top+=2400", 
  end : 'top+=2900',
  onEnter: () => {
    document.querySelector(".section03-txt3").style.opacity = 1;
  },
  onLeave: () => {
    document.querySelector(".section03-txt3").style.opacity = 0;
  },
  onEnterBack: () => {
    document.querySelector(".section03-txt3").style.opacity = 1;
  },
  onLeaveBack: () => {
    document.querySelector(".section03-txt3").style.opacity = 0;
  }
});
ScrollTrigger.create({
  trigger : '.section03',
  start: "top+=3100",
  end : 'top+=3600',
  onEnter: () => {
    document.querySelector(".section03-txt4").style.opacity = 1;
  },
  onLeave: () => {
    document.querySelector(".section03-txt4").style.opacity = 0;
  },
  onEnterBack: () => {
    document.querySelector(".section03-txt4").style.opacity = 1;
  },
  onLeaveBack: () => {
    document.querySelector(".section03-txt4").style.opacity = 0;
  }
});
ScrollTrigger.create({
  trigger : '.section03',
  start: "top+=3800", 
  end : 'top+=4500',
  onEnter: () => {
    document.querySelector(".section03-txt5").style.opacity = 1;
  },
  onLeave: () => {
    document.querySelector(".section03-txt5").style.opacity = 0;
  },
  onEnterBack: () => {
    document.querySelector(".section03-txt5").style.opacity = 1;
  },
  onLeaveBack: () => {
    document.querySelector(".section03-txt5").style.opacity = 0;
  }
});

/* section04-pin */
ScrollTrigger.create({
  trigger: ".section04",
  start: () => `${getVw(25.5)} top`,
  end: () => `${getVw(200)} top`, 
  pin: ".section04-img-wrap",
  scrub: true
});
/* stuff */
gsap.to('.section04-text02', {
  x: '-160vw',
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section04",
    start: () => `top+=${getVw(19)}`,
    end: () => `top+=${getVw(112.7)}`,
    scrub: true,
  }
});
gsap.to('.curtches01', {
  x: '-180vw',
  rotation: 160,
  ease: 'power.out',
  scrollTrigger:{
    trigger: '.section04',
    start: () => `top+=${getVw(19)}`,
    end: () => `top+=${getVw(117.9)}`,
    scrub: true
  }
})
gsap.to('.curtches02', {
  x: '-180vw',
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(24.2)}`,
    end: () => `top+=${getVw(123.1)}`,
    scrub: true
  }
})
gsap.to('.wheelchair', {
  x: '-180vw',
  rotate: 100,
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(34.6)}`,
    end: () => `top+=${getVw(133.1)}`,
    scrub: true
  }
})
gsap.to('.section04-text03', {
  x: '-180vw',
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(50.2)}`,
    end: () => `top+=${getVw(144)}`,
    scrub: true
  }
})
gsap.to('.bug', {
  x: '-180vw',
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(60.6)}`,
    end: () => `top+=${getVw(154.4)}`,
    scrub: true
  }
})

ScrollTrigger.create({
  trigger : '.section04',
  start: "top+=900", 
  end : 'bottom bottom',
  onEnter: () => {
    document.querySelector(".febric").style.display = "block";
  },
  onLeave: () => {
    document.querySelector(".febric").style.display = "block";
  },
  onLeaveBack: () => {
    document.querySelector('.febric').style.display = 'none';
  },
  onEnterBack: () => {
    document.querySelector('.febric').style.display = 'block';
  }
});
ScrollTrigger.create({
  trigger : '.section04',
  start: "top+=1800", 
  end : 'bottom bottom',
  onEnter: () => {
    document.querySelector(".shoot").style.display = "block";
  },
  onLeave: () => {
    document.querySelector(".shoot").style.display = "block";
  },
  onLeaveBack: () => {
    document.querySelector('.shoot').style.display = 'none';
  },
  onEnterBack: () => {
    document.querySelector('.shoot').style.display = 'block';
  }
});
gsap.to('.section04-text04', {
  y: '-65vw',
  opacity: 0,
  scrollTrigger: {
    trigger: '.section04',
    start: 'top+=2565',
    end: 'top+=3665',
    scrub: true,
  }
})
gsap.to('.fire', {
  y: '-110vw',
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(175.2)}`,
    end: () => `top+=${getVw(258.5)}`,
    scrub: true,
  }
})
gsap.to('.death', {
  y: '8vw',
  scale: 5,
  opacity: 0,
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(185.6)}`,
    end: () => `top+=${getVw(258.6)}`,
    scrub: true,
  }
})
gsap.to('.section04', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.section04',
    start: () => `top+=${getVw(175.2)}`,
    end: () => `top+=${getVw(258.5)}`,
    scrub: true,
  }
})

/* section05 */
gsap.to('.section05-stuff01', {
  x: '63vw',
  scrollTrigger: {
    trigger: '.section05',
    start: () => `top+=${getVw(96.7)}`,
    end: () => `top+=${getVw(144.8)}`,
    scrub: true,
  }
})
gsap.to('.section05-hand', {
  x: '63vw',
  scrollTrigger: {
    trigger: '.section05',
    start: () => `top+=${getVw(96.7)}`,
    end: () => `top+=${getVw(144.8)}`,
    scrub: true,
  }
})

/* stuff */
let stuff1 = document.querySelector('.section05-stuff02');
let stuff2 = document.querySelector('.section05-stuff03');
let stuff3 = document.querySelector('.section05-stuff04');

stuff1.addEventListener('click', ()=>{
  stuff1.style.opacity = 0
})
stuff2.addEventListener('click', ()=>{
  stuff2.style.opacity = 0
})
stuff3.addEventListener('click', ()=>{
  stuff3.style.opacity = 0
})

/* human */
ScrollTrigger.create({
  trigger : '.section05',
  start: "top+=10.4vw", 
  end : 'top+=15.6vw',
  onEnter: () => {
    document.querySelector(".section05-human").style.display = "block";
  },
  onLeave: () => {
    document.querySelector(".section05-human").style.display = "block";
  },
  onLeaveBack: () => {
    document.querySelector('.section05-human').style.display = 'none';
  },
  onEnterBack: () => {
    document.querySelector('.section05-human').style.display = 'block';
  }
});


/* modal */
let modal = document.querySelector('.modal');
let menu = document.querySelector('.menu-wrap');
let close = document.querySelector('.close')
menu.addEventListener('click', ()=>{
  modal.classList.toggle('active')
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
})
close.addEventListener('click', ()=>{
  modal.classList.remove('active')
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
})