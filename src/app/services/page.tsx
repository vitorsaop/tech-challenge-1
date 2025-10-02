import { HeaderServices } from '@/components/header-services';
import { FooterServices } from '@/components/footer-services';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderServices />
        <div style={{border: "3px solid blue"}}>
          <div className="container mx-auto">
            <h1>Página Services</h1>
          </div>
        </div>
      <FooterServices />
    </div>
  )
}

