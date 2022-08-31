<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">-- 新增标签 --</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
            :class="{selected: selectedTags.indexOf(tag.name)>=0}"
            @click="toggle(tag)">{{tag.name}}</li>
        </ul>                
    </div>
</template>

<script lang="ts">
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
    padding: 6px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current {
        display: flex;
        flex-wrap: wrap;
        > li {
            background: #bfd6da;
            box-shadow: 1px 0.8px #c5c5c5;
            $h: 30px;
            height: $h;
            line-height: $h;
            border-radius: 6px;
            padding: 0 18px;
            margin-right: 16px;
            margin-top: 4px;
            margin-bottom: 4px;
            &.selected{
                background: #62afbd;
                color: #fff;
            }
        }
    }
    > .new{
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        height: 40px;
        width: 114px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #a5cdd4;
        border-radius: 6px;
        border: 2px solid #ebecec;
      button{
          background: transparent;
          border: none;
          color: #fff;
          font-size: 16px;
      }
    }
}
</style>