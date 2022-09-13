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
    height: calc(100% - 338px);
    background: #cfdcdd;
    font-size: 14px;
    display: flex;
    flex-direction: column-reverse;
    > .current {
        background: #edeeee;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        align-content:flex-start;
        overflow: scroll;
        scrollbar-width: none;
        &::-webkit-scrollbar { width: 0px; display: none;}
        > li {
            background: #bfd6da;
            box-shadow: 1px 0.8px #c5c5c5;
            $h: 34px;
            height: $h;
            line-height: $h;
            font-size: 15px;
            border-radius: 6px;
            padding: 0 22px;
            margin: 6px 8px;
            &.selected{
                background: #62afbd;
                color: #fff;
            }
        }
    }
    > .new{
        margin: 6px auto;
        min-height: 40px;
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