<template>
  <section id="experience" class="relative w-full px-8 py-20 xl:px-16">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 text-center reveal">
        <span
          class="block mb-2 text-sm font-semibold tracking-wide uppercase text-amber-400"
        >
          Education &amp; Experience
        </span>
        <h2 class="font-serif text-3xl font-semibold text-white sm:text-4xl">
          My Resume
        </h2>
        <p class="max-w-xl mx-auto mt-3 leading-relaxed text-stone-400">
          Explore the diverse milestones and experiences that have shaped my
          journey, each contributing to my growth and expertise.
        </p>
      </div>

      <div>
        <div
          v-for="(item, index) in resumeData"
          :key="index"
          class="flex gap-5 reveal sm:gap-6"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <div class="flex flex-col items-center w-3 shrink-0">
            <span class="mt-2 timeline-dot"></span>
            <span
              v-if="index !== resumeData.length - 1"
              class="timeline-segment"
            ></span>
          </div>

          <div class="flex-1 min-w-0 p-6 mb-12 glass-card rounded-2xl">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
              <span
                class="text-xs text-amber-300/80 font-medium px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-300/15"
              >
                {{ item.date }}
              </span>
            </div>
            <p class="mb-3 text-sm text-stone-400">{{ item.company }}</p>
            <p class="text-sm leading-relaxed text-stone-300/90">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const resumeData = ref([
  {
    title: "Bachelor Degree",
    company: "Padang State Polytechnic | Padang, Indonesia",
    date: "2024 - Present",
    description:
      "As a Software Engineering student, my academic activities included comprehensive studies in system maintenance, system testing, and system design for web and mobile platforms. I gained hands-on experience in utilizing cutting-edge frameworks such as Laravel, Nuxt.js, React, Flutter, and Kotlin for developing robust and scalable applications. Additionally, I honed my skills in database design, ensuring efficient and reliable data management. These experiences not only strengthened my technical expertise but also prepared me to contribute effectively to real-world IT projects with a focus on innovation and problem-solving.",
  },
  {
    title: "IT Software Engineer",
    company: "RSI Yarsi Ibnu Sina Padang Panjang | Padang Panjang, Indonesia",
    date: "Nov 2024 - Feb 2025",
    description:
      "I work as an IT Software Engineer at RSI Yarsi Ibnu Sina Padang Panjang, where I am responsible for designing and maintaining the hospital information system, ensuring smooth operation of the hospital management system, troubleshooting and optimizing APIs, and handling hardware maintenance to support the hospital's technological needs. Utilizing frameworks such as Laravel and CodeIgniter (CI), I develop reliable and scalable solutions to improve operational efficiency and enhance system performance.",
  },
  {
    title: "Internship Web Developer",
    company: "PT. Asli Isoae Solusine | Depok, Indonesia",
    date: "Feb - Jun 2024",
    description:
      "Successfully completed the internship program at PT Asli Isoae Solusine. My teammates and I were able to complete the project of designing a web-based Network E-Ticketing information system at PT CLI using the Nuxt framework and Rest API Laravel.",
  },
  {
    title: "Staff of Communications, Research and Development",
    company: "BEM KM PNP",
    date: "Jan - Des 2023",
    description:
      "I am mandated as a Staff Communication, Research & Development BEM KM PNP who is responsible for helping to support innovation, collaboration, and provide knowledge in the form of information based on research and research results with internal and external parties. I am involved in the committee and am responsible as chief executive, coordinator, and organizer of a BEM KM PNP work program activity.",
  },
  {
    title: "Diploma Degree",
    company: "Padang State Polytechnic | Padang, Indonesia",
    date: "2021 - 2024",
    description:
      "I am a proud graduate of the 67th Graduation Ceremony of Padang State Polytechnic in 2024, where I earned the distinction of being the Best Graduate from the Diploma III (D3) Program in Informatics Management under the Department of Information Technology. With a Cumulative Grade Point Average (GPA) of 3.90, I completed my studies showcasing consistent academic excellence and a strong dedication to my field.",
  },
]);

onMounted(() => {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  items.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background: radial-gradient(circle, #f0c77a, #d98a3d);
  box-shadow:
    0 0 0 4px rgba(232, 163, 61, 0.12),
    0 0 10px 1px rgba(232, 163, 61, 0.5);
}

.timeline-segment {
  flex: 1;
  width: 2px;
  margin: 6px 0;
  background: linear-gradient(
    to bottom,
    rgba(232, 163, 61, 0.5),
    rgba(232, 163, 61, 0.15)
  );
}

.glass-card {
  background: rgba(255, 244, 230, 0.045);
  border: 1px solid rgba(255, 224, 190, 0.12);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  transition:
    border-color 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;
}
.glass-card:hover {
  border-color: rgba(255, 224, 190, 0.28);
  background: rgba(255, 244, 230, 0.07);
  transform: translateY(-3px);
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
