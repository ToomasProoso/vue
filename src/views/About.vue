<template>
  <div class="about">
    <h1>This is an about page "what?"</h1>
    <input v-model.number="minA">
    <input v-model.number="minB">
    <button v-on:click="min()">Min</button>
    {{ minAnswer }}

    <h1>Max</h1>
    <input v-model.number="maxA">
    <input v-model.number="maxB">
    <button v-on:click="max()">Max</button>
    {{ maxAnswer }}

    <h1>Abs</h1>
    <input v-model.number="abs">
        <button v-on:click="absA()">Abs</button>
    {{ absAnswer }}

    <h1>Even</h1>
    <input v-model.number="even">
    <button v-on:click="evenA()">Even</button>
    {{ evenAnswer }}

    <h1>Min 3"</h1>
    <input v-model.number="min3A">
    <input v-model.number="min3B">
    <input v-model.number="min3C">
    <button v-on:click="min3is()">Min3</button>
    {{ min3Answer }}

    <h1>Max 3"</h1>
    <input v-model.number="max3A">
    <input v-model.number="max3B">
    <input v-model.number="max3C">
    <button v-on:click="max3is()">Max3</button>
    {{ max3Answer }}

  </div>
</template>
<script>

function min() {
  if (this.minA < this.minB) {
    this.minAnswer = this.minA;
  } else {
    this.minAnswer = this.minB;
  }
}
function max() {
  if (this.maxA > this.maxB) {
    this.maxAnswer = this.maxA;
  } else {
    this.maxAnswer = this.maxB;
  }
}

function absA() {
  if (this.abs < 0) {
    this.absAnswer = this.abs * -1;
  } else {
    this.absAnswer = this.abs;
  }
}

function evenA() {
  if (this.even %2 == 0) {
    this.evenAnswer = true;
  } else {
    this.evenAnswer = false;
  }
}

function min3is() {
  if (this.min3A <= this.min3B && this.min3A <= this.min3C) {
    this.min3Answer = this.min3A;
  } else if (this.min3B <= this.min3A && this.min3B <= this.min3C){
    this.min3Answer = this.min3B;
  }else{
    this.min3Answer = this.min3C;
  }
}

function max3is() {
  if (this.max3A >= this.max3B && this.max3A >= this.max3C) {
    this.max3Answer = this.max3A;
  } else if (this.max3B >= this.max3A && this.max3B >= this.max3C){
    this.max3Answer = this.max3B;
  }else{
    this.max3Answer = this.max3C;
  }
}

export default {
  data: function () {
    return {
      'minA': 0,
      'minB': 0,
      'minAnswer': 0,
      'maxA': 0,
      'maxB': 0,
      'maxAnswer': 0,
      'abs': 0,
      'absAnswer': 0,
      'even': 0,
      'evenAnswer': 0,
      'min3A': 0,
      'min3B': 0,
      'min3C': 0,
      'min3Answer': 0,
      'max3A': 0,
      'max3B': 0,
      'max3C': 0,
      'max3Answer': 0
    }
  },
  methods: {
    'min': min,
    'max': max,
    'absA': absA,
    'evenA': evenA,
    'min3is' : min3is,
    'max3is': max3is
  }
}
</script>

