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
            Adventure starts here 🚀
          </p>
          <p class="mb-2">Make your app management easy and fun!</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form @submit.prevent="registerUser">
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              placeholder="ali123"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="first_name"
              outlined
              label="First Name"
              placeholder="Ali"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="last_name"
              outlined
              label="Last Name"
              placeholder="Mohammed"
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
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password_confirmation"
              outlined
              :type="isConfirmPasswordVisible ? 'text' : 'password'"
              label="Confirm Password"
              placeholder="············"
              :append-icon="
                isConfirmPasswordVisible
                  ? icons.mdiEyeOffOutline
                  : icons.mdiEyeOutline
              "
              hide-details
              @click:append="
                isConfirmPasswordVisible = !isConfirmPasswordVisible
              "
            ></v-text-field>

            <v-checkbox hide-details class="mt-1">
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span
                  ><a href="javascript:void(0)">privacy policy &amp; terms</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn
              block
              color="primary"
              class="mt-6"
              :loading="register_loading"
              type="submit"
            >
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> Already have an account? </span>
          <router-link :to="{ name: 'pages-login' }">
            Sign in instead
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social link -->
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
      height="190"
      :src="
        require(`@/assets/images/misc/mask-${
          $vuetify.theme.dark ? 'dark' : 'light'
        }.png`)
      "
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

export default {
  data() {
    return {
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
      isConfirmPasswordVisible: false,
      isPasswordVisible: false,
      snackbar: false,
      snackbarText: ``,
      register_loading: false,
      icons: {
        mdiFacebook,
        mdiTwitter,
        mdiGithub,
        mdiGoogle,
        mdiEyeOutline,
        mdiEyeOffOutline,
        mdiClose,
      },

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
    };
  },
  methods: {
    async registerUser(e) {
      e.preventDefault();
      this.register_loading = true;
      if (
        this.username === "" ||
        this.first_name === "" ||
        this.last_name === "" ||
        this.password === "" ||
        this.password_confirmation === ""
      ) {
        this.snackbarText = "Please fill all the fields";
        this.snackbar = true;
      } else {
        if (this.password === this.password_confirmation) {
          await axios
            .post("/users", {
              username: this.username,
              first_name: this.first_name,
              last_name: this.last_name,
              password: this.password,
            })
            .then((response) => {
              console.log(response.data);
              this.register_loading = false;
              //store the token in local storage
              this.$router.push("/pages/login");
            });
        } else {
          this.snackbarText = `Password and Confirm Password do not match`;
          this.snackbar = true;
        }
      }
      this.register_loading = false;
    },
  },
};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>
