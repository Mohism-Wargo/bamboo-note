<template>
    <div class="layout-wrapper">
        <div class="content" :class=" classPrefix && `${classPrefix}-content` ">
            <slot></slot>
        </div> 
        <Nav/>
    </div>
</template>

<script lang="ts">
   export default{
    props: ['classPrefix'],
    name: "Layout",
   };
</script>

<style lang="scss" scoped>
   .layout-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;
   }
   .content{
    flex-grow: 1;
    overflow: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar { width: 0px; display: none;}    
   }
</style>