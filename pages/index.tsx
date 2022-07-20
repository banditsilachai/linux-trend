import type { NextPage } from "next";
import Head from "next/head";
import { GithubIcon } from "@welcome-ui/icons.github";
import { Button } from "@welcome-ui/button";
import { Text } from "@welcome-ui/text";
import { Box } from "@welcome-ui/box";
import { Stack } from "@welcome-ui/stack";
import { Link } from "@welcome-ui/link";

const webInfo = {
  title: "Linux Trend API",
  description: "Get JSON data from DistroWatch Page Hit.",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{webInfo.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        maxW={2 / 3}
        alignContent={`center`}
        alignItems={`center`}
        margin={`auto`}
      >
        <Box py={`100px`}>
          <Text variant={`h1`}>
            {`${webInfo.title.split(" ")[0]} ${webInfo.title.split(" ")[1]} `}
            <Box as={`span`} color={`primary.500`}>
              {webInfo.title.split(" ")[2]}
            </Box>
          </Text>
          <Text variant={`h4`} as={`p`} fontWeight={`400`}>
            Get JSON data from DistroWatch Page Hit.
          </Text>
          <Button
            mt={`10`}
            size={`lg`}
            as="a"
            href="https://github.com/9MZa/linux-trend"
            target="_blank"
          >
            <GithubIcon />
            <span>GitHub</span>
          </Button>
        </Box>

        <Text variant={`h2`}>Resources</Text>
        <Text variant={`h4`} fontWeight={`400`} as={`p`}>
          Following resources are available which you can access via our REST
          API.
        </Text>

        <Stack as={`ul`}>
          <Link href={`api/last12months`}>Last 12 Months</Link>
          <Link href={`api/last6months`}>Last 6 Months</Link>
          <Link href={`api/last3months`}>Last 3 Months</Link>
          <Link href={`api/last1months`}>Last 1 Months</Link>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
