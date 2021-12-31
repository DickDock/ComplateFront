import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        ElementPlus({
            // @ts-ignore
            importStyle: 'sass',
            useSource: true
        }),
        Components({
            // 要搜索组件的目录的相对路径.
            dirs: ['./src/components', './src/views'],

            // 组件的有效文件扩展名。
            extensions: ['vue'],

            // 搜索子目录
            deep: true,

            // 自定义组件的解析器
            resolvers: [ElementPlusResolver()],


            // 生成 `components.d.ts` 全局声明，
            // 也接受自定义文件名的路径
            dts: true,

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
        }),
    ],
    resolve: {
        alias: {}
    },
    server: {
        proxy: {
            //这里是通过请求/api 来转发到 https://api.pingping6.com/
            //假如你要请求https://api.*.com/a/a
            //那么axios的url，可以配置为 /api/a/a
            // '/api': {
            //     target: 'https://www.httpbin.org/get', //代理接口
            //     changeOrigin: true,
            //     ws: true,
            //     secure: true,
            // }
            '/api': {
                target: 'https://www.httpbin.org',
                changeOrigin: true,
                // ws: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})