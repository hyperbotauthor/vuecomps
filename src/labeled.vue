<template>
  <div class="dispcont">    
    <div class="cont">
      <div v-if="!rev" class="label left">
        {{ label }}
      </div>      
      
      <div class="content">
        <slot></slot>
      </div>
      
      <div v-if="rev" class="label right">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Labeled",
    props: {
      label: {
        type: String,
        required: true,
      },
      rev: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style scoped>
  .dispcont {
    display: inline-block;
    margin: 1px;
    background-color: #ddd;    
    border: solid 1px #aaa;
    box-shadow: 2px 2px #aaa;
  }
  .cont {
    display: flex;    
    align-items: center;
    padding: 2px;    
  }
  .label {        
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;    
    font-family: monospace;    
    font-size: 14px;
  }
  .label.left {
    margin-right: 3px;
    background-color: #eef;
  }
  .label.right {
    margin-left: 3px;
    background-color: #eef;
  }
  .content {    
    padding: 3px;    
    background-color: #dfd;
  }
</style>
