import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label,Progress } from 'semantic-ui-react'
import '../../App.css'


const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item className="box-list">
      <Item.Image src='../../img/ngaji.jpg' />

      <Item.Content>
        <Item.Header as='a'>Kelas Mengaji Juz 30</Item.Header>
        <Item.Meta>
          <span className='cinema'>Nusa Tenggara Timur</span>
        </Item.Meta>
        <Item.Description><p>Short Description About Class</p></Item.Description>
        <Item.Extra>
          <Label>By Fahri</Label>
          <Label icon='globe' content='Religion' />
        </Item.Extra>
        <Progress value='4' total='5' progress='percent' />
        <Item.Extra>
        <h2>Rp 2,000,000</h2>
        </Item.Extra>
        <Item.Extra>
          <Button primary floated='right'>
            Detail Kelas
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item className="box-list">
      <Item.Image src='../../img/ngaji.jpg' />

      <Item.Content>
        <Item.Header as='a'>Kelas Mengaji Juz 30</Item.Header>
        <Item.Meta>
          <span className='cinema'>Nusa Tenggara Timur</span>
        </Item.Meta>
        <Item.Description><p>Short Description About Class</p></Item.Description>
        <Item.Extra>
          <Label>By Fahri</Label>
          <Label icon='globe' content='Religion' />
        </Item.Extra>
        <Progress value='4' total='5' progress='percent' />
        <Item.Extra>
        <h2>Rp 2,000,000</h2>
        </Item.Extra>
        <Item.Extra>
          <Button primary floated='right'>
            Detail Kelas
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemExampleDivided
