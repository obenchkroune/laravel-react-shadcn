import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: "inertia/app.tsx",
            ssr: "inertia/ssr.tsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./inertia"),
        },
    },
});
