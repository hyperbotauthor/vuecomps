<template>
  <div class="dispcont">
    <input ref="text" type="text" v-on:input="textchanged" v-on:keyup.enter="enterpressed"></input>
  </div>
</template>

<script>
  import { getLocal, setLocal } from "@publishvue/vueutils"

  export default {
    name: "Perstext",
    methods: {
      data(){        
        return {
          value: null
        }
      },
      getValue(){
        const stored = getLocal(this.id, null)
        const value = (stored === null ? this.default : stored) || ""
        this.setValue(value)
        return value
      },
      setValue(value, hard){
        setLocal(this.id, value)
        this.value = value
        if(hard) this.$refs.text.value = value        
      },
      textchanged(){
        const value = this.$refs.text.value

        this.setValue(value)

        this.$emit("perstextchanged", {
          id: this.id,
          value: value
        })
      },
      enterpressed(){
        const value = this.$refs.text.value
        
        this.$emit("enterpressed", {
          id: this.id,
          value: value
        })
      }
    },
    props: {
      id: {
        type: String,
        required: true,
      },
      default: {
        type: String,
        default: "",
      }
    },
    mounted(){
      this.setValue(this.getValue(), true)
    }
  }
</script>

<style scoped>
  .dispcont {
    display: inline-block;
    margin: 1px;
  }  
</style>
