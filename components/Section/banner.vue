<template>
    <div id="about" class="h-full w-full mx-auto relative xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pt-24 pb-10">
        <div class="w-full relative">
            <img class="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto"
                src="/images/Foto.jpg" alt="My Image" />
            <img class="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
                src="/images/Foto.jpg" alt="My Image" />
        </div>
        <div class="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white md:mt-0 sm:mt-8 mt-4">
            <h1 class="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
                Hello, My name is
            </h1>
            <h1 class="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
                Ahmad Faris Al Muzakki
            </h1>
            <h3 class="capitalize text-rose-400">
                I'm <span class="typing text-green-500"></span>
            </h3>
            <p>
                Experienced Web Developer with 1+ years of expertise in Laravel, Vue.js, Nuxt.js, and Figma.
            </p>
            <div class="sm:mt-4 mt-2">
                <button class="px-6 py-1 bg-rose-500 text-white rounded-sm">Get In Touch</button>
            </div>
        </div>
    </div>
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