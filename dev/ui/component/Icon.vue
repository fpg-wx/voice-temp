<template lang="html">
    <span class="component-icon" v-html="map[type]"></span>
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            map: {
                '': '&#xa01;',
                edit: '&#xa02;',
                '': '&#xa03;',
                '': '&#xa04;',
                message: '&#xa05;',
                '': '&#xa06;',
                import: '&#xa07;',
                trash: '&#xa08;',
                '': '&#xa09;',
                pushdown: '&#xa10;',
                pushup: '&#xa11;',
                '': '&#xa12;',
                lock: '&#xa13;',
                transfer: '&#xa14;',
                pause: '&#xa15;',
                recycle: '&#xa16;',
                '': '&#xa17;',
                '': '&#xa18;',
                download: '&#xa19;',
                '': '&#xa20;',
                history: '&#xa21;',
                '': '&#xa22;',
                '': '&#xa23;',
                arrowdown: '&#xa24;',

                '': '&#xb01;',
                search: '&#xb02;',
                '': '&#xb03;',
                '': '&#xb04;',
                '': '&#xb05;',
                '': '&#xb06;',
                '': '&#xb07;',
                '': '&#xb08;',
                '': '&#xb09;',
                '': '&#xb10;',
                '': '&#xb11;',
                '': '&#xb12;',
                '': '&#xb13;',
                '': '&#xb14;',
                '': '&#xb15;',
                '': '&#xb16;',
                '': '&#xb17;',
                '': '&#xb18;',
                '': '&#xb19;',
                tag: '&#xb20;',
                '': '&#xb21;',
                '': '&#xb22;',
                '': '&#xb23;',
                '': '&#xb24;',
            },
        };
    },
};
</script>

<style lang="scss">
.component-icon {
    font-family: "Icon";
}
</style>
