export default {
  basic: `
Bind String: <lol-input value="Hello League UI !"></lol-input>
Bind Variable: <lol-input :value="true"></lol-input>`,
  placeholder: `
Placeholder: <lol-input placeholder="placeholder"></lol-input>`,
  disabledAndReadonly: `
Disabled: <lol-input value="Hello League UI !" disabled></lol-input>
Readonly: <lol-input :value="true" readonly></lol-input>`,
  hint: `
<lol-input icon-name="right" hint="Success" hint-type="success"></lol-input>
<lol-input icon-name="info" hint="Info" hint-type="info"></lol-input>
<lol-input icon-name="warning" hint="Warning" hint-type="warning"></lol-input>
<lol-input icon-name="error" hint="Danger" hint-type="danger"></lol-input>`,
  twoWayBindingHtml: `
<lol-input v-model="text"></lol-input>

<p>Result: {{text}}</p>`,
  twoWayBindingJs: `
data() {
    return {
        text: 'Hello League UI !'
    }
}`
}