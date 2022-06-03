import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
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
  HeaderTable,
  Row,
  AvatarAndText,
  MoreVertIconTable,
  Status,
  StatusInactive,
  ContainerAccordion,
  ButtonShowMore,
  TextShowMore,
} from './dataTable.styles'
import Avatar from '@mui/material/Avatar'
import AccordionComponent from '../accordion/accordion.components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Column = Array<{
  id: 'name' | 'department' | 'responsibility' | 'unity' | 'status' | 'action'
  label: string
  minWidth: number
  align: 'right' | 'left' | 'center'
}>

interface Rows {
  name?: Array<[string, string]> | string
  department?: number | string
  responsibility?: number | string
  unity?: number | string
  status?: number | string
  action?: any
}

interface DataTableProps {
  columns: Column
  rows: Rows[]
  avatar?: true | false
  rowsPerPageVisible?: true | false
  paginationVisible?: true | false
}

const DataTable = ({
  columns,
  rows,
  avatar = false,
  rowsPerPageVisible = true,
  paginationVisible = true,
}: DataTableProps) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangeRows = (event: any) => {
    setRowsPerPage(event.target.value)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1)
  }

  const verifyAvatarIsVisible = (value: any) => {
    if (!avatar) {
      return value
    }
    return (
      <AvatarAndText>
        {Array.isArray(value) ? (
          <Avatar src={value[1]} style={{ width: 32, height: 32 }} />
        ) : (
          <Avatar src="/broken-image.jpg" style={{ width: 32, height: 32 }} />
        )}
        <TableTitle>{Array.isArray(value) ? value[0] : value}</TableTitle>
      </AvatarAndText>
    )
  }

  const translatorStatus = (value: string) => {
    const translator = {
      inactive: <StatusInactive>Inativo</StatusInactive>,
      active: <Status>Ativo</Status>,
    }

    if (!value) {
      return <StatusInactive>Inativo</StatusInactive>
    }

    return translator[value as keyof typeof translator]
  }

  return (
    <Container>
      <ContainerAccordion>
        {rows?.map((row: any) => (
          <AccordionComponent row={row} columns={columns} />
        ))}

        <ButtonShowMore variant="outlined">
          <ExpandMoreIcon style={{ fontSize: 18 }} />
          <TextShowMore>Carregar mais</TextShowMore>
        </ButtonShowMore>
      </ContainerAccordion>

      <ContainerPaper variant="outlined" className="paper-container">
        <ContainerTable>
          <Table>
            <TableHead className="head-table">
              <TableRow>
                {columns?.map(column => (
                  <HeaderTable
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                    }}
                  >
                    <TableTitle>{column.label}</TableTitle>
                  </HeaderTable>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={index}>
                      {columns?.map(column => {
                        const value = row[column.id]
                        if (column.id == 'status') {
                          return (
                            <Row key={column.id} align={column.align}>
                              {translatorStatus(value)}
                            </Row>
                          )
                        }

                        if (column.id == 'action') {
                          return (
                            <Row key={column.id} align={column.align}>
                              <a onClick={() => console.log(value)}>
                                <MoreVertIconTable />
                              </a>
                            </Row>
                          )
                        }
                        return (
                          <Row key={column.id} align={column.align}>
                            {column.id == 'name' ? (
                              verifyAvatarIsVisible(value)
                            ) : (
                              <TableDescription>{value}</TableDescription>
                            )}
                          </Row>
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
            {rowsPerPageVisible && (
              <>
                <FooterTitle>
                  Mostrando {rowsPerPage} de {rows?.length} registros
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
              </>
            )}
          </FooterLeft>

          {paginationVisible && (
            <Pagination
              count={rows ? Math.ceil(rows?.length / rowsPerPage) : 0}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          )}
        </FooterPagination>
      </ContainerPaper>
    </Container>
  )
}

export default DataTable
