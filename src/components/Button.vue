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
         background:rgb(193, 207, 207);
         color: #fff;
         border-radius: 4px;
         border: 1px solid rgb(187, 184, 184);
         width: 90px;
         height: 44px;
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
