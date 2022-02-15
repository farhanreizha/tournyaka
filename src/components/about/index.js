import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IconFeature } from '../../assets'

const About = () => {
  return (
    <div id='about' className='my-5 py-5'>
      <div className='d-flex justify-content-center my-5'>
        <p className='fs-1 fw-bolder col-2 text-center'>Mengapa harus tournyaka?</p>
      </div>
      <Container className='my-5'>
        <Row>
          <Col className='me-5'>
            <div className='d-flex gap-5 pb-3'>
              <div>
                <img src={IconFeature} alt='' />
              </div>
              <div>
                <p className='fs-5 fw-bold'>Liburan sesuai mood kamu</p>
                <p>
                  Tournyaka akan memberikan rekomendasi tempat wisata dan suasana liburan yang
                  sesuai dengan suasana hati kamu.
                </p>
              </div>
            </div>
            <div className='d-flex gap-5 pt-3'>
              <div>
                <img src={IconFeature} alt='' />
              </div>
              <div>
                <p className='fs-5 fw-bolder'>Banyak pilihan dan gak ribet</p>
                <p>
                  Tournyaka menyediakan beragam trip ke berbagai tempat wisata di Pangandaran yang
                  bisa kamu custom sesuai keinginan kamu.
                </p>
              </div>
            </div>
          </Col>
          <Col className='ms-5'>
            <div className='d-flex gap-5 pb-3'>
              <div>
                <img src={IconFeature} alt='' />
              </div>
              <div>
                <p className='fs-5 fw-bold'>Bikin nyesel</p>
                <p>Kamu bakal auo nyesel deh kalo ke pangandaran tanpa ditemani Tournyaka</p>
              </div>
            </div>
            <div className='d-flex gap-5 pt-3'>
              <div>
                <img src={IconFeature} alt='' />
              </div>
              <div>
                <p className='fs-5 fw-bolder'>Pengalaman liburan yang lebih personal</p>
                <p>
                  Rencana perjalanan diberikan sesuai dengan keinginan kamu, pastinya kamu akan
                  mendapatkan pengalaman liburan yang lebih personal.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
