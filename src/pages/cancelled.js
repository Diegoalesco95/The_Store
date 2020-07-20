import React from 'react';
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';
import { Link } from 'gatsby';

export default function thanks() {
  return (
    <div>
      <SEO title='Compra Exitosa' />
      <Purchase>
        <h2>Compra cancelada 😔</h2>
        <p>Sentimos que no hayas comprado tu nuevo swag.</p>
        <p>Recuerda que aquí estará por si decides volver</p>
        <p>¡Te esperamos de vuelta, no pares de aprender!</p>
        <br />
        <span rol='img' arial-label='emoji'>
          ❤
        </span>
        <br />
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  );
}
