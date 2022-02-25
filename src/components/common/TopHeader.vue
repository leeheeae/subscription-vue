<template>
  <header class="header">
    <div class="logo">청약분양정보<br />조회서비스</div>
    <button class="menuBtn">
      <IconMenu />
    </button>
  </header>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
</template>

<script>
import IconMenu from "@/components/icons/IconMenu.vue"

export default {   
    components: {
        IconMenu
    }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0055ff;
}

.menuBtn {
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>