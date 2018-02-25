import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label,Progress,Grid,Image} from 'semantic-ui-react'
import '../../App.css'


const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item className="box-list">
      <Grid.Column width={3}>
              <Image src='./img/ngaji.jpg' />
              <Item.Meta>Pengajar:</Item.Meta>
              <Item.Meta>Fikri Muhamad</Item.Meta>
              <Item.Meta>Lokasi Kelas:</Item.Meta>
              <Item.Meta>JL Desa Berbunga , Bogor</Item.Meta>
      </Grid.Column>

      <Item.Content className="box-list-tulisan">
      <Item.Header as='a'>Kelas Mengaji</Item.Header>
      <Item.Meta>Mengajar Ngaji Di daerah Pelosok NTB</Item.Meta>
      <Item.Meta>Target Dana</Item.Meta>
      <Item.Meta>
        <h3>Rp 2,000,000</h3>
      </Item.Meta>
        <Progress value='3' total='6' progress='percent'success />
        <h2>Sudah Terkumpul:</h2><h3>Rp 1,000,000</h3>
      <Button positive>Positive Button</Button>
    </Item.Content>

    </Item>



  </Item.Group>
)

export default ItemExampleDivided
