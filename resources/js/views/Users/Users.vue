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

<script>
import { CButton, CCardFooter, CCardHeader, CTable } from "@coreui/vue";
import axios from "axios";


export default {
    name: "users",
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            await axios
                .get("users/")
                .then((response) => {
                    this.users = response.data.users || [];
                })
                .catch((error) => {
                    this.users = [];
                });
        },


    },
};
</script>
