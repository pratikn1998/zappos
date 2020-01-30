import React, { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
const carouselphoto = require('./llamacarousel.jpg');

const Llamas = () => {
  return (
    <Fragment>
      <section className='aboutllamas'>
        <div className='landing-inner'>
          <h1 className='x-large'>LLAMA FACTS AND JOKES</h1>
        </div>
      </section>

      <div className='llamacontainer'>
        <h2 className='text-center'>Fun Facts</h2>
        <div className='llamafact-inner llamafactborder'>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <b>
                  <h3 className='lead llamafactfont'>
                    The llama is the South American relative of the camel but
                    does not have a hump.
                  </h3>
                </b>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  {' '}
                  According to the Pittsburgh Zoo, when one llama has an issue
                  with another llama, the llama will express its displeasure by
                  sticking out its tongue.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  {' '}
                  To differentiate between a llama and an alpaca, llamas are
                  about twice the size of an alpaca and llamas’ have much longer
                  ears that stand straight up and give them an ‘alert’ look.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  A group of llamas is called a heard.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>Llamas don’t bite.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  One of the ways llamas communicate is by humming..
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  A baby llama is called a cria.{' '}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  A llama is not a hoofed animal. It has two toenails on each
                  foot and a leathery pad underneath.{' '}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  Llamas can be divided into two groups according to the length
                  of their fur: short coated are called Ccara and the medium
                  coated are called Curaca.{' '}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={carouselphoto}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='lead llamafactfont'>
                  Llamas can reach speeds up to 35mph. .
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className='llamaaltlayout'>
        <div className='llama-accordian-container'>
          <h2 className='text-center'>Need a Laugh?</h2>
          <div className='llamajokeitem'>
            <Accordion>
              <div className='row'>
                <div className='col-sm-6'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                      Who’s a llama’s favorite rapper?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>
                        <b>Kendrick Llama!</b>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
                <div className='col-sm-6'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='1'>
                      What’s more impressive than a talking llama?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='1'>
                      <Card.Body>
                        {' '}
                        <b>A spelling bee!</b>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>

                <div></div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='2'>
                      What do llamas call the end of the world?{' '}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='2'>
                      <Card.Body>
                        {' '}
                        <b>LLamagedon</b>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
                <div className='col-sm-6'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='3'>
                      What do llamas say once you have thanked them?{' '}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='3'>
                      <Card.Body>
                        {' '}
                        <b>No probllama!</b>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='4'>
                      What do you call a very fast llama?{' '}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='4'>
                      <Card.Body>
                        {' '}
                        <b> A Llamagini</b>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
                <div className='col-sm-6'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='5'>
                      Who's a llama's favourite actor?{' '}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='5'>
                      <Card.Body>
                        {' '}
                        <b>Al Pacacino!</b>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* gifs section */}
    </Fragment>
  );
};

export default Llamas;
