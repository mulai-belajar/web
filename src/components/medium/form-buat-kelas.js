import React from 'react'
import { Form, Input, TextArea, Button,Label } from 'semantic-ui-react'

const options = [
  { key: 'IT', text: 'IT & SOFTWARE', value: 'it' },
  { key: 'SENI', text: 'SENI & DESAIN', value: 'seni' },
  { key: 'BAHASA', text: 'BAHASA', value: 'bahasa' },
  { key: 'BISNIS', text: 'BISNIS & MARKETING', value: 'bisnis' },
  { key: 'AKADEMIK', text: 'AKADEMIK', value: 'akademik' },
  { key: 'PENGEMBANGAN', text: 'PENGEMBANGAN DIRI', value: 'pengembangan' },
  { key: 'HOBI', text: 'HOBI & GAYA HIDUP', value: 'hobi' },
  { key: 'AGAMA', text: 'AGAMA', value: 'agama' },
  { key: 'UJIAN', text: 'PERSIAPAN UJIAN', value: 'uijan' },
  { key: 'KESEHATAN', text: 'KESEHATAN', value: 'kesehatan' },
]

const FormExampleFieldControlId = () => (
  <Form>
      <Form.Field id='form-input-control-first-name' control={Input} label='Nama Kelas' placeholder='Nama Kelas' />
      <Form.Select label='Kategori' options={options} placeholder='Kategori Kelas' />
      <Form.Field id='form-input-control-last-name' control={Input} label='Lokasi' placeholder='Lokasi' />
      <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Alamat' placeholder='Alamat' />
      <Form.Field id='form-input-control-first-name' control={Input} label='Jumlah Donasi ' placeholder='Rp' />
      <Form.Field id='form-input-control-first-name' control={Input} label='Batas Akhir Donasi ' placeholder='Tanggal' />
      <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Deskripsi Kelas' placeholder='Deskripsi Kelas' />
      <Form.Field id='form-button-control-public' control={Button} content='Confirm'/>
  </Form>
)

export default FormExampleFieldControlId
