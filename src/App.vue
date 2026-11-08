<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchTickers } from './api'
import type { Coin } from './types'
import CoinItem from './components/CoinItem.vue'
import PhoneFrame from './components/PhoneFrame.vue'

const coins = ref<Coin[]>([])
const loading = ref(false)
const error = ref('')

async function loadCoins() {
  loading.value = true
  error.value = ''

  try {
    const result = await fetchTickers(0, 100)
    coins.value = result.data.sort((a, b) => a.rank - b.rank)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Terjadi kesalahan saat memuat data'
  } finally {
    loading.value = false
  }
}

onMounted(loadCoins)
</script>

<template>
  <PhoneFrame :active="true">
    <div class="app">
      <header class="header">
        <div class="header-top">
          <span class="header-brand">🪙</span>
          <div>
            <h1 class="header-title">Crypto Currency</h1>
            <p class="header-subtitle">Harga pasar real-time</p>
          </div>
        </div>
        <button class="btn-refresh" :disabled="loading" @click="loadCoins">
          <span class="refresh-icon" :class="{ 'refresh-icon--spin': loading }">⟳</span>
          <span>{{ loading ? 'Memuat...' : 'Refresh' }}</span>
        </button>
      </header>

      <div class="content">
        <p v-if="error" class="message message-error">{{ error }}</p>
        <p v-if="loading" class="message">Memuat data...</p>

        <div v-if="!error && !loading" class="list-header">
          <span class="list-count">{{ coins.length }} koin</span>
        </div>

        <main v-if="!error" class="list">
          <CoinItem v-for="coin in coins" :key="coin.id" :coin="coin" />
        </main>
      </div>
    </div>
  </PhoneFrame>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #f1f5f9;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.app::-webkit-scrollbar {
  display: none;
}

.header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: #ffffff;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.header-brand {
  font-size: 26px;
}

.header-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.3px;
  line-height: 1.1;
}

.header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 2px;
}

.btn-refresh {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-refresh:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.28);
}

.btn-refresh:active:not(:disabled) {
  transform: scale(0.96);
}

.btn-refresh:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.refresh-icon {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
}

.refresh-icon--spin {
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.content {
  flex: 1 1 auto;
  padding: 14px 0 16px;
}

.list-header {
  padding: 0 16px 8px;
}

.list-count {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.list {
  flex: 1 1 auto;
}

.message {
  padding: 16px;
  font-size: 14px;
  color: #64748b;
  text-align: center;
}

.message-error {
  color: #dc2626;
  background-color: #fef2f2;
  margin: 12px;
  border-radius: 12px;
}
</style>
