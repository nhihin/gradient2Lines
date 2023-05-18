// Define the gradient colors here
const color1 = "#308AFC"; // red
const color2 = "#FEFCF9"; // green
const color3 = "#EF6A18"; // blue

// Get the rectangle element
const rectangle = document.getElementById('rectangle');

// Helper function to interpolate between two colors
function interpolateColor(color1, color2, factor) {
    const r1 = parseInt(color1.substring(1,3), 16);
    const g1 = parseInt(color1.substring(3,5), 16);
    const b1 = parseInt(color1.substring(5,7), 16);

    const r2 = parseInt(color2.substring(1,3), 16);
    const g2 = parseInt(color2.substring(3,5), 16);
    const b2 = parseInt(color2.substring(5,7), 16);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return '#' + r.toString(16).padStart(2, '0') +
                g.toString(16).padStart(2, '0') +
                b.toString(16).padStart(2, '0');
}

// Create an array for the lines and colors
let lines = [];
let colors = [];

// Create the gradient and store the lines and colors
for (let i = 0; i < 1000; i++) {
    const line = document.createElement('div');
    line.classList.add('line');

    if (i < 500) {
        colors.push(interpolateColor(color1, color2, i / 500));
    } else {
        colors.push(interpolateColor(color2, color3, (i - 500) / 500));
    }

    lines.push(line);
}

// Shuffle the lines array and apply the corresponding color
for (let i = lines.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
    [colors[i], colors[j]] = [colors[j], colors[i]];
}

// Append the lines to the rectangle in the shuffled order
for (let i = 0; i < lines.length; i++) {
    lines[i].style.backgroundColor = colors[i];
    rectangle.appendChild(lines[i]);
}

