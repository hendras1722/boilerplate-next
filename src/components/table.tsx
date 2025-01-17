'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import ArrayMap from './ArrayMap'
import { If, ConditionProvider } from './if'

interface Fields {
  key: string
  label: string
  width?: string
  class?: string
}
type ItemType = Record<
  string,
  string | number | React.ReactElement | null | undefined
>

interface TableDemoProps {
  fields: Fields[]
  items: ItemType[]
  classRow?: string
  classCol?: string
  footerContent?: React.ReactElement
}

export function TableDemo({
  fields,
  items,
  classRow,
  classCol,
  footerContent,
}: Readonly<TableDemoProps>) {
  return (
    <Table>
      <TableHeader>
        <TableRow className={cn(classRow)}>
          <ArrayMap
            of={fields}
            render={(field, index) => (
              <TableHead
                key={'head' + index}
                className={cn(field.class, 'w-fit')}
                style={{ width: field.width }}
              >
                {field.label}
              </TableHead>
            )}
          />
        </TableRow>
      </TableHeader>
      <TableBody>
        <ArrayMap
          of={items}
          render={(item, rowIndex) => (
            <TableRow key={'body' + rowIndex} className={cn(classRow)}>
              <ArrayMap
                of={fields}
                render={(field, colIndex) => (
                  <TableCell
                    key={'cel' + colIndex}
                    className={cn(classCol, field.class)}
                  >
                    {item[field.key] ?? '-'}
                  </TableCell>
                )}
              />
            </TableRow>
          )}
        />
      </TableBody>
      <ConditionProvider initialCondition={!!footerContent}>
        <If condition={!!footerContent}>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={fields.length}>{footerContent}</TableCell>
            </TableRow>
          </TableFooter>
        </If>
      </ConditionProvider>
    </Table>
  )
}
