<template>
  <div id="vue-backend-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fs-shop-box {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  background: #fff;
  padding: 40px 50px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgb(0 0 0 / 5%);
}
.fs-shop-section-heading {
  display: block !important;
  margin: 0 0 15px 0 !important;
  padding: 0 0 5px 0 !important;
  border-bottom: 1px solid #eee;
  font-size: 22px;
  line-height: 25px;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-end {
  justify-content: flex-end;
}
.fs-search-icon {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 18px;
}
.fs-search-icon:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.fs-search-icon:after {
  width: 1px;
  height: 10px;
  background: #fff;
  position: absolute;
  right: 3px;
  bottom: 0px;
  content: '';
  transform: rotate(-45deg);
}

</style>
