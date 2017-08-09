<template lang="html">
    <div class="page-login">
        <img class="stuff" src="../../image/stuff.svg" alt="">
        <p>hello world</p>
        <icon type="download"></icon>
    </div>
</template>

<script>
import Icon from '../component/Icon.vue';

export default {
    data() {
        return {

        };
    },
    components: {
        Icon,
    },
};
</script>

<style lang="scss">
.page-login {
    .stuff {
        width: 200px;
    }

    .component-icon {
        font-size: 50px;
    }
}
</style>
