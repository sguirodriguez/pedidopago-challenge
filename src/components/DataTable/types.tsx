export type Column =
  | Array<{
      id:
        | 'name'
        | 'department'
        | 'responsibility'
        | 'unity'
        | 'status'
        | 'action'
        | 'agents_quantity'
      label: string
      minWidth: number
      align: 'right' | 'left' | 'center'
    }>
  | []

export interface Rows {
  name?: Array<[string, string]> | string
  department?: number | string
  responsibility?: number | string
  unity?: number | string
  status?: number | string
  action?: any
  agents_quantity?: number
}

export interface DataTableProps {
  columns: Column
  rows: Rows[]
  avatar?: true | false
  rowsPerPageVisible?: true | false
  paginationVisible?: true | false
  listMode: 'LISTEMPLOYES' | 'LISTRESPONSIBILITIES' | 'DEFAULT'
}
