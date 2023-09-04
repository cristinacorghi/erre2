<template>
  <!-- <div ref="scrollDist"></div>
  <div ref="main">

    <svg viewBox="0 0 1900 1000" xmlns="http://www.w3.org/2000/svg">
      <mask id="m">
        <g ref="big_cloud">
          <rect fill="#fff" width="100%" height="100vh" y="850" />
          <image y="15%" href="../../assets/img/big-cloud.svg" width="100%" />
        </g>
      </mask>

        <image ref="sky" href="../../assets/img/sky.jpg" width="100%" />
        <image ref="piccoli" href="../../assets/img/piccoli.svg" width="100%" x="40%" />

        <image ref="small_cloud" href="../../assets/img/small-cloud.svg" x="1%" y="17%" width="20%"/>
        <image ref="background" href="../../assets/img/background.png" width="100%" />
        <image ref="medi" href="../../assets/img/medi.svg" width="900" x="20%" />
        <image ref="grandi" href="../../assets/img/grandi.svg" width="100%" x="35%" />

        <text fill="#fff" x="35%" y="50%">EXPLORE</text>
        <image ref="arrow" x="47%" y="52%" href="../../assets/img/arrow-down.svg" width="30" />

        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />
          <text x="35%" y="50%" fill="#162a43">FURTHER</text>
        </g>

        <rect ref="arrowBtn" width="30" height="100" opacity="0" x="47%" y="52%" style="cursor: pointer" />
    </svg>
  </div> -->

  <div class="relative w-full h-screen bg-[url('../../assets/img/sky.jpg')] bg-cover bg-no-repeat">

    <div class="absolute top-1/2 left-[40%]">
      <h1 class="text-h1 font-title text-white">EXPLORE</h1>
      <img src="../../assets/img/arrow-down.svg" alt="Arrow down white">
    </div>

    <div class="absolute inset-x-0 bottom-0 z-10">
      <img src="../../assets/img/big-cloud.svg" alt="Big cloud">
    </div>

    <div class="absolute inset-x-0 top-0 z-0">
      <img src="../../assets/img/piccoli.svg" alt="Piccoli">
    </div>

    <div class="absolute inset-0 z-0">
      <img src="../../assets/img/medi.svg" alt="Medi">
      <img src="../../assets/img/grandi.svg" alt="Grandi">
    </div>

    <div class="absolute inset-x-0 bottom-0 z-0">
      <img src="../../assets/img/background.png" alt="Background">
    </div>
  </div>
</template>

<script setup>
// import { gsap } from 'gsap';
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import { onMounted, ref } from 'vue';

// const arrowBtn = ref();
// const scrollDist = ref();
// const main = ref();
// const medi = ref ();
// const sky = ref();
// const piccoli = ref();
// const small_cloud = ref();
// const background = ref();
// const grandi = ref();
// const arrow = ref();
// const big_cloud = ref();

// onMounted(() => {
//   gsap.registerPlugin(ScrollToPlugin);

//   gsap.set(main.value, {
//     position: 'fixed',
//     background: '#fff',
//     width: '100%',
//     height: '100vh',
//     top: 0,
//     left: '50%',
//     x: '-50%',
//   });

//   gsap.set(scrollDist.value, { width: '100%', height: '100vh' });

//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: scrollDist.value,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1,
//       },
//     })
//     .fromTo(sky.value, { y: 0 }, { y: -1500 }, 0)
//     .fromTo(medi.value, { y: 0 }, { y: -1000 }, 0)
//     .fromTo(big_cloud.value, { y: 0 }, { y: -1000 }, 0)
//     .fromTo(grandi.value, { y: 0 }, { y: -1000 }, 0)
//     .fromTo(small_cloud.value, { y: 0 }, { y: -500 }, 0)
//     .fromTo(piccoli.value, { y: 0 }, { y: -1000 }, 0)
//     .fromTo(background.value, { y: 0 }, { y: -1000 }, 0);

//   arrowBtn.value.addEventListener('mouseenter', (e) => {
//     gsap.to(arrow.value, {
//       y: 10,
//       duration: 0.8,
//       ease: 'back.inOut(3)',
//       overwrite: 'auto',
//     });
//   });

//   arrowBtn.value.addEventListener('mouseleave', (e) => {
//     gsap.to(arrow.value, {
//       y: 0,
//       duration: 0.5,
//       ease: 'power3.out',
//       overwrite: 'auto',
//     });
//   });

//   arrowBtn.value.addEventListener('click', (e) => {
//     gsap.to(window, {
//       scrollTo: innerHeight,
//       duration: 1.5,
//       ease: 'power1.inOut',
//     });
//   });
// });
</script>