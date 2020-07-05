export default {
  basic: `
<lol-popover position="top">
    <template slot="content">
        <div>Popover Content</div>
    </template>
    <lol-button>Pop It!</lol-button>
</lol-popover>`,
  direction: `
<lol-popover class="popover" position="top">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button>Top</lol-button>
</lol-popover>
<lol-popover class="popover" position="bottom">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button type="warning">Bottom</lol-button>
</lol-popover>
<lol-popover class="popover" position="left">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button type="info">Left</lol-button>
</lol-popover>
<lol-popover class="popover" position="right">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button type="danger">Right</lol-button>
</lol-popover>`,
  hover: `
<lol-popover trigger="hover" class="popover" position="top">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button>Top</lol-button>
</lol-popover>
<lol-popover trigger="hover" class="popover" position="bottom">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button type="warning">Bottom</lol-button>
</lol-popover>
<lol-popover trigger="hover" class="popover" position="left">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button type="info">Left</lol-button>
</lol-popover>
<lol-popover trigger="hover" class="popover" position="right">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <lol-button type="danger">Right</lol-button>
</lol-popover>`,
  close: `
<lol-popover position="top">
    <template slot="content" slot-scope="{close}">
        <div>Popover Content, Hello World</div>
        <lol-button @click="close">Cancel</lol-button>
    </template>
    <lol-button>Top</lol-button>
</lol-popover>`
}