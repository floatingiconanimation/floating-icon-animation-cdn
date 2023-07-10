function floating_icon(background="red", bgimage="", size="50", opacity="50") {
    document.querySelector("head").innerHTML += `
<style>
        .el-wrap{
            position: fixed;
            top: 0;
            bottom: 0;
        }
        :root {
            --width: ${size}px;
            --x-speed: 11s;
            --y-speed: 5s;
            --transition-speed: 2.2s;
        }

        .el {
            width: var(--width);
            height: var(--width);
            background: ${background};
            opacity: ${opacity}%;
            background-image: url(${bgimage});
            background-size: 100% auto;
            background-position: center;
        }

        .x {
            animation: x var(--x-speed) linear infinite alternate;
        }

        .y {
            animation: y var(--y-speed) linear infinite alternate;
        }

        @keyframes x {
            100% {
                transform: translateX(calc(100vw - var(--width)));
            }
        }

        @keyframes y {
            100% {
                transform: translateY(calc(100vh - var(--width)));
            }
        }
    </style>
`
body_html = document.querySelector("body").innerHTML
document.querySelector("body").innerHTML = `
<div class="el-wrap x">
    <div class="el y"></div>
</div>
${body_html}
`
}