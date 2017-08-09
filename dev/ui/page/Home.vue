<template lang="html">
    <div class="home">
        <img class="stuff" src="../../image/stuff.svg" alt="">
        <p>hello world</p>
        <icon type="download"></icon>
    </div>
</template>

<script>
import Icon from '../component/Icon.vue';

export default {
    components: {
        Icon,
    },
};
</script>

<style lang="scss">
.home {
    .stuff {
        width: 200px;
    }
}
</style>
