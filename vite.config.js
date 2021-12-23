"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var vite_2 = require("unplugin-auto-import/vite");
var vite_3 = require("unplugin-vue-components/vite");
var resolvers_1 = require("unplugin-vue-components/resolvers");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_vue_1.default)(),
        (0, vite_2.default)({
            resolvers: [(0, resolvers_1.ElementPlusResolver)()],
        }),
        (0, vite_3.default)({
            resolvers: [(0, resolvers_1.ElementPlusResolver)()],
        }),
        (0, vite_3.default)({
            // relative paths to the directory to search for components.
            // 要搜索组件的目录的相对路径
            dirs: ['src/components'],
            // valid file extensions for components.
            // 组件的有效文件扩展名。
            extensions: ['vue'],
            // search for subdirectories
            // 搜索子目录
            deep: true,
            // resolvers for custom components
            // 自定义组件的解析器
            resolvers: [],
            // generate `components.d.ts` global declarations,
            // also accepts a path for custom filename
            // 生成 `components.d.ts` 全局声明，
            // 也接受自定义文件名的路径
            dts: false,
            // Allow subdirectories as namespace prefix for components.
            // 允许子目录作为组件的命名空间前缀。
            directoryAsNamespace: false,
            // 忽略命名空间前缀的子目录路径
            // 当`directoryAsNamespace: true` 时有效
            // Subdirectory paths for ignoring namespace prefixes
            // works when `directoryAsNamespace: true`
            globalNamespaces: [],
            // auto import for directives
            // default: `true` for Vue 3, `false` for Vue 2
            // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
            // To install Babel, run: `npm install -D @babel/parser @babel/traverse`
            // 自动导入指令
            // 默认值：Vue 3 的`true`，Vue 2 的`false`
            // 需要 Babel 来为 Vue 2 进行转换，出于性能考虑，它默认处于禁用状态。
            directives: true,
            // filters for transforming targets
            include: [/.vue$/, /.vue?vue/],
            exclude: [/[\/]node_modules[\/]/, /[\/].git[\/]/, /[\/].nuxt[\/]/],
        })
    ]
});
