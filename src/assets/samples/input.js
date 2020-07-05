export default {
  basic: `
<label>
    Name
    <lol-input></lol-input>
</label>`,
  hint: `
<lol-input
    class="input"
    value="Password"
    placeholder="password"
    icon-name="check"
    hint="Success: Valid Password."
    hintType="success">
</lol-input>
<lol-input
    class="input"
    value="Password"
    placeholder="password"
    icon-name="cancel"
    hint="Error: Invalid Password."
    hintType="danger">
</lol-input>
<lol-input
    class="input"
    value="Password"
    placeholder="password"
    icon-name="warning"
    hint="Warn: Password is easy to guess."
    hintType="warning">
</lol-input>
<lol-input
    class="input"
    value="Password"
    placeholder="password"
    icon-name="notification"
    hint="Info: Keep typing password."
    hintType="info">
</lol-input>`,
  twoWayBindingHtml: `
<lol-input
    v-model="text"
    placeholder="password">
</lol-input>

<p>Result: {{text}}</p>`,
  twoWayBindingJs: `
data() {
    return {
        text: 'Hello World'
    }
}`
}