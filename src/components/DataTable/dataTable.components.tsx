import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Pagination from '@mui/material/Pagination'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FooterPagination, FooterLeft, FooterTitle } from './dataTable.styles'

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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <FooterPagination>
        <FooterLeft>
          <FooterTitle>
            Mostrando {rowsPerPage} de {rows.length} registros
          </FooterTitle>
          <Select
            defaultValue={10}
            value={rowsPerPage}
            onChange={handleChangeRows}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FooterLeft>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      </FooterPagination>
    </Paper>
  )
}

export default DataTable
