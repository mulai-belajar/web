import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='left' size='mini' src='/assets/images/avatar/large/steve.jpg' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups
