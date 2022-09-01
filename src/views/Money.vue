<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <div class="notes">
            <FromItem field-name="备注"
                   placeholder="在这里输入备注"
                   :value.sync="record.notes"
            />
            </div>
            <Tags @update:value="record.tags = $event"/>
            <Tabs :data-source="recordTypeList"
                  :value.sync="record.type"
            />            
        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NumberPad from "@/components/Money/NumberPad.vue";
  import FromItem from "@/components/Money/FromItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import {Component} from 'vue-property-decorator';
  import Tabs from "@/components/Tabs.vue";
  import recordTypeList from '@/constants/recordTypeList';
  import createId from '../lib/createId'
  
  @Component({
    components: { NumberPad, FromItem, Tags, Tabs },
  })
  export default class Money extends Vue{
    get recordList(){
      return this.$store.state.recordList;
    }

    recordTypeList = recordTypeList;

    record: RecordItem = {
     tags: [], notes: '', type:'-', amount: 0 ,id: createId().toString()
     };
    created(){
       this.$store.commit('fetchRecords')
     }

    onUpdateNotes(value: string) {
       this.record.notes = value;
    }
    saveRecord(){
      if (!this.record.tags || this.record.tags.length === 0) {
        return window.alert('请至少选择一个标签');
      }
       this.$store.commit('createRecord',this.record);
      if (this.$store.state.createRecordError === null) {
        window.alert('已保存');
        this.record.notes = '';
      }
    }
  };
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
.notes{
    padding: 4px 0;
  }
</style>