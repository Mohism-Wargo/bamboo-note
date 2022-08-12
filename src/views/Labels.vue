<template>
    <div>
       <layout>
        <ol class="tags">
            <li>
                <span>衣</span> 
                <Icon name="rightArrows"/>
            </li>
            <li>
                <span>食</span>  
                <Icon name="rightArrows"/>
            </li>
            <li>
                <span>住</span> 
                <Icon name="rightArrows"/>
            </li>
            <li>
                <span>行</span>
                <Icon name="rightArrows"/>
            </li>
        </ol>
        <div class="createTag-wrapper">
            <button class="createTag">
             <Icon name="add"/>
            </button>
        </div>
        </layout> 
    </div>
</template>

<script lang="ts">
    export default{
    name: "Labels",
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