<template>
  <main>
    <header>
      <img src="./../assets/logo.svg" alt="cnotv">
      <span>kid-games</span>
    </header>
    <section>
      <ul>
        <li>
          <router-link to="/alphabet">ABC</router-link>
        </li>
        <li>
          <router-link to="/numbers">123</router-link>
        </li>
      </ul>
      </section>
  </main>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  padding: 5vh 10vw;
}
ul {
  padding: 0;
  list-style: none;
  text-align: center;
}
a {
  font-size: 3rem;
  color: white;
  line-height: 1;
  padding: .5em;
  background: red;
  border-radius: .5em;
  display: block;
}
li+li{
  margin-top: 5vh;
}
</style>
