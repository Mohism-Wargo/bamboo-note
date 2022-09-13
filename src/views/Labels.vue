<template>
    <div>
       <layout>
        <div class="tagTitle">管理标签</div>
        <div class="tags">
            <div class="tag"
                         :class="{selected: selectedTags.indexOf(tag.name)>=0}"
                         @click="toggle(tag)" 
                         v-for="tag in tags" :key="tag.id"
                         >
                <span>{{tag.name}}</span>
        </div>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" 
                    @click="createTag">
                    -- 新增标签 --
            </Button>
            <Button class="deleteTag" 
                    @click="deleteTag">
                    -- 删除标签 --
            </Button>
        </div>
        </layout> 
    </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';

  @Component({
    components: {Button},
  })
  export default class Labels extends mixins(TagHelper) {
    selectedTags: string[] = [];

    get tags(){
      return this.$store.state.tagList;
    }
    
    beforeCreate() {
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
   .tags{
        height: calc(100% - 136px);
        background: #f1f1f1;
        display: flex;
        flex-wrap: wrap;
        align-content:flex-start;
        overflow: scroll;
        scrollbar-width: none;
        &::-webkit-scrollbar { width: 0px; display: none;}
       >.tag{
        margin: auto;
        margin-top: 6px;
        padding: 0 auto;
        width: 116px;
        height: 42px;
        color: rgb(50, 50, 50);
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;        
        background: #bfd6da;
        border-radius: 6px;
        border: 2px solid #c2c8c9;
        &.selected{
                background: #899e9e;
                color: #e6e7e7;
          }
       }
     }
     .createTag{
         background:#a5cdd4;
         color: #fff;
         border-radius: 4px;
         border: 1px solid rgb(224, 223, 223);
         width: 114px;
         height: 40px;
         margin: 6px 6px;
         &-wrapper{
            background: #cfdcdd;
            text-align: center;
            padding: 18px;
          }
        }
        .removeTag{
         background:#a5cdd4;
         color: #fff;
         border-radius: 4px;
         border: 1px solid rgb(224, 223, 223);
         width: 114px;
         height: 40px;
         margin: 6px 6px;
         &-wrapper{
            text-align: center;
            padding: 18px;
          }
        }
        .tagTitle{
          background: rgb(159, 199, 199);
          height: 48px;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
</style>