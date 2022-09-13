import Vue from "vue";
import Component from "vue-class-component";

const map: { [key: string]: string } = {
  "tag name duplicated": "标签名重复了",
};

@Component
export class TagHelper extends Vue {
  selectedTags: string[] = [];

  createTag() {
    const name = window.prompt("请输入标签名");
    if (!name) {
      return window.alert("标签名不能为空");
    }
    this.$store.commit("createTag", name);
    if (this.$store.state.createTagError) {
      window.alert(map[this.$store.state.createTagError.message] || "未知错误");
    }
  }
  deleteTag() {
    const selectedTagItems = this.selectedTags.map(t => ((this as any).tags as Tag[]).find(tag => tag.name === t)!).filter(Boolean)
      selectedTagItems.forEach(t => {
        this.$store.commit('removeTag', t.id);
      })
    }
  }

  // 如果你用id,  这里直接 this.selectedTags.forEach(id => this.$store.commit('removeTag', id))

export default TagHelper;
