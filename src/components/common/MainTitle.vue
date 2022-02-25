<template>
  <div class="main-title">
    <h1>{{ title }}</h1>
    <p>{{ guide }}</p>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        guide: String
    }
}
</script>

<style>
</style>