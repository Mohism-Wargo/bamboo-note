<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="dateClass" :data-source="dateClassList" :value.sync="dateClass"/>
        <div class="pinPage">
          <ol v-if="groupedList.length>0">
            <li v-for="(group, index) in groupedList" :key="index">
              <h3 class="title">{{beautify(group.title)}} <span>¥ {{group.total}}</span> </h3>
              <ol>
                <li v-for="item in group.items" :key="item.id"
                    class="record"
                  >
                  <div class="subitem">
                  <span class="tags">{{tagString(item.tags)}}</span>
                  <span class="amount">¥{{item.amount}} </span>
                  </div>
                  <div class="notes">{{item.notes}}</div>
                  <div class="indexDate">{{indexDate(item.createdAt || '')}}</div>
                </li>
              </ol>
            </li>
          </ol>
          <div v-else class="noResult">
            目前没有相关记录
          </div>
        </div>
    </Layout>
</template>

<script lang="ts" scoped>
   import Vue from 'vue';
   import { Component } from 'vue-property-decorator';
   import Tabs from '@/components/Tabs.vue';
   import recordTypeList from '@/constants/recordTypeList';
   import dateClassList from '@/constants/dateClassList';
   import dayjs from 'dayjs';
   import clone from '@/lib/clone';

   @Component({
     components: { Tabs },
   })
   export default class Statistics extends Vue{
     tagString(tags: Tag[]) {
      return tags.length === 0 ? '' :
        tags.join('，');
    }
    beautify(string:string){
      const day = dayjs(string);
        return day.format('YYYY年MM月DD日：');      
    }
    indexDate(string:string){
      const day = dayjs(string);
        return day.format('YYYY-MM-DD HH:mm');
    }      
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }
    
    get groupedList() {
      const {recordList} = this;
      const newList = clone(recordList)
        .filter(r => r.type === this.type)  //匹配，让 type = '-' 的和支出显示一起
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()); //排序（让最新的日期在上面）
        if(newList.length === 0) return [] as Result;

      type Result = { title: string, total?: number, items: RecordItem[] }[]
      const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];

      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (this.dateClass = 'days',dayjs(last.title).isSame(dayjs(current.createdAt), 'day')){
          last.items.push(current);
        }
         else if (this.dateClass = 'month',dayjs(last.title).isSame(dayjs(current.createdAt), 'month')){
          last.items.push(current);
        }
         else if (this.dateClass = 'year',dayjs(last.title).isSame(dayjs(current.createdAt), 'year')){
          last.items.push(current);
        } 
         else {
           result.push({title: dayjs(current.createdAt).format('YYYY'), items: [current]});
        }
      }
      result.map(group => {
        group.total = Number(group.items.reduce((sum, item) => {
          return sum + Number(item.amount);
        }, 0).toFixed(2));  //分组的统计金额
      });    
      return result; //输出result，即分组的数据
    }
    
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }
    type = '-';
    recordTypeList = recordTypeList;
    dateClass = 'days';
    dateClassList = dateClassList;
   } 
   
</script>

<style scoped lang="scss">
  %item {
    padding: 6px 12px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .pinPage{
    height: calc(100% - 88px);
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar { width: 0px; display: none;}
  }
  .title {
    @extend %item;
  }
  .record {
    background: rgb(223, 224, 224);
    margin-top: 3px;
  }
  .subitem{
    @extend %item;
    font-size: 19px;
  }
  .tags {
    width: 54%;
    color:  #578a8a;
  }
  .amount{
    width: 46%;
    text-align:right;
  }
  .notes {
    padding: 2px 48px 6px;
    color: rgb(88, 88, 88);
  }
  .indexDate{
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 4px 12px;
  }
  .noResult {
    padding: 30px;
    text-align: center;
    font: 1.1em;
    color:rgb(125, 173, 173)
  }
  .tabs{
    box-shadow:0 0 10px #466d6d;
  }
  ::v-deep {
    .type-tabs-item {
      background: rgb(146, 189, 189);
      &.selected {
        background: rgb(122, 175, 175);
        color: #fff;
        &::after {
          display: none;
        }
      }
    }
    .dateClass-tabs-item {
      height: 40px;
      background: rgb(189, 216, 216);
      &.selected {
        background: rgb(147, 196, 196);
        color: #fff;
        &::after {
          display: none;
        }
      }
    }
  }
</style>