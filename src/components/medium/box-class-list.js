import React, {Component} from 'react'
import { Grid, Image, Card, Progress, Button } from 'semantic-ui-react'

export default class Boxclasslist extends Component {
  state = { percent: 20 }

  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 10,
  })

    render() {
      return (
        <div position='left'>
          <Grid columns={3} padded>

            <Grid.Column width={8}>
              <Card>

                <Image src='/images/memanah.png'/>
                <Card.Content >
                  <Card.Header as='h1'>
                    <div>
                      <h3 className='class-name'>Kelas Memanah</h3>
                      <h4 className='class-category'>Hobi Dan Gaya Hidup</h4>
                      <h5 className='class-teacher'>Pengajar</h5>
                      <h6 className='teacher-name'>Fahri</h6>
                    </div>
                    <div>
                      <Progress percent={this.state.percent} indicating />
                    </div>
                    <Grid columns={2}>
                    <Grid.Column>
                      <div>
                        <h4 className='collected'>Terkumpul</h4>
                        <h4 className='collect-amount'>Rp800000</h4>
                     </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div>
                        <h4 className='day-left' textAlign='right'>Sisa hari</h4>
                        <h4 className='day' textAlign='right'>10 hari</h4>
                     </div>
                    </Grid.Column>
                    </Grid>
                  </Card.Header>
                </Card.Content>

              </Card>
             </Grid.Column>

             <Grid.Column width={8}>
               <Card>

                 <Image src='/images/memanah.png'/>
                 <Card.Content >
                   <Card.Header as='h1'>
                     <div>
                       <h3 className='class-name'>Kelas Memanah</h3>
                       <h4 className='class-category'>Hobi Dan Gaya Hidup</h4>
                       <h5 className='class-teacher'>Pengajar</h5>
                       <h6 className='teacher-name'>Fahri</h6>
                     </div>
                     <div>
                       <Progress percent={this.state.percent} indicating />
                     </div>
                     <Grid columns={2}>
                     <Grid.Column>
                       <div>
                         <h4 className='collected'>Terkumpul</h4>
                         <h4 className='collect-amount'>Rp800000</h4>
                      </div>
                     </Grid.Column>
                     <Grid.Column>
                       <div>
                         <h4 className='day-left' textAlign='right'>Sisa hari</h4>
                         <h4 className='day' textAlign='right'>10 hari</h4>
                      </div>
                     </Grid.Column>
                     </Grid>
                   </Card.Header>
                 </Card.Content>

               </Card>
              </Grid.Column>

          </Grid>
        </div>
    )
  }
  }
