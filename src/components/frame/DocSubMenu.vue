<template>
  <ul class="doc-sub-menu">
    <li class="types" v-for="menuItem in subMenu" :key="menuItem.type">
      <p class="main-item-wrapper">
        <span class="main-item">{{ menuItem.type }}</span>
      </p>
      <ul class="components">
        <li
          class="sub-item-wrapper"
          v-for="link in menuItem.urls"
          :key="link.title"
        >
          <router-link class="sub-item" :to="link.url">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DocSubMenu",
  data() {
    return {
      subMenu: [
        {
          type: "LAYOUT",
          urls: [
            { title: "Design", url: "/components/design" },
            { title: "Layout", url: "/components/layout" },
            { title: "Container", url: "/components/container" },
            // {title: 'Sticky', url: '/components/sticky'}
          ],
        },
        {
          type: "GAME",
          urls: [
            { title: "Hero", url: "/components/hero" },
            // {title: 'Blood', url: '/components/blood'},
            { title: "Badge", url: "/components/badge" },
          ],
        },
        {
          type: "BASIC",
          urls: [
            { title: "Icon", url: "/components/icon" },
            { title: "Button", url: "/components/button" },
          ],
        },
        {
          type: "FORM",
          urls: [
            // {title: 'Label', url: '/components/label'},
            { title: "Input", url: "/components/input" },
            // {title: 'Select', url: '/components/select'},
            // {title: 'Slider', url: '/components/slider'},
            // {title: 'Switch', url: '/components/switch'},
            // {title: 'Radio', url: '/components/radio'},
            // {title: 'Checkbox', url: '/components/checkbox'},
            // {title: 'DatePicker', url: '/components/date-picker'},
            // {title: 'Uploader', url: '/components/uploader'},
            { title: "Cascader", url: "/components/cascader" },
            // {title: 'Validator', url: '/components/validator'}
          ],
        },
        {
          type: "MESSAGE",
          urls: [
            { title: "Toast", url: "/components/toast" },
            // {title: 'Modal', url: '/components/modal'},
            { title: "Popover", url: "/components/popover" },
          ],
        },
        {
          type: "NAVIGATION",
          urls: [
            // {title: 'Nav', url: '/components/nav'},
            { title: "Tabs", url: "/components/tabs" },
            // {title: 'Carousel', url: '/components/carousel'}
          ],
        },
        {
          type: "DATA",
          urls: [
            // {title: 'Table', url: '/components/table'},
            // {title: 'Pager', url: '/components/pager'},
            // {title: 'Scroll', url: '/components/scroll'},
            { title: "Collapse", url: "/components/collapse" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.doc-sub-menu {
  height: 82vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .types {
    margin-bottom: 20px;

    .main-item-wrapper {
      .main-item {
        color: $--color-white;
        font-size: 3em;
        font-family: overwatch-italic, serif;
        transition: all 0.3s;
      }
    }

    .components {
      .sub-item-wrapper {
        display: flex;

        .sub-item {
          color: #e2f2ff;
          font-family: overwatch, serif;
          font-size: 1.5em;
          transition: all 0.3s;
        }

        &:hover {
          .sub-item {
            transform: scale(1.3);
            padding-left: 15px;
          }
        }
      }
    }
  }
}
</style>
