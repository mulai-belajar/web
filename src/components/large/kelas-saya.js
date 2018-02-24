import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import '../../App.css'
import MenuNav from '../medium/navigation'
import ListKelas from '../medium/list-kelas'
import BoxOverview from '../medium/box-overview'
import MenuProUser from '../medium/profile-menu-user'
import FormOrderKelas from '../medium/form-buat-kelas'
import Table from '../medium/table-donasi'

const KelasUser = () => (
  <div>
                <BoxOverview />
                <ListKelas />
  </div>
)

export default KelasUser
