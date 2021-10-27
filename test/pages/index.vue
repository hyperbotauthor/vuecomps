<template>
  <div>    
    <div class="nav">
      <NuxtLink to="/">Local</NuxtLink>
      |
      <NuxtLink to="/indexnpm">Npm</NuxtLink>      
    </div>      
    <div class="maincont">
      <button class='change__style' @click='changeStyle()'>Change Style</button>
      <Tabpane :width="600" :height="300" id="mytabpane" :mode="mode">
        <Tab title="Labeled">
          <Labeled label="My Label">
            My Content
          </Labeled>
        </Tab>
        <Tab title="Perscheck">
          <Perscheck ref="myperscheck" id="myperscheck" v-on:perscheckchanged="perscheckchanged" />
        </Tab>
        <Tab title="Perstext">
          <Perstext ref="myperstext" id="myperstext" v-on:perstextchanged="perstextchanged" v-on:enterpressed="enterpressed" />
        </Tab>
        <Tab title="Perscombo">
          <Perscombo ref="myperscombo" id="myperscombo" :options="options" v-on:perscombochanged="perscombochanged" > 
          </Perscombo>
        </Tab>
      </Tabpane>
    </div>
  </div>
</template>

<script>
// SLOT
import Labeled from "../../src/labeled.vue"
import Perscheck from "../../src/perscheck.vue"
import Perscombo from "../../src/perscombo.vue"
import Perstext from "../../src/perstext.vue"
import Tab from "../../src/tab.vue"
import Tabpane from "../../src/tabpane.vue"
// SLOT
export default {
  components: {
    Labeled,
    Perscheck,
    Perscombo,
    Perstext,
    Tab,
    Tabpane
  },
  data () {
    return {
      mode: 'light',
      options: [
        {display: "Foo", value: "foo"},
        {display: "Bar", value: "bar"},
        {display: "Baz", value: "baz"}
      ],
    }
  },
  methods: {    
    changeStyle () {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    },
    perscheckchanged(ev){
      console.log(ev)
      console.log(this.$refs.myperscheck.value)
    },
    perstextchanged(ev){
      console.log(ev)
      console.log(this.$refs.myperstext.value)
    },
    enterpressed(ev){
      console.log(ev)
      console.log(this.$refs.myperstext.value)
    },
    perscombochanged(ev){
      console.log(ev)
      console.log(this.$refs.myperscombo.value)
    },
  }
}
</script>

<style> 
  .nav {
    padding: 5px;
    background-color: #ddd;
  }   
  .maincont {
    padding: 10px;
    background-color: #eee;
  }
  .change__style {
    background-color: #eee;
    font-size: 1em;    
    padding: 5px;
    margin-bottom: 10px;
  }
</style>