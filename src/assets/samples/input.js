export default {
  basic: `
Bind String: <lol-input value="Hello League UI !"></lol-input>`,
  placeholder: `
Placeholder: <lol-input placeholder="placeholder"></lol-input>`,
  disabledAndReadonly: `
Disabled: <lol-input value="Hello League UI !" disabled></lol-input>
Readonly: <lol-input value="It's Readonly" readonly></lol-input>`,
  hint: `
<lol-input icon-name="check-fill" hint="Success" hint-type="success"></lol-input>
<lol-input icon-name="notice-fill" hint="Info" hint-type="info"></lol-input>
<lol-input icon-name="warn-fill" hint="Warning" hint-type="warning"></lol-input>
<lol-input icon-name="close-fill" hint="Danger" hint-type="danger"></lol-input>`,
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