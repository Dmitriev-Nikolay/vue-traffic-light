<template>
  <div :class="circleClasses">
    <div class="circle__counter" v-if="circleLightOn">
      {{ seconds }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CircleLight",
  props: ["color", "currentColor", "seconds"],
  computed: {
    circleLightOn: function () {
      return this.color === this.currentColor;
    },
    circleClasses: function () {
      return `
          circle_${this.color}
          ${this.circleLightOn ? "circle_on" : ""} 
          ${this.circleLightOn && this.seconds < 4 ? "circle_blink" : ""}`;
    },
  },
};
</script>

<style>
@keyframes blink-animation {
  to {
    opacity: 0.5;
  }
}
.circle_red {
  background-color: red;
  color: rgb(8, 3, 248);
  opacity: 0.3;
}
.circle_yellow {
  background-color: yellow;
  color: rgb(8, 3, 248);
  opacity: 0.3;
}
.circle_green {
  background-color: rgb(6, 255, 6);
  color: rgb(8, 3, 248);
  opacity: 0.3;
}
.circle_on {
  opacity: 1;
}
.circle__counter {
  font-size: 3em;
  text-align: center;
  align-self: center;
  font-family: "Times New Roman", Georgia, Serif;
}
.circle_blink {
  animation: blink-animation 0.3s steps(10, start) infinite;
}
</style>