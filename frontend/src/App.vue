<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutBlank from "@/layouts/Blank.vue";
import LayoutContent from "@/layouts/Content.vue";

export default {
  components: {
    LayoutBlank,
    LayoutContent,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // console.log(to.meta.layout);
      // if (to.meta.layout === null) return null;
      if (to.meta.layout === "blank") return (this.layout = "layout-blank");
      return (this.layout = "layout-content");
    },
  },
};
</script>
