import React from 'react'
import { Metadata } from 'next';
import { Posts } from '../../components/Posts';

export default function PostsPage({params}: any) {
  console.log(params.id);
  
  return (
    <Posts id={params.id}/>
  )
}

export const metadata: Metadata = {
  title: "Posts",
};