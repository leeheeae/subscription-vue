<template>
  <div>eeW</div>
</template>

<script>
  import { 
  getLttotPblancList,
  getNotAPTLttotPblancList,
  getRemndrLttotPblancList,
  getAPTLttotPblancDetail,
  getUrbtyOfctlLttotPblancDetail,
  getRemndrLttotPblancDetail,
  getAPTLttotPblancMdl,
  getUrbtyOfctlLttotPblancMdl,
  getRemndrLttotPblancMdl } from '../api'


  export default {
    created() {
      // this.fetchLttoPblancList()
      // this.fetchAPTLttotPblancDetail()
    },
    methods: {
      async fetchLttoPblancList() {
        try {
          const {data} = await getLttotPblancList();
          const items = data.response.body;
          console.log(items)
        }catch(err) {
          console.log(err)
        }
      },
      async fetchNotAPTLttotPblancList() {
        try {
          const {data} = await getNotAPTLttotPblancList();
          const items = data.response.body;
          console.log(items)
        }catch(err) {
          console.log(err)
        }
      },
      async fetchAPTLttotPblancDetail() {
        try {
          const {data} = await getAPTLttotPblancDetail();
          const items = data.response.body;
          console.log(items)
        }catch(err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped>
</style>