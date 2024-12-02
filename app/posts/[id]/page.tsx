import { PostDetails } from '@/app/components/PostDetails'
import { Metadata } from 'next';
import React from 'react'

export default function PostPage() {
  return (
    <PostDetails/>
  )
}

export const metadata: Metadata = {
  title: "Post Details",
};