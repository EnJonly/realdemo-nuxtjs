<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
                <fieldset class="form-group">
                  <input v-model="profile.image" class="form-control" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="profile.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="profile.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="profile.email" class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="profile.password" class="form-control form-control-lg" type="password" placeholder="Password" minlength="8">
                </fieldset>
                <div class="btn btn-lg btn-primary pull-xs-right" @click="uptateSetting">
                  Update Settings
                </div>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getProfiles, uptateUser } from '@/api/user'
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',

  data() {
    return {
      profile: {
        username: '',
        email: '',
        image: '',
        username: '',
        bio: '',
        password: '',
      }
    }
  },
  async mounted() {
    let { data } = await getProfiles(this.user.username)
    this.profile = Object.assign({}, data.profile, this.user)
  },
  methods: {
    uptateSetting() {
      uptateUser({user: this.profile}).then(res => {
        let userInfo = {...this.user, ...this.profile}
        this.$store.commit('setUser', userInfo)
        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', userInfo)
        this.$router.push({ path: `/profile/${this.profile.username}` })
      })
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>
