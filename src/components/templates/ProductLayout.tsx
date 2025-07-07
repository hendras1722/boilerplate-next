'use client'
import { Box, Button, InputAdornment, Switch, TextField } from '@mui/material'
import DataTable from '../molecules/DataTable'
import { Search } from 'lucide-react'
import Modal from '../atoms/Modal'
import { useState } from 'react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRoute } from '@/composable/useRoute'

const formSchema = z.object({
  product_name: z.string().min(3, 'Product name must be at least 3 characters'),
  price: z
    .string()
    .refine(
      (value) => Number(value.replace(/[.]/g, '')) > 0,
      'Stock must be at least 0'
    ),
  stock: z.number(),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  active: z.boolean(),
})

export default function ProductLayout() {
  const [open, setOpen] = useState(false)

  const route = useRoute()

  console.log(route)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stock: 0,
      price: '0',
    },
  })

  const columns: {
    label: string
    minWidth: number
    accessor: 'name' | 'code' | 'popularity' | 'rating'
  }[] = [
    {
      label: 'Name',
      minWidth: 170,
      accessor: 'name',
    },
    {
      label: 'Code',
      minWidth: 100,
      accessor: 'code',
    },
    {
      label: 'Popularity',
      minWidth: 170,
      accessor: 'popularity',
    },
    {
      label: 'Rating',
      minWidth: 170,
      accessor: 'rating',
    },
  ]

  const items = [
    {
      name: 'Frozen yoghurt',
      code: '123',
      popularity: '123',
      rating: '123',
    },
  ]
  return (
    <div>
      <Modal setOpen={setOpen} open={open} title="Add Product" contentText="">
        <Box pb={2}>
          <div>
            <form
              onSubmit={form.handleSubmit((data) => console.log(data))}
              className="flex flex-col gap-3"
            >
              <TextField
                fullWidth
                label="Product Name"
                {...form.register('product_name')}
                error={!!form.formState.errors.product_name}
                helperText={form.formState.errors.product_name?.message}
                margin="dense"
              />
              <TextField
                fullWidth
                label="Price"
                {...form.register('price')}
                error={!!form.formState.errors.price}
                helperText={form.formState.errors.price?.message}
              />
              <TextField
                type="number"
                fullWidth
                label="Stock"
                {...form.register('stock')}
                error={!!form.formState.errors.stock}
                helperText={form.formState.errors.stock?.message}
              />
              <TextField
                fullWidth
                label="Description"
                {...form.register('description')}
                error={!!form.formState.errors.description}
                helperText={form.formState.errors.description?.message}
              />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <span>Product Status</span>
                <Switch {...form.register('active')} defaultChecked />
              </Box>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
      <div>
        <Box display={'flex'} justifyContent={'space-between'} mb={5} gap={3}>
          <TextField
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
            className="w-full"
            size="small"
          />
          <Button variant="contained" onClick={() => setOpen(true)}>
            Add
          </Button>
        </Box>
        <DataTable
          fields={columns}
          items={items}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          totalItems={1}
          page={0}
          rowsPerPage={10}
        />
      </div>
    </div>
  )
}
