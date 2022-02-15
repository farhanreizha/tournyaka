import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { HeaderLogo, LogoTournyakaFooter } from '../../assets'

const NewPassword = () => {
  return (
    <div className='py-5'>
      <Container className='d-grid gap-5 w-50'>
        <div className='d-flex justify-content-center align-items-center gap-4'>
          <img src={LogoTournyakaFooter} alt='logo' />
          <img src={HeaderLogo} alt='logo' />
        </div>
        <Form className='d-flex flex-column'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='password' className='p-3 rounded-3' placeholder='Password Baru' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              type='password'
              className='p-3 rounded-3'
              placeholder='Konfirmasi Password'
            />
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button variant='warning' className='text-white fs-5 rounded-pill py-2 px-4' type='submit'>
              Daftar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default NewPassword
