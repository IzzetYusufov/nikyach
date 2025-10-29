import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// https://vite.dev/config/
export default defineConfig({
	base: "/nikyach/",
	plugins: [react(), tailwindcss()],
	build: {
		outDir: "build",
		assetsDir: "public",
		rollupOptions: {
			output: {
				assetFileNames: "public/[name][extname]",
			},
		},
	},
})
