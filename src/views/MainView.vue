<template>
  <div>
    <ShortcutBanner
      v-for="short in shortData"
      :key="short.index"
      :shortData="{ short }"
    />
  </div>
</template>

<script>
import ShortcutBanner from "../components/ShortcutBanner.vue"

export default {
    data() {
        return {
            shortData: [{
                index: 0,
                title: 'APT',
                link: '/1'
            },{
                index: 1,
                title: 'APT',
                link: '/12'
            }]
        }
    },
    components: {
        ShortcutBanner
    }
}
</script>

<style>
</style>