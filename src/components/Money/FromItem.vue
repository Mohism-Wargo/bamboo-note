<template>
    <div>
    <label class="FromItem">
        <span class="name">{{fieldName}}</span> 
        <input type="text" 
            :value="value"
            @input="onValueChanged($event.target.value)"
            :placeholder="placeholder">
    </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class FromItem extends Vue{
    @Prop({default: ''}) readonly value!: string;

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    onValueChanged(value: string){
        this.$emit('update:value',value);
    }
  }

</script>

<style lang="scss" scoped>
.FromItem{
    background: rgb(217, 230, 230);
    font-size: 16px;
    padding-left: 12px;
    display: flex;
    align-items: center;
    .name{
        padding-right: 16px;
    }
    input{
        height: 44px;
        flex-grow: 1;
        background: transparent;
        border: none;
        padding-right: 16px;
    }
}
</style>