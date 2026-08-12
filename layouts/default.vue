<template>
  <div class="relative w-full min-h-screen overflow-x-hidden bg-void">
    <div class="ambient-blob blob-1"></div>
    <div class="ambient-blob blob-2"></div>
    <div class="ambient-blob blob-3"></div>

    <AppHeader></AppHeader>

    <div class="relative z-10 pt-24">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-void {
  background:
    radial-gradient(
      ellipse 900px 600px at 15% 0%,
      rgba(194, 112, 61, 0.18),
      transparent 60%
    ),
    radial-gradient(
      ellipse 900px 700px at 85% 15%,
      rgba(232, 163, 61, 0.15),
      transparent 60%
    ),
    #12100c;
}

.ambient-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
}
.blob-1 {
  width: 520px;
  height: 520px;
  top: -160px;
  left: -120px;
  background: radial-gradient(circle, rgba(232, 163, 61, 0.5), transparent 70%);
  animation: drift1 22s ease-in-out infinite;
}
.blob-2 {
  width: 460px;
  height: 460px;
  top: -120px;
  right: -140px;
  background: radial-gradient(
    circle,
    rgba(194, 112, 61, 0.45),
    transparent 70%
  );
  animation: drift2 26s ease-in-out infinite;
}
.blob-3 {
  width: 380px;
  height: 380px;
  top: 120px;
  left: 40%;
  background: radial-gradient(
    circle,
    rgba(232, 163, 61, 0.32),
    transparent 70%
  );
  animation: drift3 30s ease-in-out infinite;
  opacity: 0.3;
}

@keyframes drift1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(60px, 40px) scale(1.1);
  }
}
@keyframes drift2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-50px, 60px) scale(0.95);
  }
}
@keyframes drift3 {
  0%,
  100% {
    transform: translate(-50%, 0) scale(1);
  }
  50% {
    transform: translate(-45%, 30px) scale(1.15);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ambient-blob {
    animation: none;
  }
}
</style>
