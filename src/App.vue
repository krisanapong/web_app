<script setup>
import {onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '../src/stores/login';
const user_login = useLoginStore();
const router = useRouter();
var check_login = 0;
onMounted(async () =>{
    await user_login.login()
    check_login = parseInt(user_login.list.status);
    if(check_login == 0){
        router.push({ name: 'login' });
    }else{
        router.push({ name: 'home' });
    }
    console.log(check_login);
})
</script>

<template>
    <router-view />
</template>

<style scoped></style>
