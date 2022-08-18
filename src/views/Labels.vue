<template>
    <div>
       <layout>
        <div class="tags">
            <router-link class="tag" 
                         v-for="tag in tags" :key="tag.id"
                         :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span> 
                <Icon name="rightArrows"/>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" 
                    @click="createTag">
                    <Icon name="add"/>
            </Button>
        </div>
        </layout> 
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import store from '@/store/index2.ts';

    @Component({
        components: {Button}
    })
    export default class Labels extends Vue {
       tags = store.tagList;

       createTag() {
        const name = window.prompt('请填写标签名');
        if(name) {
            store.createTag(name);
         }
       }
    };
</script>

<style lang="scss" scoped>
     .tags {
        font-size: 16px;
       >.tag{
        margin: 6px 6px;
        padding: 0 20px;
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgb(207, 235, 235);
        border-radius: 6px;
        border: 1px solid rgb(187, 184, 184);
        svg{
            width: 24px;
            height: 24px;
        }
       }
     }
     .createTag{
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