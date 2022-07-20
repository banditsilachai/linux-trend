import React from "react";
import { Title, Text, Button, Box, Stack } from "@mantine/core";
import seo from "../seo.config";
import { BrandGithub } from "tabler-icons-react";

const Hero = () => {
  return (
    <Stack
      spacing="xl"
      align="flex-start"
      sx={{
        height: 400,
        justifyContent: "center",
      }}
    >
      <Title
        order={1}
        sx={{
          fontSize: "48px",
        }}
      >
        {`${seo.title.split(" ")[0]} ${seo.title.split(" ")[1]} `}
        <Box
          sx={(theme) => ({
            color: theme.colors.yellow[4],
          })}
          component={`span`}
        >
          {seo.title.split(" ")[2]}
        </Box>
      </Title>

      <Text
        sx={(theme) => ({
          fontSize: theme.fontSizes.lg,
        })}
      >
        Get JSON data from DistroWatch Page Hit.
      </Text>
      <Button
        component="a"
        href="https://github.com/9MZa/linux-trend"
        size="lg"
        leftIcon={<BrandGithub size={24} />}
      >
        GitHub
      </Button>
    </Stack>
  );
};

export default Hero;
