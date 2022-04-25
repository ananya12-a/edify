<template>
    <videoList :sheetName="this.$route.params.course"/>
</template>

<script>
import videoList from '.././components/videoList';
export default {
    components: {
        videoList,
    },
}
</script>

<style scoped>

</style>