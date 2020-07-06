export default {
  basic: `
<lol-row class="row">
    <lol-col :span="6">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :span="6">
        <div class="col-item col-item-warning"></div>
    </lol-col>
    <lol-col :span="6">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :span="6">
        <div class="col-item col-item-warning"></div>
    </lol-col>
</lol-row>
`,
  gutter: `
<lol-row :gutter="10" class="row">
    <lol-col :span="6">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :span="6">
        <div class="col-item col-item-warning"></div>
    </lol-col>
    <lol-col :span="6">
        <div class="col-item col-item-primary"></div>
    </lol-col>
    <lol-col :span="6">
        <div class="col-item col-item-warning"></div>
    </lol-col>
</lol-row>`,
  spanAndOffset: `
<lol-row class="row">
  <lol-col :span="1" :offset="2">
    <div class="col-item col-item-primary"></div>
  </lol-col>
  <lol-col :span="3" :offset="4">
    <div class="col-item col-item-warning"></div>
  </lol-col>
  <lol-col :span="5" :offset="6">
    <div class="col-item col-item-primary"></div>
  </lol-col>
</lol-row>`,
  responsive: `
<lol-row class="row">
  <lol-col :span="24" :i-pad="{span: 20}" :narrowPc="{span: 16}" :pc="{span: 12}" :widePc="{span: 8}">
    <div class="col-item col-item-primary"></div>
  </lol-col>
</lol-row>`
}