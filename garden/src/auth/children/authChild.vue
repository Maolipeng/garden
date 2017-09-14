<<template>
  <div @click="findFather">登陆儿子{{childAge}}</div>
</template>
<script>

export default {
  props: ['childAge'],
  data () {
    return {
      name: 'child'
    }
  },
  methods: {
    findFather () {
      this.$emit('findfather', {value: this.name})
    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped>

</style>
<style>

</style>


