import React, {Component} from 'react';
import '../App.css';
import {Grid, Segment, Image, Step} from 'semantic-ui-react'
import Footer from '../components/small/footer'
import Navbar from '../components/small/navbar'
import Slides from '../components/medium/slides'
class Tentang extends Component {
  render() {
    return (<div>

      <Grid columns={1}>

        <Grid.Column>
          <Navbar/>
        </Grid.Column>

        <div className='segment-about'>

          <Segment.Group>
            <Segment>
              <h3>Apa itu Mulai Belajar?</h3>
            </Segment>
            <Segment.Group>
              <Segment>
                <h4>
                Mulai Belajar adalah platform crowd funding untuk membuat kelas baru sesuai dengan kategori yang telah disediakan.
                User dapat memulai membuat pengajuan kelas baru atau memilih kelas yang telah tersedia dan menjadi donatur.
              </h4>
              </Segment>
            </Segment.Group>
          </Segment.Group>
          <br/>
          <Segment.Group >

            <Segment>
              <h3>Bagaimana cara donasi di Mulai Belajar?</h3>
            </Segment>

          <div className='how-to-donate'>
            <Step.Group>
              <Step active>
                <Image className='about-logo' src='./img/verification.png'/>
                <Step.Content>
                  <Step.Title>Masuk/Daftar</Step.Title>
                  <Step.Description>Masuk ke akun anda</Step.Description>
                </Step.Content>
              </Step>

              <Step active>
                <Image className='about-logo' src='./img/questions.png'/>
                <Step.Content>
                  <Step.Title>Pilih Kelas</Step.Title>
                  <Step.Description>Kelas yang anda kehendaki</Step.Description>
                </Step.Content>
              </Step>

              <Step active>
                <Image className='about-logo' src='./img/donate.png'/>
                <Step.Content>
                  <Step.Title>Donasi</Step.Title>
                  <Step.Description>Tentukan jumlah donasi</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
            </div>
          </Segment.Group>

          </div>

          <Grid.Row>
            <Grid.Column>
              <Footer/>
            </Grid.Column>
          </Grid.Row>

        </Grid>

      </div>);
  }
}

export default Tentang
