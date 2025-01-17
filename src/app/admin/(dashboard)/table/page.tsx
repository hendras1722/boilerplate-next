import { TableDemo } from '@/components/table'

export default function User() {
  const fields = [
    {
      label: 'Name',
      key: 'name',
      width: 'lg:w-[430px] w-[80px]',
    },
    {
      label: 'Kategory',
      key: 'category',
      width: 'lg:w-[130px] w-[50px]',
    },
    {
      label: 'Price',
      key: 'price',
      width: 'lg:w-[330px] w-[80px]',
    },
    {
      label: 'Tanggal',
      key: 'tanggal',
      width: 'lg:w-[330px] w-[80px]',
    },
  ]
  const items = [
    {
      name: 'John Doe',
      category: 'Electronics',
      price: '$99.99',
      tanggal: '2024-04-23',
    },
    {
      name: 'Jane Smith',
      category: 'Books',
      price: '$19.99',
      tanggal: '2024-04-22',
    },
    {
      name: 'Bob Johnson',
      category: 'Home & Garden',
      price: '$49.99',
      tanggal: '2024-04-21',
    },
    {
      name: 'Alice Brown',
      category: 'Electronics',
      price: '$149.99',
      tanggal: '2024-04-20',
    },
    {
      name: 'Charlie Davis',
      category: 'Clothing',
      price: '$29.99',
      tanggal: '2024-04-19',
    },
    {
      name: 'Eva Wilson',
      category: 'Books',
      price: '$14.99',
      tanggal: '2024-04-18',
    },
    {
      name: 'Frank Miller',
      category: 'Home & Garden',
      price: '$79.99',
      tanggal: '2024-04-17',
    },
    {
      name: 'Grace Lee',
      category: 'Electronics',
      price: '$199.99',
      tanggal: '2024-04-16',
    },
    {
      name: 'Henry Clark',
      category: 'Clothing',
      price: '$39.99',
      tanggal: '2024-04-15',
    },
    {
      name: 'Ivy Wang',
      category: 'Books',
      price: '$9.99',
      tanggal: '2024-04-14',
    },
  ]
  return (
    <TableDemo
      fields={fields}
      items={items}
      footerContent={<div className="text-right font-bold">Total Rows: 2</div>}
    ></TableDemo>
  )
}
