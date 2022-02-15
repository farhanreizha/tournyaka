import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ImageOne, ImageThree, ImageTwo } from '../../assets'

const Event = () => {
  return (
    <div id='events'>
      <Container className='my-5 py-5'>
        <div className='pb-3'>
          <p className='fs-1 fw-bolder'>Destinasi Terbaik</p>
          <p className='col-5'>
            Di Pangandaran banyak loh destinasi yang bisa bikin kamu nyaman dan ngelupain masalah
            yang lagi kamu hadapin.
          </p>
        </div>
        <div>
          <Row>
            <Col className='d-flex flex-column'>
              <img src={ImageThree} alt='image3' />
              <p className='fs-2 fw-bolder mt-2'>Pangandaran</p>
              <p>
                Pasi kalo wisata satu ini semua orang udah pada tau yah, pantai Pangandaran yang
                menjadi salah satu ikon Pangandaran mungkin bisa jadi destinasi yang cocok untuk di
                kunjung
              </p>
            </Col>
            <Col className='d-flex flex-column'>
              <img src={ImageOne} alt='image1' />
              <p className='fs-2 fw-bolder mt-2'>Batu Karas</p>
              <p>
                Pantai yang mempunyai julukan{' '}
                <q>
                  <i>
                    <b>little Bali in Java</b>
                  </i>
                </q>{' '}
                ini bisa jadi salah satu pilihan destinasi kamu waktu liburan di Pangandaran
              </p>
            </Col>
            <Col className='d-flex flex-column'>
              <img src={ImageTwo} alt='image2' />
              <p className='fs-2 fw-bolder mt-2'>Green Canyon</p>
              <p>
                Siapa sih yang gatau tempan wisata satu ini? Green Canyon bisa jadi pilihan terbaik
                kamu selagi di Pangandaran sambil menikmati hujan abadi
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Event
