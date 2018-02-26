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
            <Card.Header>
              {KELAS.class}
            </Card.Header>
            <Card.Meta>
              {KELAS.category}
            </Card.Meta>
            <Card.Content>
              {KELAS.name}
            </Card.Content>
            <Card.Content>
              {KELAS.donation}
            </Card.Content>
            <Card.Content>
              {KELAS.time}
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    )
  }
}
