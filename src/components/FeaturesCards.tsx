import { faListCheck, faSliders, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import classes from './FeaturesCards.module.css';
  
  const mockdata = [
    {
      title: 'Intuitive Task Creation',
      description:
        'Experience a seamless task creation process with our intuitive interface. Quickly add, prioritize, and assign tasks with just a few clicks. Say goodbye to complex setups and hello to effortless task planning that adapts to your workflow.',
      icon: faListCheck,
    },
    {
      title: 'Real-time Collaboration',
      description:
        'Boost your team\'s productivity with real-time collaboration features. Stay connected with your colleagues, share updates, and work together seamlessly. ',
      icon: faUsers,
    },
    {
      title: 'Customizable Workflows',
      description:
        ' Tailor our tool to fit the way your team works, not the other way around. From project initiation to completion, create workflows that align with your team\'s specific needs, ensuring optimal efficiency and project success',
      icon: faSliders,
    },
  ];
  
  export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <FontAwesomeIcon style={{"fontSize":"30px" }} color={"theme.colors.blue"} icon={feature.icon} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Best company ever
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Find what suits you the best
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Easily create, assign, and track tasks with our user-friendly interface. Stay informed with real-time collaboration, customizable workflows, and timely alerts.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }