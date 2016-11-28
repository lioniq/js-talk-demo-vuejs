<template>
<div class="item-photo">
  <div style="width: 100%; position: relative;">
    <img :src="photo.image_url" style="width: 100%;"/>
  </div>
</div>

</template>

<script>

export default {
  name: 'ItemPhoto',

  props: {
    photo: {}
  }
}
</script>
