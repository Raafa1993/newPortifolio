import React, { useEffect, useState } from "react";
import Button  from '../../forms/buttons/Button';
import { motion } from "framer-motion";

//ICONS
import MoonIcon from "../../icons/MoonIcon";
import NotSoundIcon from "../../icons/NotSoundIcon";
import SoundIcon from "../../icons/SoundIcon";
import SunIcon from "../../icons/SunIcon";

import { Container, Content, ContentLeft, ContentRight } from "./styles";

export default function Sidebar() {
  const [menuFixed, setMenuFixed] = useState<boolean>(false);
  const [soundButton, setSoundButton] = useState(true);
  const [themeButton, setThemeButton] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setMenuFixed(true);
      } else if (window.scrollY === 0) {
        setMenuFixed(false);
      }
    });
    return () =>
      document.removeEventListener("scroll", () => {
        setMenuFixed(false);
      });
  }, []);


  return (
    <Container menuFixed={menuFixed}>
      <Content>
        <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.8 }}
            initial={{ y: -100, opacity: 0 }}
            style={{width: '100%'}}
          >
          <div className="container sidebarContainer">
            <ContentLeft>
              <h1>Logo</h1>
            </ContentLeft>
      
            <ContentRight>
              <button
                className="buttonIcon buttonSound"
                onClick={() => setSoundButton(!soundButton)}
              >
                {soundButton === true ? <SoundIcon /> : <NotSoundIcon />}
              </button>
              <button
                className="buttonIcon buttonTheme"
                onClick={() => setThemeButton(!themeButton)}
              >
                {themeButton === true ? <MoonIcon /> : <SunIcon />}
              </button>
              <Button
                style={{marginLeft: '34px'}}
                typeButton="degrade"
              >
                Acesse blog
              </Button>
            </ContentRight>
          </div>
        </motion.div>
      </Content>
    </Container>
  );
}
