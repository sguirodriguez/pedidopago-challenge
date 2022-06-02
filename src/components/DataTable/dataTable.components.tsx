import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Pagination from '@mui/material/Pagination'
import MenuItem from '@mui/material/MenuItem'
import {
  FooterPagination,
  FooterLeft,
  FooterTitle,
  SelectRowsPerPage,
  Container,
  ContainerTable,
  ContainerPaper,
  TableTitle,
  TableDescription,
} from './dataTable.styles'

interface Column {
  id: 'name' | 'calories' | 'fat' | 'carbs' | 'protein'
  label: string
  minWidth?: number
  align?: 'right' | 'left'
  format?: (value: number) => string
}

const DataTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangeRows = (event: any) => {
    setRowsPerPage(event.target.value)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1)
  }

  const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
    { id: 'calories', label: 'ISO Code', minWidth: 80, align: 'left' },
    { id: 'fat', label: 'Population', minWidth: 80, align: 'left' },
    { id: 'carbs', label: 'Size', minWidth: 80, align: 'left' },
    { id: 'protein', label: 'Best', minWidth: 80, align: 'left' },
  ]

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ]

  return (
    <Container>
      <ContainerPaper variant="outlined" className="paper-container">
        <ContainerTable>
          <Table>
            <TableHead className="head-table">
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      borderWidth: 0,
                    }}
                  >
                    <TableTitle>{column.label}</TableTitle>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={index}>
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id == 'name' ? (
                              <TableTitle>{value}</TableTitle>
                            ) : (
                              <TableDescription>{value}</TableDescription>
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </ContainerTable>

        <FooterPagination>
          <FooterLeft>
            <FooterTitle>
              Mostrando {rowsPerPage} de {rows.length} registros
            </FooterTitle>
            <SelectRowsPerPage
              defaultValue={10}
              value={rowsPerPage}
              onChange={handleChangeRows}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </SelectRowsPerPage>
          </FooterLeft>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </FooterPagination>
      </ContainerPaper>
    </Container>
  )
}

export default DataTable
