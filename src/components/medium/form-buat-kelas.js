import React, {Component} from 'react'
import { Input, Label, Form, TextArea, Button, Grid, Image, Card, Header } from 'semantic-ui-react'
import axios from 'axios'
import querystring from 'querystring'
import swal from 'sweetalert'

export default class FormKelas extends Component {
  state = {
    name: '',
    address: '',
    description: '',
    total_donation: '',
    category: '',
    status: '',
    created_by: ''
  }

  handleChange = event => {
    this.setState({
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      description: document.getElementById('description').value,
      total_donation: document.getElementById('total_donation').value,
      category: document.getElementById('category').value,
      status: document.getElementById('status').value,
      created_by: document.getElementById('created_by').value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      name : this.state.name,
      address : this.state.address,
      description : this.state.description,
      total_donation : this.state.total_donation,
      category : this.state.category,
      status : this.state.status,
      created_by : this.state.created_by
    }

    const { getAccessToken } = this.props.auth

    const config = {
      headers: {
        'Authorization' : `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }

    axios.post(`${process.env.REACT_APP_API_URL}/class`, querystring.stringify(data), config)
    .then((response) => {
      swal({
        title: 'Selamat',
        text: 'Anda telah berhasil membuat kelas baru',
        icon: 'success',
        button: 'Lihat'
      }).then(okay => {
         if (okay) {
          <Redirect to='/' push />
        }
      })
    }).catch((error) => {
      swal('Maaf', 'Silakan coba kembali', 'error')
    })
  }

  componentWillMount() {
    this.setState({ profile: {} })
    const { userProfile, getProfile } = this.props.auth
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile })
      })
    } else {
      this.setState({ profile: userProfile })
    }
  }
  render(){
    const { profile } = this.state
    return(
      <Grid centered columns={1} padded={true}>
        <Grid.Column width={4}>
          <Card fluid>
            <Image src={profile.picture} fluid />
            <Card.Content>
              <Card.Header>
                {profile.name}
              </Card.Header>
              <Card.Meta>
                {profile.nickname}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header size='large'>Buat Kelas Baru</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Nama Kelas</label>
                <input id='name' placeholder='Nama Kelas' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field
                  id='address'
                  control={TextArea}
                  label='Alamat'
                  placeholder='Alamat'
                  onChange={this.handleChange}
              />
              <Form.Field
                  id='description'
                  control={TextArea}
                  label='Deskripsi'
                  placeholder='Deskripsi'
                  onChange={this.handleChange}
              />
              <Form.Field>
                <label>Target Donasi</label>
                <Input id='total_donation' labelPosition='right' type='number' onChange={this.handleChange}>
                  <Label basic>IDR</Label>
                  <input/>
                </Input>
               </Form.Field>
              <Form.Field>
                <label>Kategori</label>
                  <select id='category' name='category' onChange={this.handleChange}>
                    <option value='' hidden>Pilih Kategori</option>
                    <option value='5a93910ea7b07f3b406f3eb9'>IT dan Software</option>
                    <option value='5a939129a7b07f3b406f3eba'>Seni dan Desain</option>
                    <option value='5a93912fa7b07f3b406f3ebb'>Bahasa</option>
                    <option value='5a93913aa7b07f3b406f3ebc'>Bisnis dan Marketing</option>
                    <option value='5a939140a7b07f3b406f3ebd'>Pengembangan Diri</option>
                    <option value='5a939148a7b07f3b406f3ebe'>Hobi dan Gaya Hidup</option>
                    <option value='5a939153a7b07f3b406f3ebf'>Agama</option>
                    <option value='5a93915ba7b07f3b406f3ec0'>Persiapan Ujian</option>
                    <option value='5a939164a7b07f3b406f3ec1'>Kesehatan</option>
                    <option value='5a93916ca7b07f3b406f3ec2'>Akademik</option>
                  </select>
              </Form.Field>
              <Form.Field>
                <label>Status</label>
                  <select id='status' name='status' onChange={this.handleChange}>
                    <option value='' hidden>Pilih Status</option>
                    <option value='Darurat'>Darurat</option>
                    <option value='Tidak Darurat'>Tidak Darurat</option>
                  </select>
              </Form.Field>
              <Form.Field>
                <label>Inisiator Kelas</label>
                <input id='created_by' value={profile.nickname} disabled onChange={this.handleChange}/>
              </Form.Field>
              <Button type='submit' positive>Buat Kelas</Button>
            </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
