<template>
  <cards
    :cards="animals"
  >
  </cards>
</template>

<script>
import cards from '@/components/cards'
export default {
  components: { cards },
  name: 'Animals',
  data () {
    return {
      animals: [
        'Bear',
        'Dog',
        'Cat',
        'Fox',
        'Bee',
        'Monkey'
      ]
    }
  }
}
</script>
