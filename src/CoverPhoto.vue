<template>
<div id="cover-photo">
  <div style="width: 100%; position: relative;">
    <img :src="coverPhoto" style="width: 100%;"/>
  </div>
</div>

</template>

<script>

export default {
  name: 'CoverPhoto',

  props: {
    coverPhoto: ""
  }
}
</script>
