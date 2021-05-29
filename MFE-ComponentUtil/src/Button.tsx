import React from "react";
import { isHidden } from "@org/commonUtil";
// const isHidden = (value) => {
//   return value;
// };

interface Props {
  id: string;
  buttonText: string;
  dataCy?: string;
  className?: string;
  isHidden: boolean;
}

function Button(props: Props) {
  return (
    <div>
      {isHidden(props.isHidden) === false && (
        <button
          id={props.id}
          className={`button ${props.className}`}
          data-cy={props.dataCy}
        >
          {props.buttonText}
        </button>
      )}
    </div>
  );
}

export default Button;
