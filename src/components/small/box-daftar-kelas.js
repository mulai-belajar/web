import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label,Progress } from 'semantic-ui-react'

const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
        <Progress value='4' total='5' progress='percent' />
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
