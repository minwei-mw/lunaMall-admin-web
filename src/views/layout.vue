<template>
    <Layout class="wrapper">
        <Sider />
        <Layout>
            <!-- <LayoutHeader :style="{ background: '#fff', padding: 0 }" /> -->
            <LayoutContent :style="{ margin: '24px 16px 0', }">
                <div :style="{ padding: '24px', background: '#fff',height:'100%' }">content</div>
            </LayoutContent>
        </Layout>
    </Layout>
</template>
<script lang="ts">
import { Layout, LayoutContent, LayoutHeader } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import { Sider } from "@/components/Layout/"

export default defineComponent({
    components: {
        Layout,
        LayoutContent,
        LayoutHeader,
        Sider
    },
    setup() {


    },
});
</script>
<style>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.site-layout-sub-header-background {
    background: #fff;
}

.site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
}
</style>
  