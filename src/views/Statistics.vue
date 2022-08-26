<template>
        <Layout>
            <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
            <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        </Layout>
</template>

<style scoped lang="scss">
   ::v-deep .type-tabs-item {
    background: rgb(231, 231, 231);
    &.selected {
        background: rgb(209, 230, 230);
        &::after{display: none;
      }
    }
   }
   ::v-deep .interval-tabs-item {
    height: 48px;
    font-size: 20px;
   }
</style>

<script lang="ts">
   import Vue from 'vue';
   import { Component } from 'vue-property-decorator';
   import Tabs from '@/components/Tabs.vue';
   import intervalList from '@/constants/intervalList';
   import recordTypeList from '@/constants/recordTypeList';

   @Component({
     components: { Tabs },
   })
   export default class Statistics extends Vue{
    type = '+';
    recordTypeList = recordTypeList;

    interval = 'day';
    intervalList = intervalList; 
   };
</script>