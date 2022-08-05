import type { NextPage } from "next";
import useSWR from "swr";
import {
  Title,
  List,
  Anchor,
  Loader,
  Image,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  distroName: {
    filter: "grayscale(50%)",
    ":hover": {
      filter: "grayscale(0%)",
    },
  },
}));

const fetcher = (url: any) => fetch(url).then((res) => res.json());

interface DistroProp {
  no: number;
  name: string;
  logo: string;
  url: string;
}

const TopTen: NextPage = () => {
  const url = "/api/last1months?pageSize=10&pageOffset=0";
  const { data } = useSWR(url, fetcher);
  const { classes } = useStyles();

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
            <List.Item
              key={item.no}
              className={classes.distroName}
              icon={
                <Image src={item.logo} width={24} height={24} alt={item.name} />
              }
            >
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
