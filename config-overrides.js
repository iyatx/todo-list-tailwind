const path = require("path");

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@store": path.resolve(__dirname, "src/store"),
            "@models": path.resolve(__dirname, "src/models"),
        },
    };
    return config;
};