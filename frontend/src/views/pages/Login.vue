<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">Store Front</h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Welcome to Store Front! 👋🏻
          </p>
          <p class="mb-2">
            Please sign-in to your account and start the adventure
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              placeholder="ahmed123"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="
                isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline
              "
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox label="Remember Me" hide-details class="me-3 mt-1">
              </v-checkbox>

              <!-- forgot link -->
              <a href="javascript:void(0)" class="mt-1"> Forgot Password? </a>
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
              type="submit"
              :loading="login_loading"
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> New on our platform? </span>
          <router-link :to="{ name: 'pages-register' }">
            Create an account
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
            <v-icon
              :color="$vuetify.theme.dark ? link.colorInDark : link.color"
            >
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="
        require(`@/assets/images/misc/mask-${
          $vuetify.theme.dark ? 'dark' : 'light'
        }.png`)
      "
      alt="theme-change"
    />

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>

    <v-snackbar v-model="snackbar" color="error" multi-line>
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon dark>{{ icons.mdiClose }}</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiFacebook,
  mdiTwitter,
  mdiGithub,
  mdiGoogle,
  mdiEyeOutline,
  mdiEyeOffOutline,
  mdiClose,
} from "@mdi/js";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      isPasswordVisible: false,
      socialLink: [
        {
          icon: mdiFacebook,
          color: "#3b5998",
          colorInDark: "#3b5998",
        },
        {
          icon: mdiTwitter,
          color: "#1da1f2",
          colorInDark: "#1da1f2",
        },
        {
          icon: mdiGithub,
          color: "#333",
          colorInDark: "#333",
        },
        {
          icon: mdiGoogle,
          color: "#dd4b39",
          colorInDark: "#dd4b39",
        },
      ],
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
        mdiClose,
      },
      snackbar: false,
      snackbarText: ``,
      login_loading: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      if (this.username && this.password) {
        this.login_loading = true;
        await axios
          .post("/users/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            const user = res.data["user"];
            const token = res.data["token"];
            this.setUser(user);
            this.setToken(token);
            // store user and token in local storage
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            this.login_loading = false;
            this.$router.push("/");
          })
          .catch((err) => {
            this.snackbar = true;
            this.snackbarText = err.response.data.message;
            console.log(err);
            this.login_loading = false;
          });
      } else {
        this.snackbar = true;
        this.snackbarText = "Please fill in all the fields";
        this.login_loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>
