<template>
  <template v-for="data in shortData" :key="data.index">
    <RouterLink :to="data.link" class="shortcut-banner">
      <div>
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
  display: block;
  margin: 10px 0;
}
.shortcut-banner > div {
  width: 100%;
  padding: 1.2rem;
  border: 1px solid #e6e5e5;
  text-align: center;
}
.shortcut-banner h2 {
  color: #011030;
  font-size: 16px;
  font-weight: 600;
}
</style>