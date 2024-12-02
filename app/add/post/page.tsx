import { AddPost } from '@/app/components/AddPost'
import { Metadata } from 'next';
import React from 'react'

export default function AddPostPage() {
  return (
    <AddPost/>
  )
}

export const metadata: Metadata = {
  title: "Add Post",
};