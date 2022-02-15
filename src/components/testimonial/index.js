import React from 'react'
import { Container } from 'react-bootstrap'
import { LogoTournyaka } from '../../assets'

const Testimonial = () => {
  return (
    <div className='bg-warning w-100 py-5'>
      <Container className='d-grid justify-content-center w-50 my-2 py-2'>
        <p className='text-center'>
          <span className='fw-bolder'>Tournyaka</span> merupakan sebuah platform pariwisata yang
          menyediakan berbagai kebutuhan wisatawan dalam berwisata ke Pangandaran seperti layanan
          kasa tour guide, itinerary planner, paket wisata, yang menawarkan personal experience
          dimana wisatawan dapat mengatur rencana perjalanan ke berbagai destinasi wisata
          pangandaran yang diinginkan
        </p>
        <div className='d-flex justify-content-center my-3'>
          <img src={LogoTournyaka} alt='logo' />
        </div>
      </Container>
    </div>
  )
}

export default Testimonial
