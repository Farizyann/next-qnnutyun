import React from 'react'
import { Users } from '../components/Users'
import { Metadata } from 'next';

export default function UsersPage() {
  return (
    <Users/>
  )
}

export const metadata: Metadata = {
  title: "Users",
};