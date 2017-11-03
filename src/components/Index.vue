<template>
  <main>
    <header>
      <img src="./../assets/logo.svg" alt="cnotv">
      <span>kid-games</span>
    </header>
    <section>
      <h1>Games</h1>
      <ul>
        <li>
          <router-link to="/alphabet">Kid alphabet keyboard + SpeechSynthesis + Grid CSS + animateCSS</router-link>
          <a href="https://codepen.io/cnotv/full/WZraMB">codepen</a>
        </li>
        <li>
          <router-link to="/shapes">Sensory rectangles for kids + random square</router-link>
          <a href="https://codepen.io/cnotv/full/WZraMB">codepen</a>
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
<style>
section {
  padding: 3rem;
  line-height: 3;
}
</style>
