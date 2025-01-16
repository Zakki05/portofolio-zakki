<template>
    <section id="projects" class="relative w-full px-8 xl:px-16 py-10">
        <div class="text-center mb-8">
            <span class="block text-rose-500 font-semibold text-lg animate-pulse">Creative Portfolios</span>
            <h2 class="text-4xl font-bold mt-1 text-white">Recent Works</h2>
            <p class="text-gray-100 mt-3">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                in some form.
            </p>
        </div>

        <div class="text-center mb-8">
            <div class="inline-flex space-x-4">
                <button v-for="filter in filters" :key="filter.name" @click="activeFilter = filter.value"
                    :class="['sm:font-semibold text-lg py-2 px-4 rounded-lg', activeFilter === filter.value ? 'bg-rose-500 text-white' : 'bg-white text-black']">
                    {{ filter.name }}
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(item, index) in filteredPortfolio" :key="index"
                class="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-rose-200">
                <div class="relative overflow-hidden rounded-lg aspect-w-1891 aspect-h-830">
                    <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
                    <div
                        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <a :href="item.image" class="text-white text-2xl">+</a>
                    </div>
                </div>
                <h3 class="mt-4 text-xl font-semibold text-rose-800">{{ item.title }}</h3>
                <p class="mt-2 text-gray-600">{{ item.description }}</p>

                <!-- Language Cards -->
                <div v-if="item.language && item.language.length" class="mt-4 flex flex-wrap gap-2">
                    <div v-for="lang in item.language" :key="lang" 
                        class="flex items-center px-3 py-1 bg-rose-50 rounded-full shadow transition-transform transform hover:scale-110 hover:bg-rose-100">
                        <img :src="getLanguageLogo(lang)" :alt="lang" class="w-6 h-6 mr-2">
                        <span class="text-sm font-medium text-rose-800">{{ lang }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const filters = ref([
    { name: 'All', value: '*' },
    { name: 'Web Design', value: 'web' },
    { name: 'UI/UX', value: 'ui/ux' },
    { name: 'Mini Project', value: 'mini' },
]);

const activeFilter = ref('*');

const portfolio = ref([
    {
        image: '/images/soopercut.png',
        title: 'Soopercuts Barber Service System',
        description: 'A comprehensive barber service management system developed using the Laravel framework and MySQL database to streamline operations, enhance customer experience, and efficiently manage services and appointments.',
        category: ['web'],
        language: ['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel', 'MySQL'],
    },
    {
        image: "/images/auih.png",
        title: 'Cashier System at AUIH+ using Odoo',
        description: 'The cashier system at AUIH+ leverages Odoo and Python to streamline transactions, manage stock, integrate payments, and provide real-time reports, ensuring efficiency, accuracy, and seamless user experience.',
        category: ['web'],
        language: ['Python', 'Odoo'],
    },
    {
        image: "/images/onbeng.png",
        title: 'UI/UX OnBeng Apps',
        description: 'The UI/UX design for OnBeng App, an online workshop platform, is created with Figma to ensure seamless navigation, efficient booking, and a user-friendly experience with a modern, intuitive interface.',
        category: ['ui/ux'],
        language: ['Figma'],
    },
]);

const filteredPortfolio = computed(() => {
    if (activeFilter.value === '*') {
        return portfolio.value;
    }
    return portfolio.value.filter(item => item.category.includes(activeFilter.value));
});

// Map language names to their respective logo URLs
const getLanguageLogo = (language) => {
    const languageLogos = {
        HTML: 'https://tse3.mm.bing.net/th?id=OIP.Mrb8EiYMlvcRFQY384KEHwHaKd&pid=Api&P=0&h=180',
        CSS: 'https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png',
        Javascript: 'https://tse1.mm.bing.net/th?id=OIP.9jAkFPGpe5YO-8RM0Le_XgHaIa&pid=Api&P=0&h=180',
        PHP: 'https://pngimg.com/uploads/php/php_PNG35.png',
        Laravel: 'https://logospng.org/download/laravel/logo-laravel-icon-1024.png',
        MySQL: 'https://tse4.mm.bing.net/th?id=OIP.urLHYMYPFxkcs6AC4Io9vwHaHa&pid=Api&P=0&h=180',
        Python: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png',
        Odoo: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/17efceca-38ea-4e7e-83dc-2cdd9fb0987f.png?auto=format&ixlib=react-9.0.3&w=2618',
        Figma: 'https://www.liblogo.com/img-logo/fi441fc32-figma-logo-figma-tips-and-tricks-rusmir-arnautovic-creative-designer-ux-ui.png',
    };
    return languageLogos[language] || 'https://brandslogos.com/wp-content/uploads/images/large/figma-logo.png';
};
</script>

<style scoped>
button {
    transition: background-color 0.3s ease, color 0.3s ease;
}
</style>