import {defineConfig, loadEnv} from 'vite'
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";
import Components from "unplugin-vue-components/vite";
// @ts-ignore
import path from "path";
// @ts-ignore
import obfuscator from 'rollup-plugin-obfuscator';


// @ts-ignore
export default defineConfig(({command, mode}) => {
    console.log('----------------------------环境信息------------------------------------')
    console.log("mode => " + mode)
    console.log("command => " + command)
    console.log('----------------------------环境信息------------------------------------')
    console.log()

    const configData = {
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver({
                    importStyle: 'sass',
                })],
            }),
            ElementPlus({}),
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
            alias: {
                // @ts-ignore
                '@': path.resolve(__dirname, './src'),
                // @ts-ignore
                '~script': path.resolve(__dirname, './src/script'),
            }
        },
        server: [],
        build: {
            chunkSizeWarningLimit: 1500,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        // @ts-ignore
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    },
                },
            },
            minify: 'terser' // 混淆器，terser构建后文件体积更小
        },
    };

    if (command === 'serve') {
        configData['server'] = {
            // @ts-ignore
            host: '127.0.0.1',
            // @ts-ignore
            port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
            strictPort: true, // 端口被占用直接退出
            https: false,
            open: true,// 在开发服务器启动时自动在浏览器中打开应用程序
            proxy: {
                // 字符串简写写法
                // '/foo': '',
                // 选项写法
                '/api': {
                    // @ts-ignore
                    target: mode === 'development' ? loadEnv(mode, process.cwd()).VITE_APP_DEV_URL : loadEnv(mode, process.cwd()).VITE_APP_PROD_URL,
                    // target: "http://127.0.0.1",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                }
            },
            hmr: {
                overlay: false // 屏蔽服务器报错
            }
        };
    } else {
        configData['server'] = []
    }

    return configData;
})