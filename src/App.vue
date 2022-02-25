<template>
  <TopHeaderVue />
  <RouterView />
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
</style>