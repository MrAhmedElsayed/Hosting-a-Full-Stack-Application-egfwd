<template>
  <v-form>
    <v-text-field
      v-model="firstname"
      label="First Name"
      outlined
      dense
      placeholder="First Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      label="Mobile"
      outlined
      dense
      type="number"
      placeholder="Number"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      outlined
      dense
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary"> Submit </v-btn>

    <v-btn type="reset" outlined class="mx-2"> Reset </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      email: "",
      mobile: "",
      password: "",
      checkbox: false,
    };
  },
};
</script>
