<template>
    <header :class="['lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-md shadow-rose-500', { 'hidden': isHeaderHidden }]">
        <div class="flex-1 flex justify-between items-center">
            <img class="w-[3.5rem] hidden xl:block" src="/images/Logo.png" alt="Logo" />
        </div>
        <button @click="toggleMenu" class="cursor-pointer md:hidden block text-black bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>

        <div :class="[
            'md:flex md:items-center md:w-auto w-full',
            isMenuOpen ? 'block' : 'hidden',
        ]">
            <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-100 pt-4 md:pt-0">
                    <li>
                        <a :class="['md:p-4 py-3 px-0 block', activeSection === 'about' ? 'text-rose-500' : '']"
                           href="#about" @click="handleMenuClick('about')">About</a>
                    </li>
                    <li>
                        <a :class="['md:p-4 py-3 px-0 block', activeSection === 'experience' ? 'text-rose-500' : '']"
                           href="#experience" @click="handleMenuClick('experience')">Experience</a>
                    </li>
                    <li>
                        <a :class="['md:p-4 py-3 px-0 block', activeSection === 'projects' ? 'text-rose-500' : '']"
                           href="#projects" @click="handleMenuClick('projects')">Projects</a>
                    </li>
                    <li>
                        <a :class="['md:p-4 py-3 px-0 block', activeSection === 'contact' ? 'text-rose-500' : '']"
                           href="#contact" @click="handleMenuClick('contact')">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMenuOpen = ref(false);
const activeSection = ref("about");
const lastScrollY = ref(0);
const isHeaderHidden = ref(false);
const scrollThreshold = 50; // Minimal jarak scroll sebelum header disembunyikan

const sections = [
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const handleMenuClick = (section) => {
    activeSection.value = section;
    isMenuOpen.value = false; // Close menu after click
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hanya sembunyikan header jika perbedaan scroll cukup besar
    if (Math.abs(currentScrollY - lastScrollY.value) > scrollThreshold) {
        isHeaderHidden.value = currentScrollY > lastScrollY.value; // Hide if scrolling down
    }

    lastScrollY.value = currentScrollY;

    // Update active section
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

// Event listener untuk scroll
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

// Hapus event listener saat komponen di-unmount
onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
