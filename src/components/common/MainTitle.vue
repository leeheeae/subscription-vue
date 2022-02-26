<template>
  <div class="main-title">
    <h1 class="title">
      <template v-if="dateType === 'today'">
        오늘의 <span>{{ itemType }}</span> 분양 정보
      </template>
    </h1>
    <p class="guide">{{ guide }}</p>
  </div>
</template>

<script>
export default {
    props: {
        dateType: String,
        guide: String,
        itemType: String
    }
}
</script>

<style scoped>
.title {
  font-size: 21px;
  font-weight: 600;
  color: #011030;
  margin-bottom: 4px;
}
.title span {
  color: #0055ff;
  font-weight: 600;
}
.guide {
  font-size: 14px;
  font-weight: 400;
  color: #98a7c5;
}
</style>