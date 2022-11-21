<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{user.username}}</h4>
            <p>
              {{user.bio}}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{user.username}}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-for="(item, index) in taps" :key="item">
                <a class="nav-link" :class="{active: +active === index}" :href="`/profile/${user.username}?t=${index}`">
                  {{item}}
                </a>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="(item, index) in acticleList" :key="index">
            <div class="article-meta">
              <a href=""><img :src="item.author.image" /></a>
              <div class="info">
                <a href="" class="author">{{item.author.username}}</a>
                <span class="date">{{item.updatedAt |  date('MMM DD, YYYY')}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right"  @click="handleDel(item)">
                <i class="ion-heart"></i> {{item.favoritesCount}}
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>{{item.title}}</h1>
              <p>{{item.description}}</p>
              <span>Read more...</span>
            </a>
          </div>
          <div class="article-preview" v-show="acticleList.length === 0">
            No articles are here... yet.
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getArticles, deleteFavorite } from '@/api/article'

const getArtList = function(t = 0, name) {
  return getArticles(t == 0 ? {author: name} : {favorited: name})
}
export default {
  middleware: 'authenticated',
  name: 'UserProfile',
  async asyncData({ query, store }) {

    const {data} = await getArtList(query.t, store.state.user.username)

    return {
      taps: [ 'My Articles', 'Favorited Articles' ],
      acticleList: data.articles,
      active: query.t || 0,
    }
  },
  data() {
    return {
    }
  },
  async mounted() {
    // const {data} = await getArticles({
    //   favorited: this.user.username,
    //   limit: 5,
    //   offset:0
    // })

    // console.log(data)
  },
  methods: {
    handleDel(article) {
      deleteFavorite(article.slug).then(async () => {
        const{data} = await getArtList(this.active, this.user.username)
        this.acticleList = data.articles
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
