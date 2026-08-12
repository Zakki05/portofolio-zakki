<template>
  <section id="projects" class="relative w-full px-8 py-16 xl:px-16">
    <div class="mb-10 text-center" data-aos="fade-up">
      <span
        class="inline-block text-sm font-semibold tracking-wide uppercase text-amber-400"
      >
        Creative Portfolios
      </span>
      <h2 class="mt-2 font-serif text-4xl font-bold text-white">
        Recent Works
      </h2>
      <p class="max-w-xl mx-auto mt-3 text-stone-400">
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </p>
    </div>

    <!-- Filter Buttons -->
    <div
      class="flex justify-center mb-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div
        class="inline-flex flex-wrap justify-center gap-3 p-1.5 glass-chip rounded-full"
      >
        <button
          v-for="filter in filters"
          :key="filter.name"
          @click="handleFilterChange(filter.value)"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeFilter === filter.value
              ? 'filter-active text-stone-900'
              : 'text-stone-300 hover:text-amber-100/90',
          ]"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>

    <!-- Project Cards -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(item, index) in paginatedPortfolio"
        :key="item.title"
        class="relative flex flex-col overflow-hidden transition-all duration-500 group glass-card rounded-2xl"
        data-aos="fade-up"
        :data-aos-delay="(index % itemsPerPage) * 100"
      >
        <div class="relative overflow-hidden aspect-video rounded-t-2xl">
          <img
            :src="item.image"
            :alt="item.title"
            class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 image-overlay group-hover:opacity-100"
          >
            <button
              @click="openLightbox(item)"
              class="flex items-center justify-center w-12 h-12 text-white transition-transform border rounded-full glass-chip border-white/20 hover:scale-110"
              aria-label="Lihat gambar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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

        <div class="relative flex flex-col flex-1 p-6">
          <h3 class="text-lg font-semibold leading-snug text-amber-100/95">
            {{ item.title }}
          </h3>

          <p
            :class="[
              'mt-2 text-sm leading-relaxed text-stone-400 transition-all duration-300',
              expandedItems.has(item.title) ? '' : 'line-clamp-3',
            ]"
          >
            {{ item.description }}
          </p>

          <button
            @click="toggleExpand(item.title)"
            class="self-start mt-2 text-xs font-semibold tracking-wide uppercase read-more-btn text-amber-300/90 hover:text-amber-200"
          >
            {{ expandedItems.has(item.title) ? "Show less" : "Read more" }}
          </button>

          <!-- Language Chips -->
          <div
            v-if="item.language && item.language.length"
            class="flex flex-wrap gap-2 mt-4"
          >
            <div
              v-for="lang in item.language"
              :key="lang"
              class="flex items-center gap-1.5 px-2.5 py-1 lang-chip rounded-full"
            >
              <img
                :src="getLanguageLogo(lang)"
                :alt="lang"
                class="object-contain w-4 h-4"
              />
              <span class="text-xs font-medium text-stone-300">{{ lang }}</span>
            </div>
          </div>
        </div>

        <div class="card-border-glow"></div>
      </div>
    </div>

    <!-- Pagination -->
    <div
      v-if="totalPages > 1"
      class="flex justify-center mt-12"
      data-aos="fade-up"
    >
      <div
        class="inline-flex items-center gap-1.5 p-1.5 glass-chip rounded-full"
      >
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="flex items-center justify-center text-sm rounded-full w-9 h-9 page-btn text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-100/90"
          aria-label="Halaman sebelumnya"
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
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-9 h-9 rounded-full text-sm font-medium transition-all duration-300',
            currentPage === page
              ? 'filter-active text-stone-900'
              : 'text-stone-300 hover:text-amber-100/90',
          ]"
        >
          {{ page }}
        </button>

        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="flex items-center justify-center text-sm rounded-full w-9 h-9 page-btn text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-100/90"
          aria-label="Halaman berikutnya"
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
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 lightbox-backdrop"
          @click="closeLightbox"
        >
          <Transition name="lightbox-scale" appear>
            <div
              v-if="selectedProject"
              class="relative w-full max-w-3xl overflow-hidden lightbox-panel rounded-2xl"
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
                :src="selectedProject.image"
                :alt="selectedProject.title"
                class="object-contain w-full max-h-[70vh] bg-black/20"
              />

              <div class="relative p-6">
                <h3 class="text-lg font-semibold text-amber-100/95">
                  {{ selectedProject.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-stone-400">
                  {{ selectedProject.description }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import soopercutImage from "/images/soopercut.png";
import auihImage from "/images/auih.png";
import onbengImage from "/images/onbeng.png";
import mini1 from "/images/mini1.png";
import mini2 from "/images/mini2.png";
import mini3 from "/images/mini3.png";
import zakkipedia from "/images/zakkipedia.png";
import palas from "/images/palas.png";
import eticketing from "/images/eticketing.png";
import petshop from "/images/petshop.png";
import wedding from "/images/wedding.png";
import dryEyeDetection from "/images/dry.png";

const filters = ref([
  { name: "All", value: "*" },
  { name: "Web Apps", value: "web" },
  { name: "UI/UX", value: "ui/ux" },
  { name: "Mini Project", value: "mini" },
]);

const activeFilter = ref("*");
const currentPage = ref(1);
const itemsPerPage = 6;
const expandedItems = reactive(new Set());
const selectedProject = ref(null);

const portfolio = ref([
  {
    image: dryEyeDetection,
    title: "Dry Eye Detection System using CNN and Random Forest",
    description:
      "A web-based system developed as my undergraduate thesis to predict dry eye syndrome in smartphone users based on eye image and structure data. The system combines Convolutional Neural Network (CNN) for image feature extraction and Random Forest for classification, served through a FastAPI machine learning service, with Laravel as the backend API and Nuxt as the frontend interface.",
    category: ["web"],
    language: ["Nuxt", "Laravel", "FastAPI", "Python", "CNN", "Random Forest"],
  },
  {
    image: wedding,
    title: "Wedding Invitation Website",
    description:
      "A digital wedding invitation website built with WordPress and the WeddingPres theme, allowing couples to share their wedding details, love story, event schedule, and location with guests in an elegant and easily accessible online format.",
    category: ["web"],
    language: ["WordPress", "WeddingPres"],
  },
  {
    image: palas,
    title: "Company Profile Puskesmas Palas Bandar Lampung",
    description:
      "The official company profile website for Puskesmas Palas, a primary healthcare center in Lampung Selatan, Indonesia. Developed using CodeIgniter, the website presents the center's profile, health services, latest articles, activity gallery, and location to make accurate healthcare information easily accessible to the public.",
    category: ["web"],
    language: ["CodeIgniter", "PHP", "Bootstrap", "MySQL"],
  },
  {
    image: zakkipedia,
    title: "ZakkiPedia Apps E-Commerce Information System",
    description:
      "An e-commerce information system developed as a coursework to simplify the management of products, transactions, and customers apparel shopping experience. Designed with a user-friendly interface, the system provides practical solutions to improve operational efficiency and customer satisfaction.",
    category: ["web"],
    language: ["Vue", "Nuxt", "vite", "Tailwind", "PHP", "Laravel", "MySQL"],
  },
  {
    image: petshop,
    title: "R4 Petshop & Clinic Inventory and Service Information System",
    description:
      "An inventory and service management information system for petshops and clinics developed as a final project. The system simplifies the management of services, product stock, recording sales, purchases, losses, and expenses as well as improving operational efficiency and customer experience.",
    category: ["web"],
    language: ["Vue", "Nuxt", "vite", "Tailwind", "PHP", "Laravel", "MySQL"],
  },
  {
    image: eticketing,
    title: "Network E-Ticketing Service Information System",
    description:
      "In my internship project at PT Asli Isoae Solusine, my teammates and I developed a website-based network e-ticketing information system that enables fast and easy online ticket booking, efficient transaction management, and provides a better user experience with easier and more secure access.",
    category: ["web"],
    language: ["Vue", "Nuxt", "vite", "Tailwind", "PHP", "Laravel", "MySQL"],
  },
  {
    image: soopercutImage,
    title: "Web Apps Soopercuts Barber Service Information System",
    description:
      "A comprehensive barber service management system developed using the Laravel framework and MySQL database to streamline operations, enhance customer experience, and efficiently manage services and appointments.",
    category: ["web"],
    language: ["HTML", "CSS", "Javascript", "PHP", "Laravel", "MySQL"],
  },
  {
    image: auihImage,
    title: "Cashier Apps System at AUIH+ using Odoo Enterprise",
    description:
      "The cashier system at AUIH+ leverages Odoo and Python to streamline transactions, manage stock, integrate payments, and provide real-time reports, ensuring efficiency, accuracy, and seamless user experience.",
    category: ["web"],
    language: ["Python", "Odoo"],
  },
  {
    image: onbengImage,
    title: "UI/UX Online Bengkel (OnBeng) Apps",
    description:
      "The UI/UX design for OnBeng App, an online workshop platform, is created with Figma to ensure seamless navigation, efficient booking, and a user-friendly experience with a modern, intuitive interface.",
    category: ["ui/ux"],
    language: ["Figma"],
  },
  {
    image: mini1,
    title: "Mini Project: Personal Bio Apps",
    description:
      "A simple application made with HTML, CSS, and JavaScript to display personal bios, such as name, contact, and self-description. This project was designed during the ID Camp x Dicoding Bootcamp to hone web development skills.",
    category: ["mini"],
    language: ["HTML", "CSS", "Javascript"],
  },
  {
    image: mini2,
    title: "Mini Project: Todoo List Apps",
    description:
      "A simple to-do list application based on HTML, CSS, and JavaScript that allows users to add, edit, and delete tasks. Designed during the ID Camp x Dicoding Frontend Web Developer Bootcamp to practice web development skills.",
    category: ["mini"],
    language: ["HTML", "CSS", "Javascript"],
  },
  {
    image: mini3,
    title: "Mini Project: Bookshelf Apps",
    description:
      'A simple application for managing book lists using HTML, CSS, and JavaScript. Users can add, move, and delete books from the "Unread" and "Completed" lists. Designed during ID Camp x Dicoding Bootcamp to improve web development skills.',
    category: ["mini"],
    language: ["HTML", "CSS", "Javascript"],
  },
]);

const filteredPortfolio = computed(() => {
  if (activeFilter.value === "*") {
    return portfolio.value;
  }
  return portfolio.value.filter((item) =>
    item.category.includes(activeFilter.value),
  );
});

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredPortfolio.value.length / itemsPerPage)),
);

