<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
            :class="{selected: selectedTags.indexOf(tag.name)>=0}"
            @click="toggle(tag)">{{tag.name}}</li>
        </ul>                
    </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import { Component, Prop } from 'vue-property-decorator';
   import {mixins} from 'vue-class-component';
   import TagHelper from '@/mixins/TagHelper';

   @Component
   export default class Tags extends mixins(TagHelper) {
    selectedTags: string[] = [];

    get tagList(){
       return this.$store.state.tagList;  
    }

    created(){
       this.$store.commit('fetchTags');
    }
    toggle(tag: Tag) {
        const index = this.selectedTags.indexOf(tag.name);
        if(index>=0){
            this.selectedTags.splice(index,1)
        }else{
           this.selectedTags.push(tag.name);
        }
        this.$emit('update:value',this.selectedTags)
      }
    }

</script>

<style lang="scss" scoped>
.tags {
    font-size: 14px;
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current {
        display: flex;
        flex-wrap: wrap;
        > li {
            background: #d9d9d9;
            $h: 24px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 16px;
            margin-right: 16px;
            margin-top: 4px;
            &.selected{
                background: #3b8896;
                color: #fff;
            }
        }
    }
    > .new{
        padding: 16px 0;
        button{
            background: transparent;
            border: none;
            color:rgb(107, 103, 103);
            border-bottom: 1px solid;
            padding: 0 3px;
        }
    }
}
</style>