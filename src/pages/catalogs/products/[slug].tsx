import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.slug}</h1>
    </div>
  )
}