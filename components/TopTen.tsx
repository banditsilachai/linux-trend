import type { NextPage } from "next";
import useSWR from "swr";
import { Title, List, Anchor, Loader } from "@mantine/core";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

interface DistroProp {
  no: number;
  name: string;
  url: string;
}

const TopTen: NextPage = () => {
  const url = "/api/last1months?pageSize=10&pageOffset=0";
  const { data } = useSWR(url, fetcher);
  if (!data) return <Loader />;
  return (
    <>
      <Title>Top 10</Title>
      <List
        spacing="xs"
        center
        sx={{ paddingTop: 20, paddingBottom: 20, marginLeft: 30 }}
      >
        {data?.items.map((item: DistroProp) => {
          return (
            <List.Item key={item.no}>
              <Anchor color="dark" href={item.url}>
                {item.name}
              </Anchor>
            </List.Item>
          );
        })}
      </List>
    </>
  );
};

export default TopTen;
