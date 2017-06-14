const hue = ~~(Math.random() * 360);

const base = `hsl(${hue}, 26%, 40%)`;
const lighter = `hsl(${hue}, 26%, 55%)`;

const css = `
h1 {
  color: ${lighter};
}

.q.t-l .bw .b, .q.b-r .bw .b{
  background-color: ${base};
}
.q.t-l .bw .t, .q.b-r .bw .t{
  color: ${base};
}

.q.t-r .bw .b, .q.b-l .bw .b{
  background-color: ${lighter};
}

.q.t-r .bw .t, .q.b-l .bw .t{
  color: ${lighter};
}
`;

const cssElement = document.createElement('style');
cssElement.innerHTML = css;
document.body.appendChild(cssElement);
