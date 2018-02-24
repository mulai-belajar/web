import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const DonationContent = () => (
  <Grid padded>
        <div className='donation-content'>
          <h2>Bantu Anak-anak di desa Sukrawetan belajar bahasa Inggris</h2>
            <p>
              Assalamu'alaikum, salam sejahtera. Nama saya Andrew, saya
              adalah seorang wirausaha asal desa Sukrawetan Indramayu.
              Keseharian saya setiap pagi hari dari rumah menuju tempat kerja
              saya adalah melewati sebuah pemukiman yang didalamnya terdapat
              banyak anak-anak yang sebagian besar tidak bisa menikmati bangku
              sekolah, bahkan beberapa dari mereka diminta ikut bekerja untuk
              membantu keuangan orang tua mereka.
            </p>
            <Image src='/images/anaksekolah.jpg' size='large' />
            <p>

            </p>
        </div>
      </Grid>

)

export default DonationContent
