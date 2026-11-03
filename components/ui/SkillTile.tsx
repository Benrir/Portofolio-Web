import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import type { Skill } from "../skills";

// The full-size tile used in Field of Expertise, and a compact one for the
// stack row on each project card
const sizes = {
  md: {
    item: { base: "66px", sm: "76px", md: "68px", lg: "76px" },
    tile: { base: "56px", sm: "68px", md: "60px", lg: "68px" },
    icon: { base: "26px", sm: "32px", md: "28px", lg: "32px" },
    radius: "18px",
  },
  sm: {
    item: "60px",
    tile: "44px",
    icon: "22px",
    radius: "12px",
  },
};

const SkillTile = ({
  name,
  Icon,
  color,
  bg,
  size = "md",
}: Skill & { size?: keyof typeof sizes }) => {
  const s = sizes[size];
  return (
    <Flex as="li" direction="column" align="center" gap="2" w={s.item}>
      <Flex
        aria-hidden="true"
        align="center"
        justify="center"
        w={s.tile}
        h={s.tile}
        borderRadius={s.radius}
        bg={bg ?? "surface2"}
        color={color}
        fontSize={s.icon}
        borderWidth={bg ? "0" : "1px"}
        borderColor="line"
        boxShadow="inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 10px 24px -12px rgba(0, 0, 0, 0.8)"
      >
        <Icon />
      </Flex>
      <Text fontSize="xs" color="fg2" textAlign="center" lineHeight="1.3">
        {name}
      </Text>
    </Flex>
  );
};

export default SkillTile;
