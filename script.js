console.log("fuck");

MotionPathPlugin.convertToPath("ellipse");

const arrColors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "teal",
  "olive",
  "magenta",
  "white",
];
const divArray = [];

setupDivs();
function setupDivs() {
  const path = document.querySelector("path");
  console.log(path.getTotalLength());
  var pathLength = path.getTotalLength();
  var loc = path.getPointAtLength(0 * pathLength);

  for (let i = 0; i < arrColors.length; i++) {
    var loc = path.getPointAtLength((1 / 10) * i * pathLength + 100);

    const circle = document.createElement("div");
    circle.className = "circle";
    circle.id = i + 1;
    circle.style.left = loc.x + "px";
    circle.style.top = loc.y + "px";

    circle.addEventListener("click", pop);

    function pop2() {
      gsap.to("path", { rotation: 180 });
    }
    function pop() {
      console.log("popopop");
      newArray = [...divArray];
      if (this.id !== 3) {
        let indexDiff = 3 - this.id;
        console.log(indexDiff);
        for (let i = 0; i < divArray.length; i++) {
          let newIndex;
          console.log(indexDiff + i);
          if (indexDiff + i >= 0 && indexDiff + i < divArray.length) {
            divArray[i].style.top = newArray[i + indexDiff].style.top;
            divArray[i].style.left = newArray[i + indexDiff].style.left;
          } else if (indexDiff + i < 0) {
            divArray[i].style.top = newArray[i - indexDiff].style.top;
            divArray[i].style.left = newArray[i - indexDiff].style.left;
          }
        }
      }
    }
    divArray.push(circle);

    document.getElementById("caro").appendChild(divArray[i]);
  }
  setStyling();
}

function setStyling() {
  divArray[2].classList.add("primary");
  divArray[1].classList.add("secondary");
  divArray[3].classList.add("secondary");
  divArray[0].classList.add("tertiary");
  divArray[4].classList.add("tertiary");
}
