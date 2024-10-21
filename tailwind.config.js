/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            backgroundImage: {
                sidebar: "linear-gradient(180deg, #A30133 0%, #002A5E 100%);"
            },
            colors: {
                mainColor: "#A30133",
                // gray
                gray1: "#ddd",
                gray2: "#F9F9F9",
                gray3: "rgba(41, 45, 50, 0.44)",
                gray4: "rgba(242, 242, 247, 1)",
                gray5: "#AFBACA",
                gray6: "#4F4F4F",
                gray7: "#B4B4B4",
                gray8: "#F2F2F7",
                gray9: "#856445",
                gray10: "#EAECF0",
                gray11: "#98A2B3",
                gray12: "#D7DFE9",
                gray13: "#506373",
                gray14: "#142533",
                gray15: "#A1AEBE",
                gary16: "#F5F6F7",
                // black
                black1: "#272727",
                black2: "#060606",
                // blue
                blue1: "#002A5E",
                blue2: "#1DADFF",
                blue3: "#242E39",
                // green
                green1: "#34C759",
                green2: "#00BA1E",
                green3: "#169E26",
                green4: "#11A75C",
                // orange
                orange1: "#F5631D",
                orange2: "#FF3B30",
                // purple
                purple1: "#FF28CD",
                // red
                red1: "#DF0655",
                // yellow
                yellow1: "#FFEE58"
            },
            height: {
                'screen-navbar': 'calc(100vh - 70px)',  // Custom height subtracting navbar height
            },
        },
    },
    plugins: [],
}