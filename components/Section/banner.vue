<template>
  <section
    id="about"
    class="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center xl:px-16 px-8 pt-8 pb-16"
  >
    <div
      class="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto max-w-7xl md:flex-row md:gap-12"
    >
      <div
        class="flex flex-col items-center flex-1 gap-5 text-center text-white md:max-w-lg md:text-left md:items-start"
      >
        <div class="flex flex-col gap-1" data-aos="fade-up" data-aos-delay="0">
          <h2
            class="font-serif text-xl font-medium sm:text-2xl text-amber-100/70"
          >
            Hello, my name is
          </h2>
          <h1
            class="font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl name-gradient"
          >
            Ahmad Faris <br class="hidden md:block" />
            Al Muzakki
          </h1>
        </div>

        <h3
          class="text-lg font-medium capitalize sm:text-xl text-amber-300/90"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          I'm <span class="typing"></span>
        </h3>

        <p
          class="max-w-md leading-relaxed text-stone-400"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Experienced Web Developer with 2+ years of expertise in Laravel and
          Nuxt.js, with a strong interest in Machine Learning.
        </p>

        <div
          class="flex flex-wrap items-center justify-center gap-3 mt-2 md:justify-start"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <a
            href="https://www.linkedin.com/in/ahmad-faris-al-muzakki-02ab66295/"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-glass px-6 py-2.5 rounded-full text-sm font-semibold text-stone-200"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            class="cta-ghost px-6 py-2.5 rounded-full text-sm font-medium text-stone-200"
          >
            View projects
          </a>
          <a
            href="/files/CV-EN.pdf"
            download
            class="cta-ghost px-6 py-2.5 rounded-full text-sm font-medium text-stone-200"
          >
            Download CV
          </a>
        </div>
      </div>

      <div class="shrink-0" data-aos="fade-left" data-aos-delay="200">
        <div
          class="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px]"
        >
          <div class="photo-ring-glow"></div>
          <div class="photo-ring"></div>
          <div class="photo-frame">
            <img
              class="object-cover w-full h-full rounded-full"
              src="/images/Foto.jpg"
              alt="Foto profil Ahmad Faris Al Muzakki"
            />
            <div class="photo-sheen"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  const options = {
    strings: [
      "",
      "Web Developer,",
      "Fullstack Developer,",
      "Frontend Developer,",
      "UI/UX Designer.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  };

  new Typed(".typing", options);
});
</script>

<style scoped>
.glass-chip {
  background: rgba(255, 244, 230, 0.06);
  border: 1px solid rgba(255, 224, 190, 0.16);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
}

.name-gradient {
  background: linear-gradient(135deg, #f5efe6 20%, #f0b25a 60%, #d98a3d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cta-glass {
  color: #12100c;
  background: linear-gradient(135deg, #f0c77a, #d98a3d);
  box-shadow:
    0 8px 24px -8px rgba(232, 163, 61, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.35) inset;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.cta-glass:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 28px -8px rgba(232, 163, 61, 0.65),
    0 0 0 1px rgba(255, 255, 255, 0.4) inset;
}

.cta-ghost {
  background: rgba(255, 244, 230, 0.04);
  border: 1px solid rgba(255, 224, 190, 0.16);
  backdrop-filter: blur(10px);
  transition:
    border-color 0.25s ease,
    color 0.25s ease;
}
.cta-ghost:hover {
  border-color: rgba(255, 224, 190, 0.4);
  color: #f5efe6;
}

.photo-ring-glow {
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #e8a33d,
    #c2703d,
    transparent 40%,
    #e8a33d
  );
  filter: blur(28px);
  opacity: 0.55;
  animation: spin 16s linear infinite;
}

.photo-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #f0c77a,
    #d98a3d,
    transparent 45%,
    #f0c77a
  );
  animation: spin 16s linear infinite;
  padding: 3px;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.photo-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  outline: 1px solid rgba(255, 224, 190, 0.25);
  outline-offset: 4px;
}

.photo-sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.22) 0%,
    transparent 35%
  );
  pointer-events: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.hero-in {
  opacity: 0;
  transform: translateY(14px);
  animation: heroIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.delay-0 {
  animation-delay: 0s;
}
.delay-1 {
  animation-delay: 0.08s;
}
.delay-2 {
  animation-delay: 0.16s;
}
.delay-3 {
  animation-delay: 0.24s;
}
.delay-4 {
  animation-delay: 0.32s;
}
.delay-5 {
  animation-delay: 0.4s;
}

@keyframes heroIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .photo-ring-glow,
  .photo-ring {
    animation: none;
  }
  .hero-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
