import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import './App.css'
import MenuNav from './components/medium/navigation'
import ListKelas from './components/medium/list-kelas'
import BoxOverview from './components/medium/box-overview'
import MenuProUser from './components/medium/profile-menu-user'
import FormOrderKelas from './components/medium/form-buat-kelas'
import Table from './components/medium/table-donasi'

const GridExampleVerticallyDivided = () => (
<div>

           <MenuNav />
          <div  className="box-user-page">
            <Grid>
            <Grid.Row  className="box-noborder">
              <Grid.Column width={3}>
                <MenuProUser />
              </Grid.Column>
              <Grid.Column width={13}>
                <BoxOverview />
                <ListKelas />
                <Table />
              </Grid.Column>
            </Grid.Row>

            </Grid>
          </div>
</div>

)

export default GridExampleVerticallyDivided
