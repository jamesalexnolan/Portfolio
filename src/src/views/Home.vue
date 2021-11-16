<template>
<div class="container-fluid">
  <div class="d-flex justify-content-center">
    <div
      style="
        width: 350px;
        position: absolute;
        padding: 10px;
        text-align: left;
      "
    >
      <h1><b>James Nolan.</b></h1>
      <h4>I love to code, hire me</h4>
    </div>
    <div>
      <img
        src="@/assets/Hello.png"
        style="width: 350px; position: absolute; padding: 10px"
      />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      desk: { backgroundImage: "url(@/assests/Desk.png)" },
    };
  },
};
</script>

<style scoped>
</style>
