<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <v-touch>
      <ul>
        <li>
          <a
            href="https://vuejs.org"
            target="_blank"
          >
            Core Docs
          </a>
        </li>
        <li>
          <a
            href="https://forum.vuejs.org"
            target="_blank"
          >
            Forum
          </a>
        </li>
        <li>
          <a
            href="https://chat.vuejs.org"
            target="_blank"
          >
            Community Chat
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/vuejs"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <br>
        <li>
          <a
            href="http://vuejs-templates.github.io/webpack/"
            target="_blank"
          >
            Docs for This Template
          </a>
        </li>
      </ul>
    </v-touch>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.mui('.hello'),this.mui.init())
  },
  methods:{

  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
