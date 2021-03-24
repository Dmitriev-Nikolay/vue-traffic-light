<template>
  <div class="case">
    <CircleLight class="circle" />
    <CircleLight class="circle" />
    <CircleLight class="circle" />
  </div>
</template>

<script>
import CircleLight from "./components/CircleLight.vue";

export default {
  name: "App",
  components: {
    CircleLight,
  },
};
</script>

<style>
.case {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 50px;
  background: linear-gradient(21deg, #dd03e4, #5611ec);
}
.circle {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 50%;
  background-color: red;
}
</style>
