<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutBlank from "@/layouts/Blank.vue";
import LayoutContent from "@/layouts/Content.vue";
import axios from "axios";
export default {
  components: {
    LayoutBlank,
    LayoutContent,
  },
  data() {
    return {
      layout: null,
      user: null,
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
  async created() {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if (userLocal) {
      const response = await axios.get(`/users/${userLocal.id}`);
      // this.$store.commit("setUser", response.data);
      await this.$store.dispatch("user", response.data);
      this.user = response.data;
    } else {
      await this.$router.push("/pages/login");
    }
  },
};
</script>
