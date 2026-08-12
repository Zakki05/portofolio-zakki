<template>
  <article id="pelatihan" class="relative w-full px-8 py-16 xl:px-16">
    <div class="mb-10 text-center" data-aos="fade-up">
      <span
        class="inline-block text-sm font-semibold tracking-wide uppercase text-amber-400"
      >
        Training & Certifications
      </span>
      <h2 class="mt-2 font-serif text-4xl font-bold text-white">
        Achievements
      </h2>
      <p class="max-w-xl mx-auto mt-3 text-stone-400">
        These certifications highlight expertise and commitment to continuous
        learning.
      </p>
    </div>

    <!-- Certificate List -->
    <ul
      class="mb-12 overflow-hidden glass-card rounded-2xl"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <li
        v-for="(item, index) in certificates"
        :key="index"
        class="flex flex-col justify-between px-6 py-4 transition-colors duration-300 sm:flex-row list-row hover:bg-white/[0.03]"
      >
        <span class="text-sm font-semibold sm:text-base text-amber-100/95">{{
          item.title
        }}</span>
        <strong
          class="mt-1 text-sm font-medium sm:mt-0 sm:text-base text-stone-400"
          >{{ item.date }}</strong
        >
      </li>
    </ul>

    <!-- Certificate Images -->
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="(image, index) in certificateImages"
        :key="index"
        class="relative overflow-hidden transition-all duration-500 group glass-card rounded-2xl"
        data-aos="fade-up"
        :data-aos-delay="(index % 4) * 100"
      >
        <div class="relative overflow-hidden aspect-[4/3]">
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 image-overlay group-hover:opacity-100"
          >
            <button
              @click="openLightbox(image)"
              class="flex items-center justify-center text-white transition-transform border rounded-full w-11 h-11 glass-chip border-white/20 hover:scale-110"
              aria-label="Lihat sertifikat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          </div>
          <div class="absolute inset-0 pointer-events-none image-sheen"></div>
        </div>
        <h3 class="p-4 text-sm font-semibold text-center text-amber-100/95">
          {{ image.title }}
        </h3>
        <div class="card-border-glow"></div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 lightbox-backdrop"
          @click="closeLightbox"
        >
          <Transition name="lightbox-scale" appear>
            <div
              v-if="selectedImage"
              class="relative w-full max-w-2xl overflow-hidden lightbox-panel rounded-2xl"
              @click.stop
            >
              <button
                @click="closeLightbox"
                class="absolute z-10 flex items-center justify-center text-white transition-transform rounded-full w-9 h-9 top-4 right-4 glass-chip hover:scale-110"
                aria-label="Tutup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <img
                :src="selectedImage.src"
                :alt="selectedImage.alt"
                class="object-contain w-full max-h-[75vh] bg-black/20"
              />

              <div class="relative p-6">
                <h3 class="text-lg font-semibold text-amber-100/95">
                  {{ selectedImage.title }}
                </h3>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </article>
</template>

<script setup>
import piagammin2 from "/images/piagammin2.jpeg";
import piagammin1 from "/images/piagammin1.jpeg";
import piagam0 from "/images/piagam0.jpeg";
import piagam1 from "/images/piagam1.png";
import piagam2 from "/images/piagam2.jpg";
import piagam3 from "/images/piagam3.png";
import piagam4 from "/images/piagam4.jpg";
import piagam5 from "/images/piagam5.jpg";
import piagam6 from "/images/piagam6.jpg";
import piagam7 from "/images/piagam7.jpg";
import piagam8 from "/images/piagam8.jpg";

