import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { BgHero, ContentLogo } from '../../assets'
import './style.scss'

const Carousels = () => {
  return (
    <div id='home'>
      <div className='bg-dark'>
        <img className='w-100 opacity-50' src={BgHero} alt='cobain' />
      </div>
      <Container>
        <div className='content d-grid gap-3'>
          <img src={ContentLogo} alt='logo' />
          <p className='text-warning'>
            Make the best trip and new travel experiance with Tournyaka.h
          </p>
          <Button variant='warning' className='text-white col-4'>
            Ayo Berangkat!
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Carousels
