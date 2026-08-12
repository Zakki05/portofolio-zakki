<template>
  <section
    id="contact"
    class="relative w-full px-8 py-16 xl:px-16 bg-[#0a0806]"
  >
    <div class="mb-12 text-center" data-aos="fade">
      <span
        class="inline-block text-sm font-semibold tracking-wide uppercase text-amber-400"
      >
        Contact Me!
      </span>
      <h2 class="mt-2 font-serif text-4xl font-bold text-white">
        Any projects you'd like to discuss?
      </h2>
      <p class="max-w-xl mx-auto mt-3 text-stone-400">
        Let's make your idea a reality! Please fill out the following form and I
        will respond within 1x24 hours
      </p>
    </div>

    <div class="max-w-3xl mx-auto" data-aos="fade" data-aos-delay="100">
      <form @submit.prevent="handleSubmit" class="p-8 glass-card rounded-2xl">
        <div class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
          <div class="form-group">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-stone-300"
              >Full Name</label
            >
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              class="w-full px-4 py-3 glass-field rounded-xl"
              required
            />
          </div>

          <div class="form-group">
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-stone-300"
              >Company (Optional)</label
            >
            <input
              id="company"
              v-model="form.company"
              type="text"
              placeholder="Your company name"
              class="w-full px-4 py-3 glass-field rounded-xl"
            />
          </div>

          <div class="form-group">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-stone-300"
              >Email Address</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-3 glass-field rounded-xl"
              required
            />
          </div>

          <div class="form-group">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-stone-300"
              >Phone Number</label
            >
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="Enter your phone number"
              class="w-full px-4 py-3 glass-field rounded-xl"
            />
          </div>
        </div>

        <div class="mb-6 form-group">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-stone-300"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Write your message here"
            class="w-full px-4 py-3 glass-field rounded-xl"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="flex items-center justify-center w-full gap-2 py-3 font-semibold rounded-xl cta-glass disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <svg
            v-if="isSubmitting"
            class="w-4 h-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          {{ isSubmitting ? "Sending..." : "Send Message" }}
        </button>

        <Transition name="status-fade">
          <div
            v-if="statusMessage"
            :class="[
              'mt-4 px-4 py-3 rounded-xl text-sm font-medium status-chip',
              statusType === 'success' ? 'status-success' : 'status-error',
            ]"
          >
            {{ statusMessage }}
          </div>
        </Transition>
      </form>
    </div>
  </section>
</template>

<script setup>
import emailjs from "emailjs-com";

const form = reactive({
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const statusMessage = ref("");
const statusType = ref("success");

const handleSubmit = async () => {
  isSubmitting.value = true;
  statusMessage.value = "";

  try {
    await emailjs.send(
      "service_fsd6rx5",
      "template_ixbhz7l",
      {
        to_email: "ahmadfaris771@gmail.com",
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        phone: form.phone,
        company: form.company,
        to_name: "Ahmad Faris Al Muzakki",
      },
      "2AZcozYyD_Bmbo5AR",
    );

    statusType.value = "success";
    statusMessage.value =
      "Your message has been sent! I'll get back to you soon.";

    form.name = "";
    form.email = "";
    form.company = "";
    form.phone = "";
    form.message = "";
  } catch (error) {
    console.error("Error sending email:", error);
    statusType.value = "error";
    statusMessage.value =
      "Something went wrong while sending your message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 244, 230, 0.05);
  border: 1px solid rgba(255, 224, 190, 0.14);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow:
    0 8px 32px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}

.glass-field {
  background: rgba(255, 244, 230, 0.04);
  border: 1px solid rgba(255, 224, 190, 0.14);
  color: #f5efe6;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.glass-field::placeholder {
  color: rgba(214, 202, 186, 0.45);
}

.glass-field:focus {
  outline: none;
  border-color: rgba(240, 199, 122, 0.55);
  background: rgba(255, 244, 230, 0.07);
  box-shadow: 0 0 0 3px rgba(232, 163, 61, 0.18);
}

.cta-glass {
  color: #12100c;
  background: linear-gradient(135deg, #f0c77a, #d98a3d);
  box-shadow:
    0 8px 24px -8px rgba(232, 163, 61, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.35) inset;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.cta-glass:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow:
    0 12px 28px -8px rgba(232, 163, 61, 0.65),
    0 0 0 1px rgba(255, 255, 255, 0.4) inset;
}

.status-chip {
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border: 1px solid;
}

.status-success {
  background: rgba(94, 189, 130, 0.1);
  border-color: rgba(94, 189, 130, 0.35);
  color: #a8e6bc;
}

.status-error {
  background: rgba(224, 100, 100, 0.1);
  border-color: rgba(224, 100, 100, 0.35);
  color: #f3b3b3;
}

.status-fade-enter-active,
.status-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.status-fade-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}
.status-fade-leave-to {
  opacity: 0;
}
</style>
