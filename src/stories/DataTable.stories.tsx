import type { Meta, StoryObj } from '@storybook/react'
import { DataTable, type Column } from '../components/DataTable'
import React from 'react'

type User = { id: number; name: string; email: string; role: 'Admin' | 'Editor' | 'Viewer' }

const columns: Column<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role' },
]

const meta: Meta<typeof DataTable<User>> = {
  title: 'Data Display/DataTable',
  component: DataTable<User>,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A generic, typed data table with sorting, multi-row selection, loading and empty states. Uses semantic table markup and keyboard-friendly controls.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof DataTable<User>>

const sampleData: User[] = [
  { id: 1, name: 'Aman Gupta', email: 'aman@example.com', role: 'Admin' },
  { id: 2, name: 'Priya Singh', email: 'priya@example.com', role: 'Editor' },
  { id: 3, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'Viewer' },
]

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
  },
}

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
}

export const CustomRender: Story = {
  render: () => (
    <DataTable
      data={sampleData}
      columns={[
        { key: 'name', header: 'Name', sortable: true },
        { key: 'email', header: 'Email', sortable: true },
        {
          key: 'role',
          header: 'Role',
          render: (value) => (
            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-blue-100 text-blue-700">
              {String(value)}
            </span>
          ),
        },
      ]}
      selectable
      onRowSelect={(rows) => console.log('Selected:', rows)}
    />
  ),
}
