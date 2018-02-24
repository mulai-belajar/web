import React from 'react'
import { Header, Table, Button } from 'semantic-ui-react'

const TableExamplePadded = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nama Kelas</Table.HeaderCell>
        <Table.HeaderCell>Lokasi</Table.HeaderCell>
        <Table.HeaderCell>Pembuat Kelas</Table.HeaderCell>
        <Table.HeaderCell>Target Donasi</Table.HeaderCell>
        <Table.HeaderCell>Donasimu</Table.HeaderCell>
        <Table.HeaderCell>Status Pembayaran</Table.HeaderCell>
        <Table.HeaderCell>Detail</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>Kelas Mengajar Ngaji</Table.Cell>
        <Table.Cell>Nusa Tenggara Barat</Table.Cell>
        <Table.Cell>Fahri Hmazah</Table.Cell>
        <Table.Cell>Rp 2,000,000</Table.Cell>
        <Table.Cell>Rp 500,000</Table.Cell>
        <Table.Cell>Sudah Bayar</Table.Cell>
        <Table.Cell><Button color='green'>Detail Kelas</Button></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Kelas Mengajar Ngaji</Table.Cell>
        <Table.Cell>Nusa Tenggara Barat</Table.Cell>
        <Table.Cell>Fahri Hmazah</Table.Cell>
        <Table.Cell>Rp 2,000,000</Table.Cell>
        <Table.Cell>Rp 500,000</Table.Cell>
        <Table.Cell>Sudah Bayar</Table.Cell>
        <Table.Cell><Button color='green'>Detail Kelas</Button></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Kelas Mengajar Ngaji</Table.Cell>
        <Table.Cell>Nusa Tenggara Barat</Table.Cell>
        <Table.Cell>Fahri Hmazah</Table.Cell>
        <Table.Cell>Rp 2,000,000</Table.Cell>
        <Table.Cell>Rp 500,000</Table.Cell>
        <Table.Cell>Sudah Bayar</Table.Cell>
        <Table.Cell><Button color='green'>Detail Kelas</Button></Table.Cell>
      </Table.Row>





    </Table.Body>
  </Table>
)

export default TableExamplePadded
