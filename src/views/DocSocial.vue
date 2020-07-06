<template>
  <div class="doc-social">
    <doc-post>
      <h1>Social</h1>
      <p>If there are any questions, you can post an Issue on the
        <a href="https://github.com/yingjieweb/league-ui/issues" target="_blank">Github Issue Page.</a>
        You can also contact me directly.
      </p>
      <h2>Email</h2>
      <p>
        <strong> 1184061078@qq.com </strong>
      </p>
      <h2>Wechat</h2>
      <img class="qr" src="../assets/images/wechat.jpg" alt="wechat">
    </doc-post>
  </div>
</template>

<script>
  export default {
    name: "DocSocial",
  }
</script>

<style scoped lang="scss">
  .doc-social {
    .qr {
      width: 30%;
    }
  }
</style>
