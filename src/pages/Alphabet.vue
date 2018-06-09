<template>
  <cards
    :cards="letters"
  >
  </cards>
</template>

<script>
import cards from '@/components/cards'
export default {
  components: { cards },
  name: 'Alphabet',
  data () {
    return {
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }
  }
}
</script>
