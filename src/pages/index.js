import { useState, useEffect } from 'react';
import Navigation from '../../components/navbar';
import Search from '../../components/search';

export default function Home() {
  return (
    <>
      <Navigation />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Search />
    </>
  )
}