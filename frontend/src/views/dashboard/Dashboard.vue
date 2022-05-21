<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-card>
        <v-card-title class="align-start">
          <span class="font-weight-semibold">Summary</span>
          <v-spacer></v-spacer>
          <v-btn icon small class="me-n3 mt-n2">
            <v-icon @click="initialData">
              {{ icons.mdiReload }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-subtitle class="mb-8 mt-n5">
          <span class="font-weight-semibold text--primary me-1"
            >Total 48.5% Growth</span
          >
          <span>😎 this month</span>
        </v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-row class="match-height">
        <v-col cols="12" sm="4">
          <statistics-card-vertical
            :color="users.color"
            :icon="users.icon"
            :statistics="users.statistics"
            :stat-title="users.statTitle"
            :link="users.link"
          ></statistics-card-vertical>
        </v-col>
        <v-col cols="12" sm="4">
          <statistics-card-vertical
            :color="products.color"
            :icon="products.icon"
            :statistics="products.statistics"
            :stat-title="products.statTitle"
            :link="products.link"
          ></statistics-card-vertical>
        </v-col>
        <v-col cols="12" sm="4">
          <statistics-card-vertical
            :color="orders.color"
            :icon="orders.icon"
            :statistics="orders.statistics"
            :stat-title="orders.statTitle"
            :link="orders.link"
          ></statistics-card-vertical>
          <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import StatisticsCardVertical from "@/components/statistics-card/StatisticsCardVertical.vue";

import axios from "axios";
axios.defaults.baseURL = "http://storefront-env.eba-mm2w3dke.us-east-1.elasticbeanstalk.com";
import {
  mdiClipboardListOutline,
  mdiAccountOutline,
  mdiLabelOutline,
  mdiReload,
  mdiAccountGroupOutline,
  mdiFormatListChecks,
  mdiCameraGopro,
} from "@mdi/js";

export default {
  components: {
    StatisticsCardVertical,
  },
  // isolate data orders, products and users
  data() {
    return {
      overlay: false,
      // icons
      icons: {
        mdiClipboardListOutline,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiReload,
      },

      users: {
        statTitle: "Users",
        icon: mdiAccountGroupOutline,
        color: "success",
        statistics: "0",
        link: "/users",
      },
      products: {
        statTitle: "Products",
        icon: mdiCameraGopro,
        color: "warning",
        statistics: "0",
        link: "/products",
      },
      // vertical card options
      orders: {
        statTitle: "Orders",
        icon: mdiFormatListChecks,
        color: "primary",
        statistics: "0",
        link: "/orders",
      },
    };
  },
  created() {
    this.initialData();
  },
  methods: {
    initialData() {
      this.overlay = true;
      axios
        .get("/home")
        .then((response) => {
          this.orders.statistics = response.data[0]["order_count"];
          this.products.statistics = response.data[1]["product_count"];
          this.users.statistics = response.data[2]["user_count"];
          this.overlay = false;
        })
        .catch((error) => {
          console.log(error);
          this.overlay = false;
        });
    },
  },
};
</script>
