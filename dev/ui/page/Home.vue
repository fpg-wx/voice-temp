<template lang="html">
    <div class="home">
        <div class="stuff preload" data-source="../image/stuff.svg"></div>
        <p>123afgasdf</p>
    </div>
</template>

<script>
import PictureLoader from 'joshua-picture-loader';

export default {
    mounted() {
        new PictureLoader().load();
    },
};
</script>

<style lang="scss">
.home {
    .stuff {
        width: 200px;
    }

    p {
        font-size: 15px;
    }
}
</style>
