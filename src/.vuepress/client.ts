import { defineClientConfig } from "vuepress/client";
import PluginBanner from "../component/PluginBanner.vue";
import PageLink from '../component/PageLink.vue'

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("PluginBanner", PluginBanner);
        app.component("PageLink", PageLink);
    },
});