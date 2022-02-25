<template>
  <div>
    <ShortcutBanner
      v-for="short in shortData"
      :key="short.index"
      :shortData="{ short }"
    />
    <AptList />
  </div>
</template>

<script>
import ShortcutBanner from "@/components/ShortcutBanner.vue"
import AptList from "@/components/list/AptList.vue"

export default {
    data() {
        return {
            shortData: [{
                index: 0,
                title: 'APT(아파트)',
                link: '/1'
            },{
                index: 1,
                title: '오피스텔/도시형/(공공지원)민간임대',
                link: '/12'
            },{
                index: 2,
                title: 'APT무순위/잔여세대',
                link: '/12'
            }]
        }
    },
    components: {
        ShortcutBanner,
        AptList
    },
}
</script>

<style>
</style>