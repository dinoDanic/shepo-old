import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Box from "../box/box.component";

const BoxPop = ({ children, setLayer }) => {
  return (
    <Container animate={{ scale: 1 }}>
      <Layer onClick={() => setLayer(false)} />
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
  align-items: center;
  z-index: 100;
`;
const Layer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  z-index: 150;
  height: fit-content;
  min-width: 300px;
  width: 70%;
  height: 90%;
`;

export default BoxPop;
