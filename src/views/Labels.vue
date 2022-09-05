<template>
    <div>
       <layout>
        <div class="tags">
            <router-link class="tag" 
                         v-for="tag in tags" :key="tag.id"
                         :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" 
                    @click="createTag">
                    -- 新增标签 --
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
    get tags(){
      return this.$store.state.tagList;
    }
    beforeCreate() {
      this.$store.commit('fetchTags');
    }
  }

</script>

<style lang="scss" scoped>
   .tags{
        height: 453px;
        background: #e6e7e7;
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
        &::-webkit-scrollbar { width: 0px; display: none;}
       >.tag{
        margin: auto;
        margin-top: 6px;
        padding: 0 auto;
        width: 116px;
        min-height: 50px;
        color: rgb(50, 50, 50);
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;        
        background: #bfd6da;
        border-radius: 6px;
        border: 2px solid #c2c8c9;
       }
     }
     .createTag{
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
          }
        }
</style>