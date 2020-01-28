import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Llamas = () => {
  return (
    <Fragment>
      <section className='aboutllamas'>
        <div className='landing-inner'>
          <h1 className='x-large'>LLAMA FACTS,JOKES,AND GIFS</h1>
        </div>
      </section>
      <div id='llamafunfacts'>
        <h2 className='text-center'>
          <u>10 Fun Facts About Llamas</u>
        </h2>
        <ul>
          <li>
            - The llama is the South American relative of the camel but does not
            have a hump.{' '}
          </li>
          <li>
            - According to the Pittsburgh Zoo, when one llama has an issue with
            another llama, the llama will express its displeasure by sticking
            out its tongue.{' '}
          </li>
          <li>
            - To differentiate between a llama and an alpaca, llamas are about
            twice the size of an alpaca and llamas’ have much longer ears that
            stand straight up and give them an ‘alert’ look.{' '}
          </li>
          <li>- A group of llamas is called a heard. </li>
          <li>- Llamas don’t bite. </li>
          <li>- One of the ways llamas communicate is by humming. </li>
          <li>- A baby llama is called a cria. </li>
          <li>
            - A llama is not a hoofed animal. It has two toenails on each foot
            and a leathery pad underneath.{' '}
          </li>
          <li>
            - Llamas can be divided into two groups according to the length of
            their fur: short coated are called Ccara and the medium coated are
            called Curaca.{' '}
          </li>
          <li>- Llamas can reach speeds up to 35mph. </li>
        </ul>
      </div>
      <div id='llamajokes'>
        <h2 className='text-center'>
          <u>Need a laugh?</u>
        </h2>
        <ul>
          <li>
            Who’s a llama’s favorite rapper? <b>Kendrick Llama!</b>
          </li>
          <li>
            What’s more impressive than a talking llama? <b>A spelling bee!</b>
          </li>
          <li>
            What did the llama say when the other llama asked if they wanted to
            go on a holiday? <b>Alpaca my bags!</b>
          </li>
          <li>
            What do llamas say once you have thanked them? <b>No probllama!</b>
          </li>
          <li>
            What do you call a very fast llama? <b>A Llamagini</b>
          </li>
        </ul>
      </div>
      <div id='llamagifs'>
        <h1>Gifs</h1>
      </div>
    </Fragment>
  );
};

export default Llamas;
