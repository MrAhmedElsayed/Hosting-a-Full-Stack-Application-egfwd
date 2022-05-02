<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Summary</span>
      <v-spacer></v-spacer>
      <v-btn icon small class="me-n3 mt-n2">
        <v-icon>
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

    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="6"
          md="4"
          class="d-flex align-center"
        >
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation(data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon dark color="white" size="30">
              {{ resolveStatisticsIconVariation(data.title).icon }}
            </v-icon>
          </v-avatar>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-semibold">
              {{ data.total }}
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  mdiClipboardListOutline,
  mdiAccountOutline,
  mdiLabelOutline,
  mdiReload,
} from "@mdi/js";

export default {
  data() {
    return {
      statisticsData: [
        {
          title: "Orders",
          total: "0",
        },
        {
          title: "Users",
          total: "0",
        },
        {
          title: "Product",
          total: "0",
        },
      ],
      // icons
      icons: {
        mdiClipboardListOutline,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiReload,
      },
    };
  },
  methods: {
    resolveStatisticsIconVariation(data) {
      if (data === "Orders")
        return { icon: mdiClipboardListOutline, color: "primary" };
      if (data === "Users")
        return { icon: mdiAccountOutline, color: "success" };
      if (data === "Product")
        return { icon: mdiLabelOutline, color: "warning" };
    },
  },
};
</script>
