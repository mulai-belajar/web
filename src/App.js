import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import MenuNav from './components/medium/navigation'
import ListKelas from './components/medium/list-kelas'
import BoxOverview from './components/medium/box-overview'
import MenuProUser from './components/medium/profile-menu-user'

const GridExampleVerticallyDivided = () => (
<div>

           <MenuNav />
          <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <MenuProUser />
            </Grid.Column>
            <Grid.Column width={13}>
              <BoxOverview />
              <ListKelas />
            </Grid.Column>
          </Grid.Row>

        </Grid>
</div>

)

export default GridExampleVerticallyDivided
