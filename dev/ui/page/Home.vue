<template lang="html">
    <div class="page-home">
        <head-bar></head-bar>
        <side-bar></side-bar>

        <status-bar></status-bar>
    </div>
</template>

<script>
import HeadBar from './HeadBar.vue';
import SideBar from './SideBar.vue';
import StatusBar from './StatusBar.vue';

export default {
    components: {
        HeadBar,
        SideBar,
        StatusBar,
    },
};
</script>

<style lang="scss">
@import "../../style/variable";

.page-home {
    .stuff {
        width: 200px;
    }

    .head-bar {
        position: fixed;
        top: 0;
        left: 0;
    }

    .side-bar {
        position: fixed;
        left: 0;
        top: $headBarHeight;
        bottom: $statusBarHeight;
    }

    .status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
    }
}
</style>
