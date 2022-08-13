<template>
    <div>
       <layout>
        <ol class="tags">
            <li v-for="tag in tags" :key="tag">
                <span>{{tag}}</span> 
                <Icon name="rightArrows"/>
            </li>
        </ol>
        <div class="createTag-wrapper">
            <button class="createTag" @click="createTag">
             <Icon name="add"/>
            </button>
        </div>
        </layout> 
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';

    tagListModel.fetch();
    @Component
    export default class Labels extends Vue {
       tags = tagListModel.data;

       createTag() {
        const name = window.prompt('请填写标签名');
        if(name) {
            const message = tagListModel.create(name);
            if (message === 'duplicated') {
                window.alert('请不要添加重复的标签！')
            }else if(message === 'success'){
                window.alert('添加成功！')
            }
         }
       }
    };
</script>

<style lang="scss" scoped>
     .tags {
        font-size: 16px;
       >li{
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