const paginatedPortfolio = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredPortfolio.value.slice(start, start + itemsPerPage);
});

const handleFilterChange = (value) => {
  activeFilter.value = value;
  currentPage.value = 1;
  nextTick(() => AOS.refreshHard());
};

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  nextTick(() => AOS.refreshHard());

  const section = document.getElementById("projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const toggleExpand = (title) => {
  if (expandedItems.has(title)) {
    expandedItems.delete(title);
  } else {
    expandedItems.add(title);
  }
};

const openLightbox = (item) => {
  selectedProject.value = item;
};

const closeLightbox = () => {
  selectedProject.value = null;
};

const handleKeydown = (e) => {
  if (e.key === "Escape") closeLightbox();
};

watch(selectedProject, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});

const getLanguageLogo = (language) => {
  const languageLogos = {
    HTML: "https://tse3.mm.bing.net/th?id=OIP.Mrb8EiYMlvcRFQY384KEHwHaKd&pid=Api&P=0&h=180",
    CSS: "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png",
    Javascript:
      "https://tse1.mm.bing.net/th?id=OIP.9jAkFPGpe5YO-8RM0Le_XgHaIa&pid=Api&P=0&h=180",
    PHP: "https://pngimg.com/uploads/php/php_PNG35.png",
    Laravel: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
    MySQL:
      "https://tse4.mm.bing.net/th?id=OIP.urLHYMYPFxkcs6AC4Io9vwHaHa&pid=Api&P=0&h=180",
    Python:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png",
    Odoo: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/17efceca-38ea-4e7e-83dc-2cdd9fb0987f.png?auto=format&ixlib=react-9.0.3&w=2618",
    Figma:
      "https://www.liblogo.com/img-logo/fi441fc32-figma-logo-figma-tips-and-tricks-rusmir-arnautovic-creative-designer-ux-ui.png",
    Vue: "https://safha.kalimah-apps.com/brand-logos/vue.svg",
    Tailwind: "https://safha.kalimah-apps.com/brand-logos/tailwind.svg",
    Nuxt: "https://safha.kalimah-apps.com/brand-logos/nuxt.png",
    vite: "https://safha.kalimah-apps.com/brand-logos/vite.svg",
    CodeIgniter: "https://www.codeigniter.com/assets/icons/ci-logo.png",
    Bootstrap:
      "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png",
    WordPress:
      "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
    WeddingPres:
      "https://ehv9nqzx9ct.exactdn.com/wp-content/uploads/2026/08/LOGO-WEDDINGPRESS.png?strip=all",
    FastAPI: "https://fastapi.tiangolo.com/img/icon-white.svg",
    CNN: "https://cdn-icons-png.flaticon.com/128/6179/6179016.png",
    "Random Forest": "https://cdn-icons-png.flaticon.com/128/6179/6179016.png",
  };
  return (
    languageLogos[language] ||
    "https://brandslogos.com/wp-content/uploads/images/large/figma-logo.png"
  );
};
</script>

<style scoped>
.glass-chip {
  background: rgba(255, 244, 230, 0.06);
  border: 1px solid rgba(255, 224, 190, 0.16);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
}

.filter-active {
  background: linear-gradient(135deg, #f0c77a, #d98a3d);
  box-shadow:
    0 8px 20px -6px rgba(232, 163, 61, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;
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
  transform: translateY(-6px);
  border-color: rgba(255, 224, 190, 0.32);
  box-shadow:
    0 20px 40px -16px rgba(232, 163, 61, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;
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
.glass-card:hover .card-border-glow {
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

.lang-chip {
  background: rgba(255, 244, 230, 0.05);
  border: 1px solid rgba(255, 224, 190, 0.12);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}
.lang-chip:hover {
  transform: translateY(-2px) scale(1.05);
  border-color: rgba(255, 224, 190, 0.3);
  background: rgba(255, 244, 230, 0.09);
}

.read-more-btn {
  transition: color 0.25s ease;
}

.page-btn {
  transition:
    color 0.25s ease,
    background-color 0.25s ease;
}
.page-btn:not(:disabled):hover {
  background: rgba(255, 244, 230, 0.08);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

button {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
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
