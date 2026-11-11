<template>
  <article class="doc-post">
    <div ref="content" class="doc-post__content" :class="{ 'markdown-body': useMarkdown }">
      <slot></slot>
    </div>
  </article>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "../../assets/styles/markdown.css";

export default {
  name: "DocPost",
  props: {
    useMarkdown: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.$refs.content.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  },
};
</script>

<style>
.doc-post {
  max-width: 900px;
  margin: 0 auto;
}

.doc-post .doc-post__content {
  color: var(--site-text);
  font-family: var(--site-sans);
}

.doc-post__content > h1 {
  margin: 0 0 25px;
  padding: 0 0 18px;
  border-bottom: 1px solid #55442e;
  font: 700 clamp(36px, 5vw, 58px)/1.06 var(--site-display);
  letter-spacing: -0.025em;
}

.doc-post__content > h2 {
  margin-top: 36px;
  padding-bottom: 9px;
  border-bottom: 1px solid var(--site-border);
  font: 700 clamp(23px, 3vw, 30px)/1.25 var(--site-display);
}

.doc-post__content > h3 { color: var(--site-text); }
.doc-post__content > p { color: var(--site-muted); }
.doc-post__content.markdown-body a { color: var(--site-gold); }
.doc-post__content.markdown-body a:hover { text-decoration: underline; }

.doc-post__content.markdown-body pre {
  padding: 16px 18px;
  border: 1px solid var(--site-border);
  border-radius: 4px;
  background: #0e1721;
  color: #d4dce6;
}

.doc-post__content.markdown-body pre code { padding: 0; background: transparent; }

.doc-post__content.markdown-body :not(pre) > code {
  background: #1b2734;
  color: #f0d49f;
}

.doc-post__content.markdown-body table tr { background: var(--site-bg); }
.doc-post__content.markdown-body table tr:nth-child(2n) { background: var(--site-panel); }

.doc-post__content.markdown-body table th,
.doc-post__content.markdown-body table td,
.doc-post__content.markdown-body table tr {
  border-color: var(--site-border);
}

.doc-post__content.markdown-body blockquote {
  color: var(--site-muted);
  border-color: var(--site-border);
}

.doc-post__content.markdown-body hr { background: var(--site-border); }
</style>
