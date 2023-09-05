<template>

<div>
  <div ref="hero" class="absolute top-0 left-0 w-full h-screen z-50 bg-[url('../../assets/img/sky.jpg')] bg-cover bg-no-repeat flex justify-center items-center text-white">
    <h1 class="text-h1 font-title">EXPLORE</h1>

    <div class="w-[100px] h-[100px] absolute bottom-[40%] left-1/2 ml-[-50px] block">
      <div class="bg-white w-[3px] h-0 opacity-0 absolute left-1/2 mt-[10px] line-center">
          <span class="absolute bottom-[-20px] w-[100px] block left-[-50px] text-center text-white uppercase text-[13px]">scroll</span>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 z-10">
      <img src="../../assets/img/big-cloud.svg" alt="Big cloud">
    </div>

    <div class="absolute inset-x-0 top-0 z-0">
      <img src="../../assets/img/piccoli.svg" alt="Piccoli">
    </div>

    <div class="absolute top-[10%] inset-x-0 z-0">
      <img src="../../assets/img/medi.svg" alt="Medi">
    </div>

    <div class="absolute top-[20%] inset-x-0">
      <img width="100%" src="../../assets/img/grandi.svg" alt="Grandi">
    </div>

    <div class="absolute inset-x-0 bottom-0 z-0">
      <img src="../../assets/img/background.png" alt="Background">
    </div>

  </div>

  <div ref="section" class="py-[100vh] px-0 relative">
    <div>
      <HomeHeroSection />
    </div>
  </div>
  
</div>

</template>

<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

const hero = ref();
const section = ref();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(hero.value, {
    yPercent: -100,
    scrollTrigger: {
      trigger: hero.value,
      pin: true,
      scrub: 2,
      pinSpacing: false
    }
  });

  ScrollTrigger.create({
    trigger: section.value,
    start: "top top",
    end: "+=100vh",
    pin: section.value,
    pinSpacing: false
  });
});
</script>

<style>

.line-center {
	animation: vertical_line_growth 4s cubic-bezier(.215, .61, .355, 1) infinite;
}

@keyframes vertical_line_growth {
  0% { height: 0; opacity: 0;}
  20% { height: 0; opacity: 0;}
  40% { height: 0; opacity: 1;}
  60% { height: 30px; opacity: 1;}
  80% { height: 30px; opacity: 1;}
  100% { height: 30px; opacity: 0;}
}
</style>