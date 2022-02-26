<template>
  <MainTitle
    title="오늘의 APT 청약일정"
    guide="글자를 클릭하면 입주자 모집 공고 정보를 확인할 수 있습니다."
  />
  <ul>
    <AptListItem :aptListItem="aptListItem" />
  </ul>
</template>

<script>
import MainTitle from "@/components/common/MainTitle.vue"
import AptListItem from "@/components/list/AptListItem.vue";
import { getLttotPblancList } from '@/api'

export default {
    components: {
        MainTitle,
        AptListItem
    },
    data() {
      return {
        aptListItem: []
      }
    },
    methods: {
    async fetchLttoPblancList() {   
        try {
          const { data } = await getLttotPblancList();
          const items = data.response.body;
          this.aptListItem = items.items.item
        }catch(err) {
          console.log(err)
        }
      },
    },
    created() {
        this.fetchLttoPblancList();
    },
}
</script>

<style>
</style>