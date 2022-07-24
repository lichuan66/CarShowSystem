<template>
    <div class="com-page">
        <SingleMap/>
    </div>
</template>

<script>
import SingleMap from '../components/SingelMap'

export default {
    name: 'MapPage',
    components: {
        SingleMap
    }
}
</script>

<style>
.com-page {
    height: 100%;
}
</style>