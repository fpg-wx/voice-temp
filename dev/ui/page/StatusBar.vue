<template lang="html">
    <div class="status-bar">
        <div class="left-wrapper">
            <span class="status-text">状态</span>
            <span class="status-circle"></span>
            <span class="status-description">系统正常</span>
            <div class="status-info">信息提示</div>

        </div>
        <div class="right-wrapper">
            <div class="copyright">最终版权归xx所有</div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "../../style/variable";

.status-bar {
    width: 100%;
    height: $statusBarHeight;
    background-color: $basicColor2;
    color: $fontColor5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    span {
        display: inline-block;
        vertical-align: middle;
    }

    .status-text {
        font-size: 18px;
        margin-right: 30px;
    }
    .status-circle {
        width: 16px;
        height: 16px;
        background-color: #56AC72;
        border-radius: 50%;
        margin-right: 15px;
    }
    .status-description {
        font-size: 18px;
        margin-right: 16px;
    }
    .status-info {
        display: inline-block;
        vertical-align: middle;
        width: 540px;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        background-color: rgba(255,255,255,0.2);
        border-radius: 2px;
        font-size: 16px;
    }

    .copyright {
        font-size: 16px;
    }
}
</style>
