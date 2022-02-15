import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LogoTournyakaFooter } from '../../assets'

const Footer = () => {
  return (
    <footer className='bg-dark text-white pt-5 mt-5'>
      <Container className='p-5'>
        <Row>
          <Col>
            <div className='fw-bold fs-5'>Info</div>
            <div className='my-2'>Destinasi Wisata</div>
          </Col>
          <Col className='d-grid gap-2'>
            <div className='fw-bold fs-5'>Perusahaan</div>
            <div>Tentang Kami</div>
            <div>Kontak</div>
            <div>Kerjasama</div>
          </Col>
          <Col>
            <div className='fw-bold fs-5'>Bantuan</div>
            <div className='my-2'>Kebijakan Privasi</div>
            <div>Syarat dan Ketentuan</div>
          </Col>
          <Col>
            <div className='fw-bold fs-5'>Sosial Media</div>
            <div className='my-2'>Facebook</div>
            <div>Whatsapp</div>
          </Col>
        </Row>
      </Container>
      <div className='d-flex justify-content-center'>
        <img src={LogoTournyakaFooter} alt='footerLogo' />
      </div>
      <hr />
      <div className='d-flex justify-content-center'>
        <div className='py-4'>&copy; 2022 Tournyaka</div>
      </div>
    </footer>
  )
}

export default Footer
