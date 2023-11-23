const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts",
    webpack: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        }
    }
}