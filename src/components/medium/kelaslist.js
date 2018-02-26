import React,{Component}  from "react"
import { Grid, Card, Image, Progress } from 'semantic-ui-react'
import DATAKELAS from "../../data/data-kelas"

export default class Kelaslist extends Component {
  state = { percent: 20 }

  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 10,
  })

  render() {
    return(
      <Grid columns={3} padded>
      {DATAKELAS.map((KELAS) =>
        <Grid.Column>
          <Card>
            <Image src={KELAS.image}/>
            <Card.Content padded>
             <Card.Header>
              <div>
               <h3 className='class-name'>{KELAS.class}</h3>
               <h4 className='class-category'>{KELAS.category}</h4>
              </div>
              <Card.Content>
                <div>
                 <h5 className='name'>{KELAS.name}</h5>
                </div>
              </Card.Content>
              <div className='indicator'>
               <Progress percent={this.state.percent} indicating />
              </div>
              <Grid columns={2}>
               <Grid.Column>
                <Card.Content>
                  <h5 className='collected'>Terkumpul</h5>
                  <h5 className='collect-amount'>{KELAS.donation}</h5>
                </Card.Content>
               </Grid.Column>
               <Grid.Column>
                <Card.Content>
                  <h5 className='day-left'>Sisa hari</h5>
                  <h5 className='day'>{KELAS.time}</h5>
                </Card.Content>
               </Grid.Column>
              </Grid>
             </Card.Header>
           </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    )
  }
}
