<template>
    <div class="error ">
        <div class="container_error d-flex">
        <div class="img_error">
            <img class="imgError" src="../assets/img/error-404 (2).png"/>
        </div>

        <div class="errortext" >
            <h1> OOPS!!</h1>
            <h2> Page Not Found </h2>
            <button class="GoHome" @click="goHome()"> Go Home </button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

    const goHome = () => {
      router.push('/');
    }
  

</script>
