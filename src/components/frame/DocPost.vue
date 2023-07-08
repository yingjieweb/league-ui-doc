<template>
  <div class="doc-post">
    <div class="author">
      <img
        @click="jumpToGithub"
        class="add-friend"
        src="../../assets/images/add-friend.png"
        alt="Add"
      />
      <span class="author-info-wrapper">
        <img
          class="nidalee"
          src="../../assets/images/author.jpg"
          alt="Nidalee"
          title="Nidalee"
        />
        <span class="name">YingJieWeb</span>
      </span>
    </div>
    <section
      ref="markdownDoc"
      data-doc
      :class="{ 'markdown-body': useMarkdown }"
    >
      <slot></slot>
    </section>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
import "../../assets/styles/markdown.css";

export default {
  name: "DocPost",
  props: {
    useMarkdown: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isShowPayQR: false,
    };
  },
  mounted() {
    this.highlight();
  },
  methods: {
    jumpToGithub() {
      window.location.href = "https://github.com/yingjieweb";
      // window.open("https://github.com/yingjieweb",'top')
    },
    highlight() {
      let blocks = this.$refs.markdownDoc.querySelectorAll("pre code");

      blocks.forEach((block) => {
        hljs.highlightBlock(block);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.doc-post {
  height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @include pc {
    width: 66vw;
    margin: 5vh 3vw 2vh auto;
  }
  @include tablet {
    width: 66vw;
    margin: 5vh 3vw 2vh auto;
  }
  margin: 5vh 3vw;
  position: relative;
  padding: 10px 20px 20px;
  background: rgba(252, 246, 229, 0.92);

  .author {
    @include pc {
      display: flex;
    }
    @include tablet {
      display: flex;
    }
    display: none;
    position: fixed;
    top: 5vh;
    right: 3vw;
    z-index: 3;

    .add-friend {
      height: 50px;
      width: 50px;
      margin-right: 5px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 3px 3px #fff;
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &-info-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      color: white;
      background: rgba(51, 51, 51, 0.5);
      border-left: 5px solid #b1fb23;

      .nidalee {
        height: 50px;
        width: 50px;
      }

      .name {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 50px;
      }
    }
  }

  .markdown-body[data-doc] {
    > h1,
    h2,
    h3 {
      border-color: #2f3e4e;
    }
  }
}
</style>
