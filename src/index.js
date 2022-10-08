import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const union = (a, b) => {
  let result = {};
  for (let key of a) {
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }

  for (let key of b) {
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }

  return Object.keys(result).length;
};
let a = [1, 5, 6, 4, 2, 1, 4, 5, 1, 1, 4, 4];
let b = [2, 5, 2, 3, 1, 4, 2, 3];
let test = union(a, b);
console.log(test);
