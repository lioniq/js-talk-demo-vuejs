<template>
  <div id="item-detail">
    <nav-bar-placeholder></nav-bar-placeholder>

    <cover-photo :coverPhoto="coverPhoto"></cover-photo>

    <article style="margin: 0 15px;">
      <h1 style="font-size: 1.2em;">{{ title }}</h1>
      <h4 class="price" style="color: green;">{{ priceLabel }}</h4>
    </article>

    <item-photo v-for="photo in photos" :photo="photo"></item-photo>

  </div>
</template>

<script>
import NavBarPlaceholder from './NavBarPlaceholder.vue'
import CoverPhoto from './CoverPhoto.vue'
import ItemPhoto from './ItemPhoto.vue'

export default {
  name: 'ItemDetailView',

  components: {
    NavBarPlaceholder,
    CoverPhoto,
    ItemPhoto
  },

  data() {
    return {

      title: "",
      priceLabel: "",
      coverPhoto: "",

      photos: []
    }
  },

  created () {
    console.log("hello !")
    this.getItemDetail()
  }, 

  watch: {
    '$route': 'getItemDetail'
  }, 

  methods: {
    getItemDetail() {

      // params
      var itemId = this.$route.params.id
      if (itemId === undefined) {
        itemId = "1074578361b531a8dfe6fb6f1e9bf5d7"
      }
      
      var vm = this;

      // request callback
      var callback = function(response) {
          console.log("[getItemDetail callback] response: " + JSON.stringify(response.body));

          let item = response.body
          vm.title = item.title
          vm.priceLabel = item.price_label
          vm.coverPhoto = item.square_cover_photo_url
          vm.photos = item.detail_photos

      }

      var errorCallback = function(response) {
          console.log("[error callback] response: " + JSON.stringify(response.body));
      }

      // request url 
      let url = API_URL + "/items/" + itemId

      // request headers
      let headers = {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-APP-KEY": APP_KEY,
          "X-APP-SECRET": APP_SECRET
      }

      // vue-resource
      this.$http.get(url, {headers: headers}).then(callback, errorCallback);
      
    }
  }
}

</script>

