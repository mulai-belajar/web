import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import '../../App.css'

const CardExampleImageCard = () => (
  <Card className="box-user">
    <Image circular src='../../img/profile.jpg' />
    <Card.Content>
      <Card.Header>Fikri Muhammad</Card.Header>
    </Card.Content>

  </Card>
)

export default CardExampleImageCard
