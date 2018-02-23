import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label,Progress,Grid,Image} from 'semantic-ui-react'
import '../../App.css'


const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item className="box-list">
      <Grid.Column width={3}>
              <Image src='./img/ngaji.jpg' />
      </Grid.Column>

      <Item.Content className="box-list-tulisan">
      <Item.Header as='a'>Header</Item.Header>
      <Item.Meta>By:Fikri</Item.Meta>
      <Item.Meta>Mengajar Ngaji Di daerah Pelosok</Item.Meta>
      <Item.Meta>Target Dana</Item.Meta>
      <Item.Meta>
        <h3>Rp 2,000,000</h3>
      </Item.Meta>
        <Progress value='3' total='6' progress='percent' />
        <h2>Sudah Terkumpul:</h2><h3>Rp 1,000,000</h3>
      <Button positive>Positive Button</Button>
    </Item.Content>

    </Item>

  </Item.Group>
)

export default ItemExampleDivided
