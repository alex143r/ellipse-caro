console.log("fuck");

const florbsArray = [
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

MotionPathPlugin.convertToPath("ellipse");

setupDivs();

function setupDivs() {
  const path = document.querySelector("path");
  const pathLength = path.getTotalLength();

  for (let i = 0; i < florbsArray.length; i++) {
    // const loc = path.getPointAtLength(
    //    (1 / florbsArray.length) * i * pathLength + 145
    // );

    const circle = document.createElement("div");
    circle.className = "circle";
    circle.id = i + 1;
    circle.innerHTML = i + 1;

    // circle.style.left = loc.x + "px";
    // circle.style.top = loc.y + "px";

    circle.addEventListener("click", gogogadgetfuck);

    function gogogadgetfuck() {
      console.log("click");
      let diff = document.querySelector(".primary").id - this.id;
      console.log(document.querySelector(".primary").id, this.id);
      console.log("diff" + diff);

      document.querySelector(".primary").classList.remove("primary");
      this.classList.add("primary");

      newArray = [...divArray];
      for (let i = 0; i < divArray.length; i++) {
        let newPos = (1 / divArray.length) * (i + diff) + 0.05;
        if ((1 / divArray.length) * (i + diff) + 0.05 >= 1) {
          newPos = newPos - 1;
        }
        gsap.set(divArray[i], {
          scale: calcScale(i, newPos),
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            end: newPos,
          },
        });
      }
      // if (this.id !== 3) {
      //   let indexDiff = 3 - this.id;
      //   console.log(indexDiff);
      //   for (let i = 0; i < divArray.length; i++) {
      //     let newIndex;
      //     console.log(indexDiff + i);
      //     if (indexDiff + i >= 0 && indexDiff + i < divArray.length) {
      //       divArray[i].style.top = newArray[i + indexDiff].style.top;
      //       divArray[i].style.left = newArray[i + indexDiff].style.left;
      //     } else if (indexDiff + i < 0) {
      //       divArray[i].style.top = newArray[i - indexDiff].style.top;
      //       divArray[i].style.left = newArray[i - indexDiff].style.left;
      //     }
      //   }
      // }
    }
    divArray.push(circle);

    document.getElementById("caro").appendChild(divArray[i]);

    const calcPos = (1 / florbsArray.length) * i + 0.05;

    gsap.to(divArray[i], {
      scale: calcScale(i, calcPos),

      motionPath: {
        start: 1,
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        //autoRotate: true,
        //plusser sidst med 0,05 for at rette op på ellipse
        end: (1 / florbsArray.length) * i + 0.05,
      },
    });
  }
  setStyling();
}
function calcScale(i, calcPos) {
  if (i > florbsArray.length) {
    i = i - florbsArray.length;
  }
  let scale;
  if (calcPos > 0.2 && calcPos < 0.3) {
    scale = 2;
  } else if (
    (calcPos > 0.1 && calcPos < 0.2) ||
    (calcPos > 0.3 && calcPos < 0.4)
  ) {
    scale = 1.5;
  } else {
    scale = 1;
  }
  return scale;
}
function setStyling() {
  document.getElementById("3").classList.add("primary");
  // divArray[1].classList.add("secondary");
  // divArray[3].classList.add("secondary");
  // divArray[0].classList.add("tertiary");
  // divArray[4].classList.add("tertiary");
}
