# vuecomps

Vue component library for Vue 2.

Webpack build is based on the wonderful project https://github.com/vitogit/vue-chessboard , however simplified and actualized to Webpack 5. Style is incorporated in the `js` module, rather than having to import a separate `css` file.

# Acknowledgments

https://github.com/matthewmaribojoc/learn-vue-tab

# Installation

```
yarn add @publishvue/vuecomps
```

# Usage

Import in Nuxt.js page

```javascript
<script>
import { Labeled } from "@publishvue/vuecomps"

export default {
  components: {
    Labeled
  }
}
<script>
```

Then use in the template

```html
<template>
  <div class="cont">
    <Labeled label="Demo Label">
      Normal
    </Labeled>
    vs.
    <Labeled label="Demo Label" rev="true">
      Reversed
    </Labeled>
  </div>
</template>

<style>
  .cont {
    display: flex;
    align-items: center;    
  }
</style>
```

# components

## Labeled

Labeled content. Label can be either on left or right side.

### Props

#### `label`

- `String`, required. Label to be displayed.

#### `rev`

- `Boolean`, optional, defaults to `false`. By default the label is rendered on the left side. If `rev` is `true` then the label will be rendered on the right side.

## Perscheck

Persistent checkbox.

### Props

#### `id`

- `String`, required. Local storage unique ID, to be used to store checkbox state.

#### `default`

- `Boolean`, optional, defaults to `false`. Default value to use when there is not a yet a stored value in local storage, `false` for unchecked and `true` for checked.

### Events

#### `perscheckchanged`

Event content

- `id`

Local storage unique ID.

- `value`

Value of the persistent checkbox, `false` for unchecked, `true` for checked.

### Examining the value programatically

Assuming the `ref` of the component is `myperscheck`

```javascript
console.log(this.$refs.myperscheck.value)
```

### Setting the value programatically

Not possible. If you want a component tied to your data, then use a conventional checkbox.

## Perstext

Persistent text input.

### Props

#### `id`

- `String`, required. Local storage unique ID, to be used to store checkbox state.

#### `default`

- `String`, optional, defaults to empty string. Default value to use when there is not a yet a stored value in local storage.

### Events

#### `perstextchanged`

Event content

- `id`

Local storage unique ID.

- `value`

Value of the persistent text input.

### Examining the value programatically

Assuming the `ref` of the component is `myperstext`

```javascript
console.log(this.$refs.myperstext.value)
```

### Setting the value programatically

Not possible. If you want a component tied to your data, then use a conventional text input.

## Perscombo

Persistent combo box.

### Props

#### `id`

- `String`, required. Local storage unique ID, to be used to store checkbox state.

#### `options`

- `Array`, required. Each element of the array is an object that has a `display` and a `value` field. The former will be shown to the user, that latter will be returned as selected value.

```javascript
[
  {
    display: "Display1", 
    value: "value1",
  },
  {
    display: "Display2", 
    value: "value2",
  },
  ...
}
```

### Events

#### `perscombochanged`

Event content

- `id`

Local storage unique ID.

- `value`

Selected value of the persistent combo.


## Tabpane

Tabpane. To be used with the Tab component.

### Props

#### `width`

- `Number`, required. Width of tabs in px.

#### `height`

- `Number`, required. Height of tabs in px.

#### `mode`

- `String`, optional, defaults to `light`. Mode of the Tabpnae, possible values: `light`, `dark`.

### Events

None.

## Tab

Tab. To be used with the Tabpane component.

### Props

#### `title`

- `String`, optional, defaults to `Tab`. Title of the tab.

### Events

None.

### Example:

```html
<Tabpane>
  <Tab title="Labeled">
    <Labeled label="My Label">
      My Content
    </Labeled>
  </Tab>
  <Tab title="Perscheck">
    <Perscheck id="myperscheck" />
  </Tab>
  <Tab title="Perstext">
    <Perstext id="myperstext" />
  </Tab>
</Tabpane>
```
