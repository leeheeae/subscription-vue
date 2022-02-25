<template>
  <template v-for="data in shortData" :key="data.index">
    <RouterLink :to="data.link">
      <div class="shortcut-banner">
        <h2>{{ data.title }}</h2>
      </div>
    </RouterLink>
  </template>
</template>

<script>
export default {
    props: {
      shortData: {
        type: Object
      },
    }
}
</script>

<style scoped>
.shortcut-banner {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e6e5e5;
  color: #011030;
  font-size: 1rem;
  font-weight: 500;
}
</style>