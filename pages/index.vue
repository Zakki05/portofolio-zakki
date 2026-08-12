<template>
  <div>
    <SectionBanner />
    <SectionExperience />
    <SectionProject />
    <SectionSertification />
    <SectionContact />
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

useHead({
  title: "Ahmad Faris Al Muzakki | Web Developer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio Ahmad Faris Al Muzakki - Web Developer berpengalaman di Laravel, Nuxt.js, dan Machine Learning Enthusiast.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/images/logo.png" }],
});

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 80,
  });

  // refresh setelah semua gambar & konten selesai termuat
  window.addEventListener("load", () => {
    AOS.refreshHard();
  });
});
</script>

<style scoped></style>
