<template>
  <div class="Multiplication table">
    <input v-model.number="x"/>
    <input v-model.number="y"/>
    <button v-on:click="show()">calculate</button>
    <table border="1">
      <tr v-for="row in table">
        <td v-for="column in row"> {{column}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'x': 0,
      'y': 0,
      'table': [[]]

    }
  },
  methods: {
    'show': function () {
      for (let i = 1; i <= this.x; i++) {
        this.table[i - 1] = []
        for (let j = 1; j <= this.y; j++) {
          this.table[i - 1][j - 1] = i * j;
        }
        this.table[i-1].splice()
      }
      this.table.splice()
    }
  }

}

</script>