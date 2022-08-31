<template>
    <div>
        <div class="no-page">
          <p class="error">404</p>
          <p class="tip">Not Found</p>
          <p class="CN-tip">页面不存在，请输入正确的网址！</p>
        </div> 
        <div class="home">
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script lang="ts">
   export default{
    name: "NotFound",
};
</script>

<style lang="scss" scoped>
    .no-page{
        text-align: center;
        .error{
            margin-top: 20px;
            padding: none;
            font-size: 48px;
            color: rgb(10, 142, 151); 
        }
        .tip{
            font-size: 28px;
            color: rgb(10, 142, 151);
        }
        .CN-tip{
            margin-top: 12px;
            font-size: 18px;
        }
    }
    .home{
        margin: 100px;
        padding: 8px 0;
        font-size:20px;
        text-align: center;
        background: rgb(197, 235, 235);
    }
</style>