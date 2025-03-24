"use client"

import ContactForm from '../../../components/ContactForm'
import { Badge } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center'>
      <Badge>
        Contact
      </Badge>
      <ContactForm isDarkMode={true} />
      <div className='flex gap-5 p-5 bg-gray-200 shadow-md m-5 w-1/2 h-1/2'>
        <iframe
          className='rounded-2xl'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.584882896966!2d4.338645076804666!3d50.85535537167242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e1!3m2!1sen!2sbe!4v1742379733211!5m2!1sen!2sbe"
          width="600"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <h1>CarDealer SPRL</h1>
          <h3>Entreprise de ventes de voiture</h3>
          <p>Place de la Minoterie 10</p>
          <p>1080 Molenbeek-Saint-Jean</p>
        </div>
      </div>
    </div>
  )
}
