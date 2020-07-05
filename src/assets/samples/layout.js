export default {
  basic: `
<lol-row class="row">
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </lol-col>
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </lol-col>
</lol-row>
`,
  gutter: `
<lol-row :gutter="10" class="row">
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </lol-col>
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </lol-col>
</lol-row>`,
  spanAndOffset: `
<lol-row class="row">
    <lol-col :pc="{span: 1, offset: 2}">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :pc="{span: 3, offset: 4}">
        <div class="col-item col-item-warning"></div>
    </lol-col>
    <lol-col :pc="{span: 5, offset: 6}">
        <div class="col-item col-item-primary"></div>
    </lol-col>
</lol-row>`
}