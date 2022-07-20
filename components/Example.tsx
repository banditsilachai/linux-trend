import React from "react";
import type { NextPage } from "next";
import { Button, Box, Text, Title, Stack } from "@mantine/core";
import { useState } from "react";
import { Prism } from "@mantine/prism";
import { useInterval } from "@mantine/hooks";

const fetchData = `fetch('https://linux-trend.vercel.app/api/last1months?pageSize=2&pageOffset=0')
.then(response => response.json())
.then(json => console.log(json))`;

const dummyData = `{
  items: [
    {
      no: 1,
      name: 'MX Linux',
      rank: 2495,
      trend: 'up',
      url: 'https://mxlinux.org/',
      yesterday: 2489
    },
    {
      no: 2,
      name: 'EndeavourOS',
      rank: 2398,
      trend: 'down',
      url: 'https://endeavouros.com/',
      yesterday: 2489
    }
  ],
  nextPageOffset: 1
}`;

const Example: NextPage = () => {
  const [data, setData] = useState("{}");
  const interval = useInterval(() => setData(dummyData), 1000);

  return (
    <Stack
      sx={{
        paddingTop: 20,
      }}
    >
      <Title>Try it Run</Title>
      <Text
        sx={(theme) => ({
          fontSize: theme.fontSizes.lg,
        })}
      >
        this code here, in a console or from any site
      </Text>

      <Prism
        language="javascript"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
      >
        {fetchData}
      </Prism>
      <Stack align={`flex-start`}>
        <Button my={`md`} onClick={interval.toggle}>
          Run
        </Button>
      </Stack>
      <Box>
        <Prism language="coffeescript">{data}</Prism>
      </Box>
    </Stack>
  );
};

export default Example;
