<template>
  <a @click="$router.go(-1)">&times;</a>
</template>
<style scoped lang="scss">
a {
  font-size: 4rem;
  font-weight: 200;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 100;

  :hover {
    border-bottom: none !important;
    box-shadow: none !important;
  }
}
</style>
