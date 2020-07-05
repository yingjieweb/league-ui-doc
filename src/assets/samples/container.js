export default {
  basic: `
<lol-container class="container">
    <lol-header class="header">Header</lol-header>
    <lol-content class="content">Content</lol-content>
    <lol-footer class="footer">Footer</lol-footer>
</lol-container>`,
  outerSider: `
<lol-container>
    <lol-sider class="sider">Sider</lol-sider>
    <lol-container class="container">
        <lol-header class="header">Header</lol-header>
        <lol-content class="content">Content</lol-content>
        <lol-footer class="footer">Footer</lol-footer>
    </lol-container>
</lol-container>
`,
  innerSider: `
<lol-container class="container">
    <lol-header class="header">Header</lol-header>
    <lol-container>
        <lol-sider class="sider">Sider</lol-sider>
        <lol-content class="content">Content</lol-content>
    </lol-container>
    <lol-footer class="footer">Footer</lol-footer>
</lol-container>
`,
  toggle: `
<lol-container class="container">
    <lol-header class="header">Header</lol-header>
    <lol-container>
        <lol-sider :visible="isVisible" class="sider">Sider</lol-sider>
        <lol-content class="content">
            Content
            <lol-button @click="isVisible = !isVisible">Toggle Sider</lol-button>
        </lol-content>
    </lol-container>
    <lol-footer class="footer">Footer</lol-footer>
</lol-container>`
}