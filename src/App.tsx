import { Button, Container } from '@mui/material';
import Cartes from './cartes';
import './App.css';
import { useState } from 'react';

function App() {
    const [essais,setEssais] = useState(20)
    const cartes = [
                    {id:1,image:"/chat1.png",estRetourne:false},{id:1,image:"/chat1.png",estRetourne:false},
                    {id:2,image:"/chat2.png",estRetourne:false},{id:2,image:"/chat2.png",estRetourne:false},
                    {id:3,image:"/chat3.png",estRetourne:false},{id:3,image:"/chat3.png",estRetourne:false},
                    {id:4,image:"/chat4.png",estRetourne:false},{id:4,image:"/chat4.png",estRetourne:false},
                    {id:5,image:"/chat5.png",estRetourne:false},{id:5,image:"/chat5.png",estRetourne:false},
                    {id:6,image:"/chat6.png",estRetourne:false},{id:6,image:"/chat6.png",estRetourne:false},
                    {id:7,image:"/chat7.png",estRetourne:false},{id:7,image:"/chat7.png",estRetourne:false},
                    {id:8,image:"/chat8.png",estRetourne:false},{id:8,image:"/chat8.png",estRetourne:false},
    ]
  
    //Melange les cartes
    //Code de https://stackoverflow.com/questions/48083353/i-want-to-know-how-to-shuffle-an-array-in-typescript
    function Melanger()
    {
        let index = cartes.length
        let indexAlea = 0

        while(index !=0){
            indexAlea = Math.floor(Math.random() * index);
            index--;
            [cartes[index], cartes[indexAlea]] = [
                cartes[indexAlea], cartes[index]];
        }
    }

  return (
    <>
      <Container
        sx={{
          display:'flex',
          flexDirection:'column'
        }}
      >
        <h1>Jeu de mémoire</h1>
        <h3>Essais : {essais}</h3>
        <Button onClick={()=> Melanger}>Recommencer</Button>
        <Cartes cartes={cartes} essais={essais} setEssais={setEssais}></Cartes>
      </Container>
    </>
  );
}

export default App;
