import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Box from "../box/box.component";

const BoxPop = ({ children, setShowAddProduct }) => {
  return (
    <Container animate={{ scale: 1 }}>
      <Layer onClick={() => setShowAddProduct(false)} />
      <Content>
        <Box>{children}</Box>
      </Content>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${(props) => props.theme.space[10]};
  z-index: 100;
`;
const Layer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 50;
`;

const Content = styled.div`
  z-index: 150;
  height: fit-content;
  width: 70%;
`;

export default BoxPop;
