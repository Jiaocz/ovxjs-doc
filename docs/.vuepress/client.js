import { defineClientConfig } from "@vuepress/client"
import { usePwaEvent } from "@vuepress/plugin-pwa/lib/client"

export default defineClientConfig({
    enhance({ app, router, siteData }) {},
    setup() {
        const event = usePwaEvent()
        event.on('updated', registration => registration.update())
    },
    rootComponents: [],
})