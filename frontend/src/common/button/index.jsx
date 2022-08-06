import React from "react";
import * as S from "./styles";
import * as SolidIcon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ ...props }) => {
  return (
    <S.Container {...props}>
      {props.isAdded && (
        <FontAwesomeIcon fontSize={18} icon={SolidIcon.faCheck} />
      )}
      {props.label}
    </S.Container>
  );
};

export default Button;
