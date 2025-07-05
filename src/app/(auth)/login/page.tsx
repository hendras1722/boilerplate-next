'use client'

import React from 'react'
import { TextField, Button, Box, Typography, Paper } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useApi } from '@/composable/useApi'
import { LoginRequest, LoginResult } from '@/type/login'
import { BaseResponse } from '@/type/baseResponse'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z.string().nonempty(),
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate, isPending } = useApi<BaseResponse<LoginResult>, LoginRequest>(
    {
      url: '/api/login',
      method: 'POST',
      onSuccess: () => {
        window.location.href = '/admin/inventory'
      },
    }
  )
  const onSubmit = async (data: LoginFormInputs) => {
    mutate({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 10 }}>
      <Typography variant="h5" mb={3} textAlign="center">
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box mb={2}>
          <TextField
            label="Email"
            fullWidth
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>

        <Box mb={3}>
          <TextField
            label="Password"
            fullWidth
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isPending}
        >
          {(isPending && 'Loading...') || 'Login'}
        </Button>
      </form>
    </Paper>
  )
}
