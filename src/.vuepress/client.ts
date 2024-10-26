import { defineClientConfig } from "vuepress/client";
import PluginBanner from "../component/PluginBanner.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("PluginBanner", PluginBanner);
    },
});