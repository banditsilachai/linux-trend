import { Title, Text, Stack, Anchor, List } from "@mantine/core";

const apiLink = [
  { title: "Last 12 Months", href: "api/last12months" },
  { title: "Last 6 Months", href: "api/last6months" },
  { title: "Last 3 Months", href: "api/last3months" },
  { title: "Last 1 Months", href: "api/last1months" },
];

const Resources = () => {
  return (
    <Stack sx={{ paddingTop: 50, paddingBottom: 50 }}>
      <Title>Resources</Title>
      <Text
        sx={(theme) => ({
          fontSize: theme.fontSizes.lg,
        })}
      >
        Following resources are available which you can access via our REST API.
      </Text>

      <List
        spacing="xs"
        size="sm"
        sx={(theme) => ({
          paddingLeft: theme.spacing.lg,
          fontSize: theme.fontSizes.md,
        })}
      >
        {apiLink.map((item, i) => {
          return (
            <List.Item key={i}>
              <Anchor
                href={item.href}
                sx={(theme) => ({
                  color: theme.colors.dark[3],
                  "&:hover": {
                    color: theme.colors.dark[5],
                  },
                })}
              >
                {item.title}
              </Anchor>
            </List.Item>
          );
        })}
      </List>
    </Stack>
  );
};

export default Resources;
