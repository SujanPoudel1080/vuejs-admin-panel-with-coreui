<template>
  <div class="bg-light min-vh-100 d-flex align-items-center">
    <CContainer>


            <CCard class="d-flex align-items-center">
              <CCardBody class="align-center">
                  <img :src="logo" width="200" height="200">
                  <h1 class="align-self-center h3">LOGIN</h1>
                <CForm>
                  <p class="text-medium-emphasis mt-2">Sign In to your account</p>
                  <CInputGroup class="mb-3 mt-3">

                    <TextInput
                            label="Email"
                            placeholder="email"
                            v-model:input="email"
                            inputType="text"
                            :error="errors.email ? errors.email[0] : ''"
                        />
                  </CInputGroup>
                  <CInputGroup class="mb-3">

                    <TextInput
                            label="Password"
                            placeholder="password"
                            v-model:input="password"
                            inputType="password"
                            :error="errors.password ? errors.password[0] : ''"
                        />
                  </CInputGroup>

                  <CButton color="primary"  variant = "outline" class="px-4" type="submit" @click="login">
                    Login
                  </CButton>


                </CForm>
              </CCardBody>
            </CCard>
            <!-- <CCard class="text-white bg-primary py-5" style="width: 44%">

            </CCard> -->


    </CContainer>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import TextInput from "../forms/TextInput.vue"
import { useUserStore } from "../../store/user-store"
import logo from "../../assets/brand/logo.png"
import { useRouter } from "vue-router"


const userStore = useUserStore()
const router = useRouter()


let errors = ref([]);
let email = ref(null);
let password = ref(null);

const login = async () => {
  errors.value = [];

  try {
    let res = await axios.post("login/", {
      email: email.value,
      password: password.value,
    })
    userStore.setUserDetails(res)
    localStorage.setItem('token' , JSON.stringify(res.data.token))
    await router.push('/')
  } catch (err) {
    errors.value = err.response.data.errors||{};
  }
};


//  export default {
//    name: "Login",
//  };
</script>
