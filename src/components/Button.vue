<template>
  <button class="button"
          @click="$emit('click',$event)">
     <slot/>
  </button>  
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  
}
</script>

<style lang="scss" scoped>
.button{
         background:#a5cdd4;
         color: #fff;
         border-radius: 4px;
         border: 1px solid rgb(224, 223, 223);
         width: 114px;
         height: 40px;
         margin-top: 6px;
         margin-bottom: 6px;
         &-wrapper{
            text-align: center;
            padding: 18px;
            svg{
            width: 32px;
            height: 32px;
        }
      }
     }
</style>
