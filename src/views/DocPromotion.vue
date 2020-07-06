<template>
  <div class="doc-promotion">
    <doc-post>
      <h1>Promotion</h1>

      <p>
        League of Legends official release season promotion CG every year, I really like them.
        If you're also a League of Legends player, you can follow this channel on
        <a href="https://www.bilibili.com/">Bilibili</a>.
      </p>

      <div ref="videoWrapper">
        <iframe
                class="video"
                src="//player.bilibili.com/player.html?aid=82724200&bvid=BV1mJ411G7ue&cid=141538058&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true">
        </iframe>
      </div>
    </doc-post>
  </div>
</template>

<script>
  export default {
    name: "DocPromotion",
  }
</script>

<style scoped lang="scss">
  .doc-promotion {
    .video {
      width: 100%;
      height: 80vh;
    }
  }
</style>
