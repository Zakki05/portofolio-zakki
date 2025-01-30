<template>
    <section id="contact" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <span class="block text-rose-500 font-semibold text-lg">Contact Me!</span>
                <h2 class="text-4xl font-bold text-gray-900 pt-2">Any projects you'd like to discuss?</h2>
                <p class="text-gray-600 pt-2">
                    Let's make your idea a reality! Please fill out the following form and I will respond within 1x24 hours
                </p>
            </div>

            <div class="max-w-3xl mx-auto">
                <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="form-group">
                            <label for="name" class="block text-gray-700 text-sm font-medium mb-2">Nama Lengkap</label>
                            <input id="name" v-model="form.name" type="text" placeholder="Masukkan nama Anda"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="company" class="block text-gray-700 text-sm font-medium mb-2">Perusahaan
                                (Opsional)</label>
                            <input id="company" v-model="form.company" type="text" placeholder="Nama perusahaan"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" />
                        </div>

                        <div class="form-group">
                            <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Alamat Email</label>
                            <input id="email" v-model="form.email" type="email" placeholder="Masukkan email Anda"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="phone" class="block text-gray-700 text-sm font-medium mb-2">Nomor
                                Telepon</label>
                            <input id="phone" v-model="form.phone" type="tel" placeholder="Masukkan nomor telepon Anda"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" />
                        </div>
                    </div>

                    <div class="form-group mb-6">
                        <label for="message" class="block text-gray-700 text-sm font-medium mb-2">Pesan</label>
                        <textarea id="message" v-model="form.message" placeholder="Tulis pesan Anda di sini"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                            rows="4" required></textarea>
                    </div>

                    <button type="submit"
                        class="w-full bg-rose-500 text-white font-semibold py-3 rounded-lg hover:bg-rose-600 transition-colors">
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>

import emailjs from 'emailjs-com'

const form = reactive({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
})

const handleSubmit = async () => {
    try {
        await emailjs.send(
            'service_fsd6rx5',
            'template_ixbhz7l', 
            {
                to_email: 'ahmadfaris771@gmail.com',
                from_name: form.name, 
                from_email: form.email,
                message: form.message,
                phone: form.phone,
                company: form.company, 
                to_name: 'Ahmad Faris Al Muzakki', 
            },
            '2AZcozYyD_Bmbo5AR'
        );
        alert('Pesan Anda telah dikirim!');
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    }
}
</script>

<style scoped>
/* Tambahkan gaya CSS sesuai kebutuhan */
</style>