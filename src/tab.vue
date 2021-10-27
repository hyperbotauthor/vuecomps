<template lang="html">
  <div ref="tab" class='tab' v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true,
    }
  },
  methods: {
    setSize(){
      this.$refs.tab.style.minWidth = this.$parent.width.toString() + "px"
      this.$refs.tab.style.maxWidth = this.$parent.width.toString() + "px"
      this.$refs.tab.style.minHeight = this.$parent.height.toString() + "px"
      this.$refs.tab.style.maxHeight = this.$parent.height.toString() + "px"
    },
  },
  updated() {            
    this.setSize()
  },
  mounted() {            
    this.setSize()
  }
}
</script>

<style>  
</style>