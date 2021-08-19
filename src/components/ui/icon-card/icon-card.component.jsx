import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const icons = {
  faShapers: faShapes,
  faBriefcase: faBriefcase,
};

const IconCard = ({ icon, text }) => {
  return (
    <Card>
      <CardBox>
        <Icon icon={icons[icon]} />
      </CardBox>
      <Text>{text}</Text>
    </Card>
  );
};

const Card = styled.div`
  width: 130px;
  cursor: pointer;
  margin-right: ${(props) => props.theme.space[3]};
`;
const CardBox = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.ui.border};
  border-radius: ${(props) => props.theme.borderRadius.m};
`;
const Text = styled.div`
  text-align: center;
  margin-top: ${(props) => props.theme.space[2]};
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 55px;
`;

export default IconCard;
