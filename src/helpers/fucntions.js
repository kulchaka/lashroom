
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
  const cards = gsap.utils.toArray(".card");
  const spacer = 20; const minScale = 0.8; const distributor = gsap.utils.distribute({
    base:
      minScale, amount: 0.2
  }); cards.forEach((card, index) => {
    const scaleVal = distributor(index,
      cards[index], cards); const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card, start: `top
  top`, scrub: true, markers: true, invalidateOnRefresh: true
        }, ease: "none", scale: scaleVal
      });
    ScrollTrigger.create({
      trigger: card, start: `top-=${index * spacer} top`, endTrigger: '.cards',
      end: `bottom top+=${200 + (cards.length * spacer)}`, pin: true, pinSpacing: false, markers: true,
      id: 'pin', invalidateOnRefresh: true,
    });
  });
});