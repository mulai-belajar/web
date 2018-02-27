import React, {Component} from 'react'
import { Form, Input, TextArea, Button, Grid, Image, Card, Header } from 'semantic-ui-react'

const kategori = [
  { key: 'IT', text: 'IT & SOFTWARE', value: '5a93910ea7b07f3b406f3eb9' },
  { key: 'SENI', text: 'SENI & DESAIN', value: '5a939129a7b07f3b406f3eba' },
  { key: 'BAHASA', text: 'BAHASA', value: '5a93912fa7b07f3b406f3ebb' },
  { key: 'BISNIS', text: 'BISNIS & MARKETING', value: '5a93913aa7b07f3b406f3ebc' },
  { key: 'AKADEMIK', text: 'AKADEMIK', value: '5a939140a7b07f3b406f3ebd' },
  { key: 'PENGEMBANGAN', text: 'PENGEMBANGAN DIRI', value: '5a939148a7b07f3b406f3ebe' },
  { key: 'HOBI', text: 'HOBI & GAYA HIDUP', value: '5a939153a7b07f3b406f3ebf' },
  { key: 'AGAMA', text: 'AGAMA', value: '5a93915ba7b07f3b406f3ec0' },
  { key: 'UJIAN', text: 'PERSIAPAN UJIAN', value: '5a939164a7b07f3b406f3ec1' },
  { key: 'KESEHATAN', text: 'KESEHATAN', value: '5a93916ca7b07f3b406f3ec2' },
]

const status = [
  { key: 'Darurat', text: 'Darurat', value: 'Darurat' },
  { key: 'Tidak Darurat', text: 'Tidak Darurat', value: 'Tidak Darurat' },
  ]

export default class FormKelas extends Component {
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
      <Grid centered columns={1} padded>
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
          <Form>
              <Form.Field id='form-input-control-first-name' control={Input} label='Nama Kelas' placeholder='Nama Kelas' />
              <Form.Select label='Kategori' options={kategori} placeholder='Kategori Kelas' />
              <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Alamat' placeholder='Alamat' />
              <Form.Field id='form-input-control-first-name' control={Input} label='Target Donasi ' placeholder='IDR' />
              <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Deskripsi Kelas' placeholder='Deskripsi Kelas' />
              <Form.Select label='Status' options={status} placeholder='Status' />
              <Form.Field id='form-textarea-control-opinion' control={Input} label='Inisiator Kelas' text={profile.nickname} value={profile.nickname} disabled/>
              <Form.Field id='form-button-control-public' control={Button} content='Buat Kelas' positive/>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