const certificates = [
  {
    title: "Pijak Flash Class x Dicoding Machine Learning",
    date: "Jul 2026",
  },
  {
    title: "Botcamp ID Camp x Dicoding Multi-App Platform",
    date: "Jan 2026",
  },
  {
    title: "Botcamp ID Camp x Dicoding Frontend Web Developer",
    date: "Mar 2025",
  },
  {
    title: "Best Graduate Award Charter of Padang State Polytechnic",
    date: "Sept 2024",
  },
  {
    title: "Internship PT. Asli Isoae Solusine",
    date: "Jun 2024",
  },
  {
    title: "Badan Eksekutif Mahasiswa",
    date: "Des 2023",
  },
  {
    title: "Bootcamp Sotvi Web Developer",
    date: "Sept 2023",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations",
    date: "Jun 2023",
  },
  {
    title: "Database Programming With PL/SQL",
    date: "Jan 2023",
  },
  {
    title: "Database Programming With SQL",
    date: "Nov 2022",
  },
  {
    title: "Sertifikasi BSNP Junior Web Developer",
    date: "Okt 2022",
  },
];

const certificateImages = [
  {
    src: piagammin2,
    alt: "Dokumentasi min 2",
    title: "Pijak Flash Class x Dicoding Machine Learning",
  },
  {
    src: piagammin1,
    alt: "Dokumentasi min 1",
    title: "Botcamp ID Camp x Dicoding Multi-App Platform",
  },
  {
    src: piagam0,
    alt: "Dokumentasi 0",
    title: "Botcamp ID Camp x Dicoding Frontend Web Developer",
  },
  {
    src: piagam1,
    alt: "Dokumentasi 1",
    title: "Best Graduate Award Charter of Padang State Polytechnic ",
  },
  {
    src: piagam2,
    alt: "Dokumentasi 2",
    title: "Internship PT. Asli Isoae Solusine",
  },
  {
    src: piagam3,
    alt: "Dokumentasi 3",
    title: "Badan Eksekutif Mahasiswa",
  },
  {
    src: piagam4,
    alt: "Dokumentasi 4",
    title: "Oracle Cloud Infrastructure Foundations I",
  },
  {
    src: piagam5,
    alt: "Dokumentasi 5",
    title: "Oracle Cloud Infrastructure Foundations II",
  },
  {
    src: piagam6,
    alt: "Dokumentasi 6",
    title: "Database Programming With PL/SQL",
  },
  {
    src: piagam7,
    alt: "Dokumentasi 7",
    title: "Database Programming With SQL",
  },
  {
    src: piagam8,
    alt: "Dokumentasi 8",
    title: "BNSP Junior Web Developer",
  },
];

const selectedImage = ref(null);

const openLightbox = (image) => {
  selectedImage.value = image;
};

const closeLightbox = () => {
  selectedImage.value = null;
};

const handleKeydown = (e) => {
  if (e.key === "Escape") closeLightbox();
};

watch(selectedImage, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.glass-chip {
  background: rgba(255, 244, 230, 0.06);
  border: 1px solid rgba(255, 224, 190, 0.16);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
}

.glass-card {
  background: rgba(255, 244, 230, 0.05);
  border: 1px solid rgba(255, 224, 190, 0.14);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow:
    0 8px 32px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}

.glass-card:hover {
  border-color: rgba(255, 224, 190, 0.28);
  box-shadow:
    0 16px 36px -14px rgba(232, 163, 61, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
}

.list-row {
  border-bottom: 1px solid rgba(255, 224, 190, 0.1);
}
.list-row:last-child {
  border-bottom: none;
}

.card-border-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(240, 199, 122, 0.12),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}
.group:hover .card-border-glow {
  opacity: 1;
}

.image-overlay {
  background: linear-gradient(
    180deg,
    rgba(18, 16, 12, 0.2) 0%,
    rgba(18, 16, 12, 0.65) 100%
  );
  backdrop-filter: blur(2px);
}

.image-sheen {
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.12) 0%,
    transparent 40%
  );
}

/* Lightbox */
.lightbox-backdrop {
  background: rgba(10, 8, 6, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.lightbox-panel {
  background: rgba(30, 24, 18, 0.55);
  border: 1px solid rgba(255, 224, 190, 0.18);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  box-shadow:
    0 24px 60px -16px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.lightbox-scale-enter-active {
  transition:
    opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.lightbox-scale-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.lightbox-scale-enter-from {
  opacity: 0;
  transform: scale(0.92) translateY(12px);
}
.lightbox-scale-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(8px);
}
</style>
