import React, { Component } from 'react'
import { Accordion, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Footer from '../small/footer'

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
    <Grid centered columns={1} padded>
      <Grid.Column>
     <div className='accordion'>
       <h1 className='accordion-title'>Panduan Umum</h1>
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown'/>
           Apa itu Mulai Belajar?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            <Link to='/'>Mulai Belajar</Link> adalah platform crowd funding untuk membuat
            kelas baru sesuai dengan kategori yang telah disediakan. User dapat memulai
            membuat pengajuan kelas baru atau memilih kelas yang telah tersedia dan menjadi
            donatur.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Bagaimana cara anda mendonasikan uang anda ke Mulai Belajar?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Anda dapat mentransfer melalui Bank Impact Byte dengan nomor rekening 1234 5678 1234
            atas nama Mulai Belajar. Konfirmasi pembayaran dengan mengirim
            email ke info.mulaibelajar@gmail.com
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Apakah ada biaya untuk menggalang dana di Mulai Belajar?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Anda dapat membuat halaman kelas secara gratis. Untuk setiap donasi yang
            terkumpul, Mulai Belajar mengenakan biaya administrasi platform (5%).
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Apakah Mulai Belajar langsung memberikan dana ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Tidak.
          </p>
          <p>
            Mulai Belajar hanya menyediakan fasilitas website untuk menggalang dana secara online, kami
            tidak memiliki dana yang bisa disalurkan. Keberhasilan sebuah penggalangan dana sangat bergantung
            pada kualitas konten, luas jaringan dan upaya galang dana yang dilakukan.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Siapa saja yang bisa membuat kelas di Mulai Belajar?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Mulai Belajar memfasilitasi siapa saja yang ingin membuat kelas.
          </p>
          <p>
            Untuk saat ini, Mulai Belajar masih belum digunakan oleh individu/pribadi maupun
            masyarakat luas kecuali tim dari Mulai Belajar, dikarenakan masih berada pada tahap beta.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Siapa saja yang akan donasi di kelas saya?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            Berdasarkan statistik, 40% donatur pertama berasal dari kenalan/lingkaran terdekat
            pemilik kelas, 30% kedua berasal dari temannya teman dan 30% berikutnya hingga
            tidak terbatas dari orang yang tidak dikenal.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Apakah Mulai Belajar melakukan verifikasi terhadap proposal pembuatan kelas?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            Setiap pembuat kelas (inisiator) wajib melampirkan ID KTP, foto diri terbaru,
            akun social media, dan jika diperlukan akan diwawancarai melalui telfon untuk
            melewati proses verifikasi. Jika tidak terverifikasi, maka user tersebut tidak
            dapat mencairkan donasi yang terkumpul. Mulai Belajar juga mewajibkan inisiator
            membuat update & laporan penggunaan dana melalui halaman kelas Mulai Belajar.
          </p>
          <p>
            Sebagai open platform kami tidak bisa sepenuhnya memastikan keaslian dan hasil dari
            sebuah kelas/campaign. Untuk itu kami menyarankan donatur untuk berdonasi
            ke kelas/campaign yang dikenal/dipercaya. Kelas/campaign yang terpercaya umumnya
            sudah mendapatkan donatur awal (tidak 0%), memberikan keterangan lengkap beserta
            kontak, dan aktif menulis update/laporan.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
           Apa yang harus saya lakukan apabila ingin berkolaborasi dengan Mulai Belajar?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            Mohon kirimkan via email info.mulaibelajar@gmail.com detail kerjasama yang Anda tawarkan
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Jadi apa manfaat menggunakan Mulai Belajar?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>

         <ul>
          <li>
            Transparan
          <p>
            Tampilkan informasi lengkap tentang kelas/campaign Anda di sebuah halaman yang dapat
            diakses oleh siapa saja secara online. Di halaman tersebut orang dapat melihat jumlah
            donasi yang terkumpul dan list donatur untuk memastikan donasi mereka sudah diterima.
          </p>
          </li>
         </ul>

         <ul>
          <li>
            Akuntabel
          <p>
            Melalui fitur update, setiap perkembangan dari kelas/campaign Anda akan langsung terkirim ke
            alamat email setiap donatur. Pastikan kepercayaan dan amanah donatur terjaga melalui
            fitur update.
          </p>
          </li>
         </ul>

         <ul>
          <li>
            Viral
          <p>
            Karena berbasis online, Mulai Belajar sangat memungkinkan kelas/campaign Anda menjadi viral
            di social media, dan mendapatkan donatur di luar jejaring Anda.
          </p>
          </li>
          </ul>

        </Accordion.Content>
      </Accordion>
     </div>
     </Grid.Column>
     <Grid.Column>
       <Footer />
     </Grid.Column>
   </Grid>
    )
  }
}
