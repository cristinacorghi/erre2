<template>
  <div class="scrollDist"></div>
  <div class="main">

    <svg
      viewBox="0 0 1900 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
    <mask id="m">
      <g class="medi">
        <rect fill="#fff" width="100%" height="100vh" y="850" />
        <image y="15%" href="../assets/img/big-cloud.svg" width="1900" />
      </g>
    </mask>

      <image class="sky" href="../assets/img/sky.jpg" width="1900" />
      <image
        class="piccoli"
        href="../assets/img/piccoli.svg"
        width="1000"
        x="40%"
      />

      <image
        class="small-cloud"
        href="../assets/img/small-cloud.svg"
        x="1%"
        y="17%"
        width="20%"
      />
      <image
        class="background"
        href="../assets/img/background.png"
        width="1900"
      />
      <image class="medi" href="../assets/img/medi.svg" width="900" x="20%" />
      <image
        class="grandi"
        href="../assets/img/grandi.svg"
        width="1000"
        x="35%"
      />

      <text fill="#fff" x="35%" y="50%">EXPLORE</text>
      <image
        class="arrow"
        x="47%"
        y="52%"
        href="../assets/img/arrow-down.svg"
        width="30"
      />

      <g mask="url(#m)">
        <rect fill="#fff" width="100%" height="100%" />
        <text x="35%" y="50%" fill="#162a43">FURTHER</text>
      </g>

      <rect
        ref="arrowBtn"
        width="30"
        height="100"
        opacity="0"
        x="47%"
        y="52%"
        style="cursor: pointer"
      />
    </svg>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { onMounted, ref } from 'vue';

const arrowBtn = ref();

onMounted(() => {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.set('.main', {
    position: 'fixed',
    background: '#fff',
    width: '100%',
    height: '100vh',
    top: 0,
    left: '50%',
    x: '-50%',
  });
  gsap.set('.scrollDist', { width: '100%', height: '100vh' });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.scrollDist',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
    .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
    .fromTo('.medi', { y: 100 }, { y: -10 }, 0)
    .fromTo('.small-cloud', { y: -150 }, { y: -500 }, 0)
    .fromTo('.piccoli', { y: -10 }, { y: -100 }, 0)
    .fromTo('.background', { y: -50 }, { y: -600 }, 0);

  arrowBtn.value.addEventListener('mouseenter', (e) => {
    gsap.to('.arrow', {
      y: 10,
      duration: 0.8,
      ease: 'back.inOut(3)',
      overwrite: 'auto',
    });
  });
  arrowBtn.value.addEventListener('mouseleave', (e) => {
    gsap.to('.arrow', {
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  });
  arrowBtn.value.addEventListener('click', (e) => {
    gsap.to(window, {
      scrollTo: innerHeight,
      duration: 1.5,
      ease: 'power1.inOut',
    });
  });
});
</script>