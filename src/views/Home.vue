<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService';

const state = reactive({
    memos: []
});

onMounted(() => {
    getItems();
});

const getItems = async () => {
    state.memos = await httpService.getMemoList({});
    console.log('state.memos :', state.memos);
}

</script>

<template>

</template>

<style lang="scss" scoped>

</style>