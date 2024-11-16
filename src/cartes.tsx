import { Button, Container } from '@mui/material';
import { useState } from 'react';
type Carte = {
  id: number;
  image: string;
  estRetourne: boolean;
};
interface CartesProps {
  cartes: Carte[];
  essais: number;
  setEssais: (nombre: number) => void;
}
function Cartes(props: CartesProps) {
  const [cartePrecedente, setCartePrecedente] = useState(-1);
  // ER: nom de variable pas clair... Que voulais-tu dire par posCarte?
  const [posCarte, setPosCarte] = useState(-1);

  function RetournerCarte(idCarte: number, position: number) {
    props.cartes[position].estRetourne = true;
    if (cartePrecedente == -1) {
      setCartePrecedente(idCarte);
      setPosCarte(position);
    } else {
      if (cartePrecedente == idCarte) {
        //Points++
      } else {
        setTimeout(() => {
          props.cartes[position].estRetourne = false;
          props.cartes[posCarte].estRetourne = false;
          setCartePrecedente(-1);
          setPosCarte(-1);
          props.setEssais(props.essais - 1);
        }, 500);
      }
    }
  }

  const AfficherCartes = props.cartes.map((carte, indexCarte) => (
    <Button
      sx={{
        height: 100,
        width: 100,
      }}
      onClick={() => RetournerCarte(carte.id, indexCarte)}
    >
      <img
        src={carte.estRetourne ? carte.image : '/dessus-carte.svg'}
        alt=""
        height={100}
        width={100}
      />
    </Button>
  ));

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 450,
        }}
      >
        {AfficherCartes}
      </Container>
    </>
  );
}

export default Cartes;
