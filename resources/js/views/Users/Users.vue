<template>
    <div>
        <CContainer>
            <CCard>
                <CCardHeader> Users </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col"
                                    >#</CTableHeaderCell
                                >
                                <CTableHeaderCell scope="col"
                                    >First Name</CTableHeaderCell
                                >
                                <CTableHeaderCell scope="col"
                                    >Last Name</CTableHeaderCell
                                >
                                <CTableHeaderCell scope="col"
                                    >Email</CTableHeaderCell
                                >
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow v-for="user in users" :key="user.id">
                                <CTableHeaderCell scope="row">{{
                                    user.id
                                }}</CTableHeaderCell>
                                <CTableDataCell>{{
                                    user.first_name
                                }}</CTableDataCell>
                                <CTableDataCell>{{
                                    user.last_name
                                }}</CTableDataCell>
                                <CTableDataCell>{{
                                    user.email
                                }}</CTableDataCell>
                                <CTableDataCell>
                                    <CIcon icon="cilDelete" size="xxl" />
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
                <CCardFooter> </CCardFooter>
            </CCard>
        </CContainer>
    </div>
</template>

<script setup>
import { CButton, CCardFooter, CCardHeader, CTable } from "@coreui/vue";
import { useToast } from "vue-toastification";
import axios from "axios";
import { ref, onMounted } from "vue";

const users = ref([]);
const errors = ref([]);
const toast = useToast()

onMounted(() => {
    getData();
});

const getData = async () => {
    errors.value = [];
    users.value = []
    await axios
        .get("users/")
        .then((response) => {
            users.value = response.data.users || [];
        })
        .catch((err) => {
            errors.value = err.response.data.errors || {};
            toast.warning("something error occured!");
        });
};
</script>
