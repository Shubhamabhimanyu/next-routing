
import React from 'react'
import Test from '../../components/Test'
import Data from '../../components/Data'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      {/* <Test xyz="5"/> */}
    {/* <Data/> */}
    Home

    <div>
    <Link href="/">Home</Link>
      
      <Link href="/blog">blog</Link>
      <Link href="/test">test</Link>
    </div>
    </div>
  )
}
