<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 transition-all duration-500',
      isHeaderHidden
        ? '-translate-y-[130%] opacity-0'
        : 'translate-y-0 opacity-100',
    ]"
  >
    <div
      class="relative flex items-center w-full gap-2 py-2 pl-5 pr-2 rounded-full max-w-7xl glass-nav"
    >
      <div class="flex items-center gap-2 shrink-0">
        <img class="w-8 h-8" src="/images/Logo.png" alt="Logo" />
      </div>

      <nav class="justify-center flex-1 hidden md:flex">
        <div
          ref="pillRef"
          class="relative flex gap-0.5 p-1 rounded-full bg-black/20 border border-white/5"
        >
          <span
            class="absolute rounded-full top-1 bottom-1 nav-indicator"
            :style="indicatorStyle"
          ></span>
          <a
            v-for="section in sections"
            :key="section.id"
            :ref="(el) => setLinkRef(el, section.id)"
            :href="`#${section.id}`"
            :class="[
              'relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeSection === section.id
                ? 'text-stone-900'
                : 'text-stone-300 hover:text-amber-100/90',
            ]"
            @click="handleMenuClick(section.id, $event)"
            >{{ section.name }}</a
          >
        </div>
      </nav>

      <button
        @click="toggleMenu"
        class="flex items-center justify-center ml-auto text-white rounded-full md:hidden w-9 h-9 glass-chip"
        aria-label="Buka menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
  </header>

  <div
    :class="[
      'md:hidden fixed left-4 right-4 z-40 p-2 rounded-3xl flex flex-col gap-0.5 glass-sheet transition-all duration-300',
      isMenuOpen
        ? 'top-24 opacity-100 pointer-events-auto'
        : 'top-16 opacity-0 pointer-events-none',
    ]"
  >
    <a
      v-for="section in sections"
      :key="'m-' + section.id"
      :href="`#${section.id}`"
      :class="[
        'px-4 py-3.5 rounded-2xl text-sm font-medium',
        activeSection === section.id
          ? 'text-amber-300'
          : 'text-stone-300 hover:text-stone-300',
      ]"
      @click="handleMenuClick(section.id, $event)"
      >{{ section.name }}</a
    >
  </div>

  <svg width="0" height="0" class="absolute">
    <filter id="liquidDistort">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.012 0.018"
        numOctaves="2"
        seed="7"
        result="noise"
      >
        <animate
          attributeName="baseFrequency"
          values="0.012 0.018;0.016 0.014;0.012 0.018"
          dur="14s"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="18"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from "vue";

const isMenuOpen = ref(false);
const activeSection = ref("about");
const lastScrollY = ref(0);
const isHeaderHidden = ref(false);
const scrollThreshold = 50;

const sections = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

const linkRefs = reactive({});
const indicatorStyle = ref({ left: "0px", width: "0px" });

const setLinkRef = (el, id) => {
  if (el) linkRefs[id] = el;
};

const moveIndicator = (id) => {
  const el = linkRefs[id];
  if (!el) return;
  indicatorStyle.value = {
    left: `${el.offsetLeft}px`,
    width: `${el.offsetWidth}px`,
  };
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleMenuClick = (section, e) => {
  e.preventDefault();
  activeSection.value = section;
  isMenuOpen.value = false;

  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  history.pushState(null, "", `#${section}`);
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (Math.abs(currentScrollY - lastScrollY.value) > scrollThreshold) {
    isHeaderHidden.value =
      currentScrollY > lastScrollY.value && currentScrollY > 120;
  }
  lastScrollY.value = currentScrollY;

  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        activeSection.value = section.id;
      }
    }
  });
};

watch(activeSection, (id) => nextTick(() => moveIndicator(id)));

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  nextTick(() => moveIndicator(activeSection.value));
  window.addEventListener("resize", () => moveIndicator(activeSection.value));
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.glass-nav {
  background: rgba(255, 244, 230, 0.05);
  border: 1px solid rgba(255, 224, 190, 0.14);
  backdrop-filter: blur(18px) saturate(160%) url(#liquidDistort);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  box-shadow:
    0 1px 0 0 rgba(255, 236, 212, 0.5) inset,
    0 -1px 0 0 rgba(255, 255, 255, 0.04) inset,
    0 12px 40px -12px rgba(0, 0, 0, 0.6);
}

/* Disamakan dengan palet gradient amber di Hero (.cta-glass) & Projects (.filter-active) */
.nav-indicator {
  background: linear-gradient(135deg, #f0c77a, #d98a3d);
  box-shadow:
    0 4px 16px -4px rgba(232, 163, 61, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.35) inset;
  transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.glass-chip {
  background: rgba(255, 244, 230, 0.08);
  border: 1px solid rgba(255, 224, 190, 0.14);
}
.glass-sheet {
  background: rgba(255, 244, 230, 0.08);
  border: 1px solid rgba(255, 224, 190, 0.14);
  backdrop-filter: blur(22px) saturate(160%);
  -webkit-backdrop-filter: blur(22px) saturate(160%);
  box-shadow:
    0 1px 0 0 rgba(255, 236, 212, 0.5) inset,
    0 20px 50px -14px rgba(0, 0, 0, 0.65);
}
</style>
