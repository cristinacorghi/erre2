<template>
    <div ref="scrollDist"></div>
    <div ref="main">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <mask id="m">
            <g ref="cloud1Group">
                <rect fill="#fff" width="100%" height="100%" y="850" />
                <image href="../assets/img/big-cloud.svg" width="100%" height="100%" y="0"/>
            </g>
            </mask>

            <image ref="sky" href="../assets/img/sky.jpg" width="100%" height="100%"/>
            <image ref="piccoli" href="../assets/img/piccoli.svg" width="100%" />
            
            <image ref="cloud2" href="../assets/img/small-cloud.svg" x="1%" y="17%" width="20%" />
            <image ref="background" href="../assets/img/background.png" width="100%" />
            <image ref="medi" href="../assets/img/medi.svg" width="900" />
            <image ref="grandi" href="../assets/img/grandi.svg" width="100%" />
            
            <text x="30%" y="20%" fill="#fff" class="titolo-hero">STANCO DEI PICCIONI?</text>
            <image ref="arrow" href="../assets/img/arrow-down.svg" width="30" />
            
            <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="30%" y="50%" fill="#162a43" class="titolo-hero">Servizio di allontanamento volatili</text>
            </g>
            
            <rect ref="arrowBtn" width="30" height="100" opacity="0" style="cursor:pointer"/>
        </svg>
    </div>
</template>

<script setup>

import { gsap } from "gsap";
import { onMounted, ref } from 'vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);

const scrollDist = ref()
const main = ref()
const cloud1Group = ref()
const grandi = ref()
const medi = ref()
const sky = ref()
const piccoli = ref()
const cloud2 = ref()
const background = ref()
const arrow = ref()
const arrowBtn = ref()

onMounted(() => {

    gsap.set(scrollDist.value, {
        width: '100%',
        height: '200%'
    })

    gsap.set(main.value, {
        position: 'fixed',
        background: '#fff',
        width: '100%',
        height: '100vh',
        top: 0,
        left: '50%',
        x: '-50%'
    })

    gsap.timeline({
        scrollTrigger: {
            trigger: scrollDist.value,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        }
    })
    .fromTo(sky.value, {y: 0}, {y: -200}, 0)
    .fromTo(cloud1Group.value, {yPercent: 10}, {yPercent: -100})
    .fromTo(medi.value, {yPercent: 50}, {yPercent: -50}, 0)
    .fromTo(cloud2.value, {yPercent: -100}, {yPercent: 0}, 0)
    .fromTo(grandi.value, {yPercent: 50, xPercent: 50}, {yPercent: -50}, 0)
    .fromTo(piccoli.value, {yPercent: 50, xPercent: 50}, {yPercent:-100}, 0)
    .fromTo(background.value, {yPercent: 0}, {yPercent: -100}, 0)

    arrowBtn.value.addEventListener('mouseenter', (e) => {
        gsap.to(arrow.value, {
            y: 10,
            duration: 0.8,
            ease: 'back.inOut(3)',
            overwrite: 'auto'
        });
    });

    arrowBtn.value.addEventListener('mouseleave', (e) => {
        gsap.to(arrow.value, {
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto'
        });
    });

    arrowBtn.value.addEventListener('click', (e) => {
        gsap.to(window, {
            scrollTo: { y: window.innerHeight },
            duration: 1.5,
            ease: 'power1.inOut'
        });
    });
})
</script>