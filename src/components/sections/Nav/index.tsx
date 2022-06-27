import React, { useState } from "react";
import { motion } from "framer-motion";
import ButtonLink from "../../widgets/ButtonLink";

import { Container } from "./styles";
import { NavLinkData } from "../../Data/NavLinkData";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
      <Container>
        {NavLinkData.map((row) => (
          <ButtonLink
            key={row.id}
            isActive={row.link === activeNav}
            href={row.link}
            onClick={() => setActiveNav(row.link)}
          >
            {row.icon}
          </ButtonLink>
        ))}
      </Container>
  );
}
