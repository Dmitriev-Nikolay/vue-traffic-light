<template>
  <div class="main">
    <div class="case">
      <CircleLight
        class="circle"
        color="red"
        :currentColor="currentColor"
        :seconds="counter"
      />
      <CircleLight
        class="circle"
        color="yellow"
        :currentColor="currentColor"
        :seconds="counter"
      />
      <CircleLight
        class="circle"
        color="green"
        :currentColor="currentColor"
        :seconds="counter"
      />
    </div>
    <!-- <div class="case_btn">
      <button class="btn_run" @click="$router.push({ name: 'red' })">
        run red
      </button>
      <button class="btn_run" @click="$router.push({ name: 'yellow' })">
        run yellow
      </button>
      <button class="btn_run" @click="$router.push({ name: 'green' })">
        run green
      </button>
    </div> -->
  </div>
</template>

<script>
import CircleLight from "@/components/CircleLight.vue";

export default {
  name: "home",
  props: ["currentColor", "time"],
  components: {
    CircleLight,
  },
  data() {
    return {
      counter: null,
      interval: null,
    };
  },
  computed: {
    getNextColor() {
      this.$store.commit("setNextColor", this.currentColor);
      return this.$store.state.nextColor;
    },
  },
  watch: {
    $route(to, from) {
      this.setTimer();
    },
  },
  mounted() {
    this.setTimer();
  },
  methods: {
    setTimer() {
      console.log(this.$store.state.currentColorIndex);
      const timer = this.time;

      setTimeout(() => {
        this.$router.push(this.getNextColor);
      }, timer);

      this.counter = timer / 1000;
      if (this.interval) clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.counter -= 1;
      }, 1000);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.main {
  background: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/* .case_btn {
  margin: 10px;
}
.btn_run {
  height: 100px;
  width: 100px;
  font-size: 1.5em;
  word-spacing: 60px;
  cursor: pointer;
} */
.case {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 50px;
  background: rgb(137, 138, 192);
}
.circle {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 50%;
}
</style>
