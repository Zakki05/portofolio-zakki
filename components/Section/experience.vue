<template>
    <section id="experience" class="relative w-full px-8 xl:px-16 py-10 mt-2">
        <div class="text-center mb-8">
            <span class="block text-rose-500 font-semibold text-lg animate-pulse">Education & Experience</span>
            <h2 class="text-4xl font-bold mt-1 text-white animate-fade-in">My Resume</h2>
            <p class="text-gray-100 mt-3 animate-fade-in delay-150">
                Explore the diverse milestones and experiences that have shaped my journey, each contributing to my
                growth and expertise.
            </p>
        </div>

        <div class="relative">
            <span class="absolute left-1/2 transform -translate-x-1/2 bg-rose-500 w-1 h-full"></span>
            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="(item, index) in resumeData" :key="index"
                    class="relative flex flex-col bg-white p-6 pl-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 animate-slide-up delay-[200ms] group">
                    <span
                        class="absolute top-8 left-1 w-4 h-4 bg-rose-500 rounded-full -translate-x-1/2 animate-bounce"></span>
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-rose-500 transition-colors">{{
                        item.title }}</h3>
                    <p class="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{{ item.company }}</p>
                    <span class="text-xs text-gray-400 block mt-2 group-hover:text-gray-500 transition-colors">{{
                        item.date }}</span>
                    <p class="text-gray-600 mt-4 leading-relaxed group-hover:text-gray-800 transition-colors">{{
                        item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const resumeData = ref([
    {
        title: "Diploma Degree",
        company: "Padang State Polytechnic | Padang, Indonesia",
        date: "2021 - 2024",
        description:
            "I am a proud graduate of the 67th Graduation Ceremony of Padang State Polytechnic in 2024, where I earned the distinction of being the Best Graduate from the Diploma III (D3) Program in Informatics Management under the Department of Information Technology. With a Cumulative Grade Point Average (GPA) of 3.90, I completed my studies showcasing consistent academic excellence and a strong dedication to my field."
    }, 
    {
        title: "Staff of Communications, Research and Development",
        company: "BEM KM PNP",
        date: "Jan - Des 2023",
        description:
            " am mandated as a Staff Communication, Research & Development BEM KM PNP who is responsible for helping to support innovation, collaboration, and provide knowledge in the form of information based on research and research results with internal and external parties. I am involved in the committee and am responsible as chief executive, coordinator, and organizer of a BEM KM PNP work program activity."
    },
    {
        title: "Internship Web Developer",
        company: "PT. Asli Isoae Solusine | Depok, Indonesia",
        date: "Feb - Jun 2024",
        description:
            "Successfully completed the internship program at PT Asli Isoae Solusine. My teammates and I were able to complete the project of designing a web-based Network E-Ticketing information system at PT CLI using the Nuxt framework and Rest API Laravel."
    },
    {
        title: "IT Software Engineer",
        company: "RSI Yarsi Ibnu Sina Padang Panjang | Padang Panjang, Indonesia",
        date: "Nov 2024 - Feb 2025",
        description:
            "I work as an IT Software Engineer at RSI Yarsi Ibnu Sina Padang Panjang, where I am responsible for designing and maintaining the hospital information system, ensuring smooth operation of the hospital management system, troubleshooting and optimizing APIs, and handling hardware maintenance to support the hospital's technological needs. Utilizing frameworks such as Laravel and CodeIgniter (CI), I develop reliable and scalable solutions to improve operational efficiency and enhance system performance."
    },
    {
        title: "Bachelor Degree",
        company: "Padang State Polytechnic | Padang, Indonesia",
        date: "2024 - Present",
        description:
            "As a Software Engineering student, my academic activities included comprehensive studies in system maintenance, system testing, and system design for web and mobile platforms. I gained hands-on experience in utilizing cutting-edge frameworks such as Laravel, Nuxt.js, React, Flutter, and Kotlin for developing robust and scalable applications. Additionally, I honed my skills in database design, ensuring efficient and reliable data management. These experiences not only strengthened my technical expertise but also prepared me to contribute effectively to real-world IT projects with a focus on innovation and problem-solving."
    }
]);
</script>

<style>
/* Custom animations */
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-in forwards;
}

.animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
}

.animate-bounce {
    animation: bounce 1s infinite;
}
</style>