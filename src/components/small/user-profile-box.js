import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import '../../App.css'

const CardExampleImageCard = () => (
  <Card className="box-user">
    <Image src='../../img/profile.jpg' size='medium' circular />
    <Card.Content>
      <Card.Header>Fikri Muhammad</Card.Header>
    </Card.Content>

  </Card>
)

export default CardExampleImageCard
