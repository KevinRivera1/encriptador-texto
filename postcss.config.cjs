// @ts-nocheck
module.exports = {
    plugins: [
        require("autoprefixer")({
            overrideBrowserslist: [
                "> 0.2%",
                "last 2 versions",
                'IE 11',
                "Firefox ESR",
                "iOS >= 12",
                "Android >= 5.0",
                "not dead",
            ],
            grid: "autoplace",
        }),
        require("postcss-import"),
        require("postcss-url"),
        require("postcss-combine-media-query"),
        require("postcss-combine-duplicated-selectors")({
            removeDuplicatedProperties: true,
            removeDuplicatedValues: false,
        }),
        require("cssnano")({
            preset: ["advanced", {
                mergeLonghand: false,
            }]
        }),
        require("postcss-preset-env")({
            stage: 3,
            feature:{
                'nesting-rules': true,
                'autoprefixer':{
                    grid: true,
                    flexbox: true,
                }
            }
        }),
        require("postcss-reporter")({
            clearReportedMessages: true,
            throwError: true,
        }),
    ],
};