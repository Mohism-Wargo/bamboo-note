<template>
    <div>
        <ul class="tabs" :class="{[classPrefix+'-tabs']: classPrefix}">
            <li v-for="item in dataSource" :key="item.value" class="tabs-item"
            :class="liClass(item)" @click="select(item)">{{item.text}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {text: string, value: string}

@Component
export default class Tabs extends Vue{
    @Prop({required: true, type: Array}) 
    dataSource!: DataSourceItem[];
    @Prop() readonly value!: string;
    @Prop() classPrefix?: string;

    liClass(item: DataSourceItem) {
       return{
      [this.classPrefix +'-tabs-item']: this.classPrefix,
       selected: item.value === this.value
     }
    };

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value)
    };
   }
</script>

<style lang="scss" scoped>
.tabs{
    background: rgb(153, 199, 199);
    display: flex;
    text-align: center;
    font-size: 20px;
    &-item {
        width: 50%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected{
          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgb(108, 134, 138);
          } 
        }
    }
}
</style>