<template lang="html">
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    components: {
    },
};
</script>

<style lang="scss">
@import "../../style/reset";
@import "../../style/mixin";
@import "../../style/variable";

// @include font-face("Lato-Regular");

:root{
    --color1: $diagramColor1;
}

html, body, #app, .app-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    font-family:"Microsoft YaHei";
}

@media (max-width: 1000px) {
    :root{
        // --color1: green;
    }
}

.app-container{
    // background-color: var(--color1);
}


</style>
