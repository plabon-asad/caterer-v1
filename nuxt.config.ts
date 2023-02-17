// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // css: ["bootstrap/dist/css/bootstrap.min.css"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/index.scss" as *;'
                }
            }
        },
        define: {
            "process.env.DEBUG": false,
        }
    }

})
