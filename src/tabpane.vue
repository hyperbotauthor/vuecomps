<template lang="html">
  <div :class='{"tabs__light": mode === "light", "tabs__dark": mode === "dark"}'>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { getLocal, setLocal } from "@publishvue/vueutils"
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    width: {
      type: Number,      
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
      default: 'light'
    }
  },
  data () {    
    return {
      selectedIndex: this.getValue(),
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(this.getValue())
  },
  methods: {
    getValue(){
      const value = this.id !== null ? getLocal(this.id, 0) : 0
      this.setValue(value)
      return value
    },
    setValue(value){
      this.value = value      
      if(this.id !== null) setLocal(this.id, value)
    },
    selectTab (i) {
      this.selectedIndex = i

      this.setValue(this.selectedIndex)

      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style scoped>
  li {
    transition: background-color 0.5s, padding 0.2s;
  }

  ul.tabs__header {
    display: block;
    list-style: none;
    margin: 0 0 0 6px;
    padding: 0;
    font-family: "Karla", sans-serif;
    font-size: 16px;
    font-weight: bold;
  }

  ul.tabs__header > li {
    padding: 10px 20px;
    border-radius: 10px;
    margin: 0;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;    
  }

  ul.tabs__header > li.tab__selected {
    padding-left: 30px;
    padding-right: 30px;
    font-weight: bold;
    border-radius: 10px 10px 0px 0px;    
    border-top: solid 3px #000;
    border-left: solid 3px #000;
    border-right: solid 3px #000;    
    border-bottom: solid 3px transparent;
  }

  .tab {    
    display: inline-block;
    color: black;
    padding: 15px;    
    border-radius: 10px;        
    border: solid 3px #000;
  }

  .tabs__light .tab{
    background-color: #fff;
  }

  .tabs__light li {
    background-color: #eee;
    color: #008;    
    opacity: 0.5;
  }

  .tabs__light li.tab__selected {
    background-color: #fff;
    color: #070;
    opacity: 1;
  }

  .tabs__dark .tab{
    background-color: #555;    
  }

  .tabs__dark li {
    background-color: #ddd;
    color: #aaa;
  }

  .tabs__dark li.tab__selected {
    background-color: #555;
    color: white;
  }
</style>