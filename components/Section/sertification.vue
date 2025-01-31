<template>
    <article id="pelatihan" class="relative w-full px-8 xl:px-16 py-10">
        <div class="text-center mb-8">
            <span class="block text-rose-500 font-semibold text-lg animate-pulse">Training & Certifications</span>
            <h2 class="text-4xl font-bold mt-1 text-white">Achievements</h2>
            <p class="text-gray-100 mt-3">
                These certifications highlight expertise and commitment to continuous learning.
            </p>
        </div>

        <ul class="mb-8 bg-white p-6 rounded-lg shadow-lg border border-rose-200">
            <li v-for="(item, index) in certificates" :key="index"
                class="flex flex-col sm:flex-row justify-between py-3 px-4 border-b last:border-none border-gray-200 transition-transform hover:scale-95 sm:hover:scale-95">
                <span class="font-semibold text-gray-800 text-sm sm:text-base">{{ item.title }}</span>
                <strong class="text-gray-600 text-sm sm:text-base sm:text-right">{{ item.date }}</strong>
            </li>
        </ul>


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div class="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl transition-transform transform hover:scale-105"
                v-for="(image, index) in certificateImages" :key="index">
                <img :src="image.src" :alt="image.alt"
                    class="w-full h-40 object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-300">
                <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a :href="image.src" class="text-white text-2xl">+</a>
                </div>
                <h3 class="mt-3 text-lg font-semibold text-white text-center">{{ image.title }}</h3>
            </div>
        </div>
    </article>
</template>

<script setup>
import piagam1 from '/images/piagam1.png';
import piagam2 from '/images/piagam2.jpg';
import piagam3 from '/images/piagam3.png';
import piagam4 from '/images/piagam4.jpg';
import piagam5 from '/images/piagam5.jpg';
import piagam6 from '/images/piagam6.jpg';
import piagam7 from '/images/piagam7.jpg';
import piagam8 from '/images/piagam8.jpg';

const certificates = [
    { title: 'Lulusan Terbaik Politeknik Negeri Padang', date: 'Sept 2024' },
    { title: 'Internship PT. Asli Isoae Solusine', date: 'Jun 2024' },
    { title: 'Badan Eksekutif Mahasiswa', date: 'Des 2023' },
    { title: 'Bootcamp Sotvi Web Developer', date: 'Sept 2023' },
    { title: 'Oracle Cloud Infrastructure Foundations', date: 'Jun 2023' },
    { title: 'Database Programming With PL/SQL', date: 'Jan 2023' },
    { title: 'Database Programming With SQL', date: 'Nov 2022' },
    { title: 'Junior Web Developer VSGA', date: 'Okt 2022' },
];

const certificateImages = [
    { src: piagam1, alt: 'Dokumentasi 1', title: 'Lulusan Terbaik Politeknik Negeri Padang' },
    { src: piagam2, alt: 'Dokumentasi 2', title: 'Internship PT. Asli Isoae Solusine' },
    { src: piagam3, alt: 'Dokumentasi 3', title: 'Badan Eksekutif Mahasiswa' },
    { src: piagam4, alt: 'Dokumentasi 4', title: 'Bootcamp Sotvi Web Developer' },
    { src: piagam5, alt: 'Dokumentasi 5', title: 'Oracle Cloud Infrastructure Foundations' },
    { src: piagam6, alt: 'Dokumentasi 6', title: 'Database Programming With PL/SQL' },
    { src: piagam7, alt: 'Dokumentasi 7', title: 'Database Programming With SQL' },
    { src: piagam8, alt: 'Dokumentasi 8', title: 'Junior Web Developer VSGA' },
];
</script>
