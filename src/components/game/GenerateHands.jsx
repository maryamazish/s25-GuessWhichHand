import Image from "../general/image";

const GenerateHands = ({ handCount, onCheckGoal, handAction, goal }) => {

  const path = {
    leftHandClose: "../../../public/images/leftHand-close.JPG",
    rightHandClose: "../../../public/images/rightHand-close.JPG",
    leftHandOpen: "../../../public/images/leftHand-open.JPG",
    rightHandOpen: "../../../public/images/rightHand-open.JPG",
    leftHandOpenTarget: "../../../public/images/leftHand-open-target.JPG",
    rightHandOpenTarget: "../../../public/images/righHand-open-target.JPG",
  };

  const hands = [];
  let imageName = "";

  for (let i = 1; i <= handCount * 2; i++) {
    if (i % 2) {
      imageName =
        handAction === "Open" && goal === i
          ? "rightHand" + `${handAction}` + "Target"
          : "rightHand" + `${handAction}`;
    } else {
      imageName =
        handAction === "Open" && goal === i
          ? "leftHand" + `${handAction}` + "Target"
          : "leftHand" + `${handAction}`;
    }
    hands.push(
      <li
        key={i}
        className="sort-hands"
        onClick={onCheckGoal ? () => onCheckGoal(i) : undefined}
      >
        <Image src={path[imageName]} alt="leftHandClose" width="50px" />
      </li>
    );
  }
  return <ul>{hands}</ul>;
};

export default GenerateHands;
