import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='left' size='mini' src='../../img/003-rocket.png' />
        <Card.Header>
          Kelas Berjalan
        </Card.Header>
        <Card.Description>
          <h2>23</h2>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='left' size='mini' src='../../img/002-health-care.png' />
        <Card.Header>
          Jumlah Donasi
        </Card.Header>
        <Card.Description>
          <h2>Rp 700,000</h2>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='left' size='mini' src='../../img/001-protest.png' />
        <Card.Header>
          Rencana Kelas
        </Card.Header>
        <Card.Description>
          <h2>9</h2>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups
