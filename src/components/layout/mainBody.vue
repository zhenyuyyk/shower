<template>
    <div class="main_body">
        <LayoutHeader/>
        <div class="main_bottom">
            <LayoutLeft/>
            <div class="bottom_content">
                <Breadcrumb/>
                <div class="content_main">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import LayoutHeader from "./layoutHeader.vue";
    import LayoutLeft from "./layoutLeft.vue";
    import Breadcrumb from "./breadcrumb.vue";

    @Component({
        components: {
            LayoutHeader,
            LayoutLeft,
            Breadcrumb
        }
    })
    export default class MainBody extends Vue {

    }
</script>

<style scoped lang="less">
    .main_body {
        height: 100%;
        .main_bottom {
            display: flex;
            height: calc(100vh - 64px);
            .bottom_content {
                flex: 1;
                min-width: 0;
                .content_main {
                    padding: 24px;
                    height: calc(100vh - 118px);
                    overflow-y: scroll;
                    position: relative;
                }
                &::-webkit-scrollbar {
                    width: 0;
                    height: 0;
                }
            }
        }
    }
</style>