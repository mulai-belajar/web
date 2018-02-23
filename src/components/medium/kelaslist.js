import React,{Component}  from "react"
import { Grid, Card, Image } from 'semantic-ui-react'
import DATAKELAS from "../../data/data-kelas"

export default class Kelaslist extends Component {
  render() {
    return(
      <Grid columns={3} padded>
      {DATAKELAS.map((KELAS) =>
        <Grid.Column>
          <Card>
            <Image src={KELAS.image}/>
            <Card.Header textAlign='center'>
              {KELAS.class}
            </Card.Header>
            <Card.Meta textAlign='center'>
              {KELAS.category}
            </Card.Meta>
            <Card.Content textAlign='center'>
              {KELAS.name}
            </Card.Content>
            <Card.Content extra textAlign='center'>
              {KELAS.donation}
            </Card.Content>
            <Card.Content extra textAlign='center'>
              {KELAS.time}
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    )
  }
}
