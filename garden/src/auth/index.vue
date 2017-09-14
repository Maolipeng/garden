<<template>
  <div>
      登陆
  <auth-child :childAge="age" @findfather="findFather"></auth-child>
  </div>
</template>
<script>
import '../style/common.css'
import authChild from './children/authChild'

export default {
  data () {
    return {
      age: 2,
      person: {}
    }
  },
  methods: {
    findFather (params) {
      window.alert(params.value)
    }
  },
  computed: {
    format () {
      return this.age * 10
    }
  },
  watch: {
    age: function (oldValue, newValue) {

    },
    person: {
      handler: function (value) {

      }
    }
  },
  components: {
    authChild
  },
  created () {
    console.log(this.$route.params.id)
    console.log(this.$route.query.age)
  },
  mounted () {

  }
}
</script>
<style scoped>

</style>
<style>

</style>


