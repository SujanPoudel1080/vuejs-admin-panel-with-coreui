<template>

    <CCard class="mb-4">
        <CCardHeader>
            <strong>Add User</strong>
        </CCardHeader>
        <CCardBody>


            <CInputGroup class ="mb-3">
                <TextInput
                label="Enter First Name"
                placeholder="firstname"
                v-model:input="firstName"
                inputType="string"
                :error="errors.firstName ? errors.firstName[0] : ''"
            />
            </CInputGroup>


            <CInputGroup class="mb-3">
                <TextInput
                    label="Enter Last Name"
                    placeholder="lastname"
                    v-model:input="lastName"
                    inputType="string"
                    :error="errors.lastName ? errors.lastName[0] : ''"
                />
            </CInputGroup>

            <CInputGroup class="mb-3">
                <TextInput
                    label="Enter email"
                    placeholder="email"
                    v-model:input="email"
                    inputType="email"
                    :error="errors.email ? errors.email[0] : ''"
                />
            </CInputGroup>

            <CInputGroup class="mb-3">
                <TextInput
                    label="Enter password"
                    placeholder="password"
                    v-model:input="password"
                    inputType="password"
                    :error="errors.password ? errors.password[0] : ''"
                />
            </CInputGroup>


            <CInputGroup>
                <TextInput
                    label="Confirm Password"
                    placeholder="confirmPassword"
                    v-model:input="confirmPassword"
                    inputType="password"
                    :error="
                        errors.confirmPassword
                            ? errors.confirmPassword[0]
                            : ''
                    "
                />
            </CInputGroup>
        </CCardBody>
        <CCardFooter>
            <CButton color="success" class="mt-3" @click="createUser"> Submit </CButton>
        </CCardFooter>
    </CCard>

</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import TextInput from "../forms/TextInput.vue";
import {useToast} from "vue-toastification";



const toast = useToast();
let errors = ref([]);
let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);

const createUser = async () => {
errors.value = [];

try {
let res = await axios.post("user-create/", {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    password: password.value,
    password_confirmation: confirmPassword.value
});
toast(res.data.message);


} catch (err) {
errors.value = err.response.data.errors || {};
toast.warning('some error occured!')
}
};
</script>
