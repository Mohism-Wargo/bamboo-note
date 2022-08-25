<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
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
   import store from '@/store/index'

   @Component({
     computed: {
        tagList(){
            // return this.$store.fetchTags();
            return []
        }
     }
   })
   export default class Tags extends Vue {
    selectedTags: string[] = [];

    toggle(tag: Tag) {
        const index = this.selectedTags.indexOf(tag.name);
        if(index>=0){
            this.selectedTags.splice(index,1)
        }else{
           this.selectedTags.push(tag.name);
        }
        this.$emit('update:value',this.selectedTags)
      }
      create() {
        const name = window.prompt('请输入标签名');
        if (!name) {return window.alert('标签名不能为空');}
        // store.createTag(name);      
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