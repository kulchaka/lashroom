export async function setupScrollTrigger() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".your-element",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
    // Customize your animation here
  });
}