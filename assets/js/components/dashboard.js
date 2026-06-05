(function () {
    "use strict";

    function drawSparkline(canvasId, points, color) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const padding = 3;
        const min = Math.min(...points);
        const max = Math.max(...points);
        const range = max - min || 1;

        const getX = (index) =>
            padding + (index / (points.length - 1)) * (width - padding * 2);
        const getY = (value) =>
            height - padding - ((value - min) / range) * (height - padding * 2);

        ctx.clearRect(0, 0, width, height);

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, `${color}40`);
        gradient.addColorStop(1, `${color}00`);

        ctx.beginPath();
        ctx.moveTo(getX(0), getY(points[0]));

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(getX(i), getY(points[i]));
        }

        ctx.lineTo(getX(points.length - 1), height);
        ctx.lineTo(getX(0), height);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(getX(0), getY(points[0]));

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(getX(i), getY(points[i]));
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.stroke();
    }

    function drawRadial(canvasId, percent, color) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const size = canvas.width;
        const center = size / 2;
        const radius = center - 5;
        const lineWidth = 5;
        const start = -Math.PI / 2;
        const end = start + (percent / 100) * (Math.PI * 2);

        ctx.clearRect(0, 0, size, size);
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#21262d";
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(center, center, radius, start, end);
        ctx.strokeStyle = color;
        ctx.lineCap = "round";
        ctx.stroke();
    }

    function init() {
        drawSparkline(
            "sparkline-temperatura",
            [22.1, 22.8, 23, 22.5, 23.4, 24, 23.6, 24.3],
            "#f85149"
        );
        drawSparkline("sparkline-alagamento", [40, 45, 52, 58, 61, 65, 70, 76], "#58a6ff");
        drawSparkline("sparkline-trafego", [45, 42, 38, 35, 33, 36, 34, 32], "#e3b341");
        drawSparkline("sparkline-umidade", [68, 70, 71, 72, 73, 75, 76, 78], "#58a6ff");
        drawRadial("radial-risco", 78, "#f85149");
        drawRadial("radial-ar", 42, "#3fb950");
    }

    document.addEventListener("DOMContentLoaded", init);
})();
