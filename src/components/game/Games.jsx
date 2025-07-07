import { useState } from "react";
import Ready from "./Ready";
import GenerateHands from "./GenerateHands";
import HandNumberForm from "./HandNumberForm";
import Card from "../general/card";
import Button from "../general/button";
import Title from "../general/title";

let result;
let generateGoal;
const Games = () => {
  //آماده برای بازی
  const [ready, setReady] = useState(false);

  //شروع بازی
  const [start, setStart] = useState(false);

  //گرفتن تعداد دست ها برای بازی
  const [handCount, setHandCount] = useState(1);

  //مشاهده اینکه گل در گدام دست است
  const [finalResult, setFinalResult] = useState(false);

  //شمردن تعداد بردها
  const [win, setWin] = useState(0);

  //شمردن تعداد باخت ها
  const [lost, setLost] = useState(0);

  let returnResult = null;

  const onContinue = () => {
    setStart(false);
    setFinalResult(false);
  };

  const onReset = () => {
    setReady(false);
    setStart(false);
    setWin(0);
    setLost(0);
    setFinalResult(false);
  };

  const checkGoal = (id) => {
    generateGoal = Math.floor(Math.random() * (handCount * 2)) + 1;
    result = id === generateGoal ? true : false;
    if (result) {
      setWin(win + 1);
    } else {
      setLost(lost + 1);
    }

    setFinalResult(true);
  };

  if (!ready) {
    return (
      <>
        <Card variant="shadow ready">
          <Ready onReady={(isOk) => setReady(isOk)} />
        </Card>
      </>
    );
  } else {
    if (!start) {
      returnResult = (
        <Card variant="shadow ready">
          <Title text="Enter a hands's number between 1 to 10" />
          <HandNumberForm
            onStart={(isOk) => setStart(isOk)}
            onGetHandNumber={(number) => setHandCount(number)}
          />
        </Card>
      );
    } else {
      returnResult = (
        <Card variant="shadow ready">
          {!finalResult ? (
            <GenerateHands
              handCount={handCount}
              onCheckGoal={(id) => checkGoal(id)}
              handAction={"Close"}
            />
          ) : (
            <GenerateHands
              handCount={handCount}
              handAction={"Open"}
              goal={generateGoal}
            />
          )}
          <Button name="Continue" type="" onAction={onContinue} />
          <Button name="Reset" type="" onAction={onReset} />
        </Card>
      );
    }

    return (
      <>
        {returnResult}

        <Card variant="shadow ready">
          <Title text="Win Count">{win}</Title>
          <Title text="Lost Count">{lost}</Title>
        </Card>
      </>
    );
  }
};
export default Games;
