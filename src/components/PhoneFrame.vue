<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <div class="stage" :class="{ 'stage--active': active }">
    <div class="phone-frame">
      <div class="screen">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  display: none;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px 12px;
  background: radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 60%, #020617 100%);
}

.stage--active {
  display: flex;
}

.phone-frame {
  position: relative;
  width: 100%;
  max-width: 390px;
  aspect-ratio: 9 / 19.5;
  background: #0b0b0f;
  border-radius: 48px;
  padding: 12px;
  box-shadow:
    0 0 0 8px #1c1c1e,
    0 0 0 10px #3a3a3c,
    0 40px 80px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
}

.screen {
  width: 100%;
  height: 100%;
  border-radius: 38px;
  overflow: hidden;
  background: #f1f5f9;
}

@media (max-width: 420px) {
  .stage {
    padding: 8px 6px;
  }

  .phone-frame {
    padding: 8px;
    border-radius: 36px;
    box-shadow:
      0 0 0 6px #1c1c1e,
      0 0 0 8px #3a3a3c,
      0 20px 40px rgba(0, 0, 0, 0.5);
  }

  .screen {
    border-radius: 30px;
  }
}
</style>
