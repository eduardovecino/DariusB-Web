import Link from 'next/link';
import React from 'react';

function MenuPage() {
  return (
    <div>
      <h3>Darius Bogdanowicz</h3>
      <ul>
        {/* <Link href="/">To home page</Link>
        <br /> */}
        {/* <Link href="/work">To Work page</Link> */}
        {/* <br /> */}
        <Link href="/work/festival">To Festival page</Link>
        <br />
        <Link href="/work/whiteSheetII">To White Sheet page</Link>
        <br />
        <Link href="/work/fairelAmouralAeroport">To faire l'Amour a l'Aeroport page</Link>
        <br />
        <Link href="/work/salvandoLasDistancias">Salvando las distancias</Link>
        <br />
        <Link href="/contact">To Contact page</Link>
        <br />
      </ul>
    </div>
  );
}

export default MenuPage;