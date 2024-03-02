import { Container, Text, Timeline, TimelineItem } from '@mantine/core'
import React from 'react'
import classes from './FeaturesCards.module.css';
function HowItworks() {
    return (
        <Container size="lg" py="xl">
            <Text className={classes.title} variant={"text"} ta="center" mt="sm"> How It Works</Text>
            <Container size="lg" py="xl">
            <Timeline active={5} bulletSize={25}>
                <TimelineItem title="Create Your Workspace" />
                <TimelineItem title="Add Team Members" />
                <TimelineItem title="Collaborate in Real Time" />
                <TimelineItem title="Assign Tasks and Set Deadlines" />
                <TimelineItem title="Track Progress and Achieve Goals" />
            </Timeline>
            </Container>
        </Container>
    )
}

export default HowItworks