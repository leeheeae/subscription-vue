<template>
  <TopHeaderVue />
  <main class="main">
    <RouterView />
  </main>
</template>

<script>
import TopHeaderVue from "@/components/common/TopHeader.vue"

export default {
  components: {
    TopHeaderVue
  }

}
</script>

<style>
@import url("@/assets/base.css");
.main {
  padding: 1.2rem;
}
</style>