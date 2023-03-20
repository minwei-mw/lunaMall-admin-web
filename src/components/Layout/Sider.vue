<template>
    <a-layout-sider class="sider" breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
        <div class="logo" />
        <a-menu theme="dark" mode="inline">
            <template v-for="item in routers" :key="item.key">
                <template v-if="!item.children">
                    <a-menu-item :key="item.key">{{ item.title }}</a-menu-item>
                </template>
                <template v-else>
                    <a-sub-menu :key="item.key">
                        <template #title>{{ item.title }}</template>
                        <a-menu-item v-for="sub in item.children" :key="sub.key">{{ sub.title }}</a-menu-item>
                    </a-sub-menu>
                </template>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts" setup>
import { LayoutSider, Menu, MenuItem, SubMenu } from "ant-design-vue";
const AMenu = Menu;
const AMenuItem = MenuItem;
const ASubMenu = SubMenu;
const ALayoutSider = LayoutSider;

const onCollapse = (collapsed: boolean, type: string) => {
    console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
    console.log(broken);
};
const routers = [
    {
        path: '/home',
        title: '首页',
        key: '1',
    }, {
        path: '/goodsMng',
        title: '商品管理',
        key: '2',
        children: [
            {
                path: '/goodsSort',
                title: '商品分类',
                key: '2-1',
            },
            {
                path: '/goodsMaintain',
                title: '商品维护',
                key: '2-2',
            },
            {
                path: 'shopMng',
                title: '店铺管理',
                key: '2-3',
            }
        ]
    }
];

</script>

<style lang="less" scoped></style>
