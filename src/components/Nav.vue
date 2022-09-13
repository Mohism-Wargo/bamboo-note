<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected"> 
            <Icon name="money" />
            记账
        </router-link>

        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels" />
            标签
        </router-link>

        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics" />
            明细
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default{
    name: "Nav",
};
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    nav {
        @extend %outerShadow;
        display:flex;
        flex-direction: row;
        font-size: 13px;
        background:rgb(215, 229, 235) ;
        color:rgb(24, 129, 129);
        > .item {
            padding: 2px 0;
            width: 33.33333333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon{
                width: 24px;
                height: 24px;
            }
        }
        > .item.selected{
            background-color: rgb(130, 212, 226);
        }
    }
</style>