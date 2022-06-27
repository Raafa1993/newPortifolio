import React from "react";
import { motion } from "framer-motion";
import Button from "../../forms/buttons/Button";

import Image from "next/image";

//Images
import ImagePerfil from "../../images/imagePerfil-1.png";

import {
  Container,
  Contents,
  ContentSubLeft,
  ContentSubRight,
  ContentLeft,
  Title,
  Subtitle,
  Description,
  ContentRight,
  FieldGroup,
  SectionImage,
  SectionWidgeBottom,
  SectionWidgeLeft,
  SectionWidgeRight,
  Mouse,
  MouseWheel,
} from "./styles";
import MoonIcon from "../../icons/MoonIcon";
import ButtonSocial from "../../widgets/ButtonSocial";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GitIcon from "../../icons/GitIcon";

export default function Header() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      initial={{ opacity: 0 }}
    >
      <Container>
        <Contents>
          <ContentSubLeft>
            <ButtonSocial
              icon={<LinkedinIcon />}
              link={"www.linkedin.com/in/rafaelasilva1993/"}
            />
            <ButtonSocial icon={<GitIcon />} link={"github.com/Raafa1993"} />
          </ContentSubLeft>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.6 }}
            initial={{ x: -100, opacity: 0 }}
            style={{width: '100%'}}
          >
            <ContentLeft>
              <Title>Olá sou Rafael</Title>
              <Subtitle>Frontend developer</Subtitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero magna odio ac adipiscing.
              </Description>

              <FieldGroup>
                <Button typeButton="linear">Downdoad cv</Button>
                <Button typeButton="default">contate-me</Button>
              </FieldGroup>
            </ContentLeft>
          </motion.div>
          <ContentRight>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.6 }}
              initial={{ x: 250, opacity: 0 }}
            >
              <SectionImage>
                <Image
                  width={440}
                  height={600}
                  src={ImagePerfil}
                  alt={"foto perfil"}
                  objectFit="cover"
                />
                <SectionWidgeBottom>
                  <motion.div
                    animate={{ y: [32, 0, 32], x: [32, 0, 32] }}
                    transition={{
                      repeat: Infinity,
                      type: "tween",
                      duration: 6,
                    }}
                  >
                    <div className="widgetOne" />
                  </motion.div>
                </SectionWidgeBottom>

                <SectionWidgeLeft>
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="widgetTwo"
                  />
                </SectionWidgeLeft>

                <SectionWidgeRight>
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      repeat: Infinity,
                      type: "tween",
                      duration: 6,
                    }}
                  >
                    <div className="widgetThere" />
                  </motion.div>
                </SectionWidgeRight>
              </SectionImage>
            </motion.div>
          </ContentRight>
          <ContentSubRight>
            <motion.div
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.8 }}
                initial={{ x: 40, opacity: 0 }}
              >
                <Mouse>
                  <MouseWheel />
                </Mouse>
            </motion.div>
          </ContentSubRight>
        </Contents>
      </Container>
    </motion.div>
  );
}
