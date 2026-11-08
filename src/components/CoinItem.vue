<script setup lang="ts">
import type { Coin } from '../types'

defineProps<{
  coin: Coin
}>()
</script>

<template>
  <div class="coin-row">
    <div class="cell cell-rank">
      <span class="cell-value rank-value">#{{ coin.rank }}</span>
    </div>

    <div class="cell cell-name">
      <span class="cell-label name-label">{{ coin.name }}</span>
      <span class="cell-value symbol-value">{{ coin.symbol }}</span>
    </div>

    <div class="cell cell-price">
      <span class="cell-value price-value">${{ coin.price_usd }}</span>
    </div>
  </div>
</template>

<style scoped>
.coin-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  padding: 14px 16px;
  margin: 0 12px 10px;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.coin-row:active {
  transform: scale(0.985);
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);
}

.cell {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.cell-rank {
  flex: 0 0 48px;
  align-items: center;
}

.rank-value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 34px;
  padding: 0 8px;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
}

.cell-name {
  flex: 1 1 auto;
}

.name-label {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.symbol-value {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.cell-price {
  flex: 0 0 auto;
  align-items: flex-end;
}

.price-value {
  font-size: 15px;
  font-weight: 700;
  color: #059669;
  font-variant-numeric: tabular-nums;
}
</style>
