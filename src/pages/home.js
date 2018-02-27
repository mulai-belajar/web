import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import '../App.css'
import MenuNav from '../components/medium/header-user'
import ListKelas from '../components/medium/list-kelas'
import BoxOverview from '../components/medium/box-overview'
import MenuProUser from '../components/medium/profile-menu-user'
import FormOrderKelas from '../components/medium/form-buat-kelas'
import Table from '../components/medium/table-donasi'

const HomeUser = () => (
  <Grid centered columns={1} padded>
    <Grid.Column width={3}>
      <MenuProUser />
    </Grid.Column>
    <Grid.Column width={13}>
      <BoxOverview />
      <ListKelas />
      <Table />
    </Grid.Column>
  </Grid>
)

export default HomeUser
