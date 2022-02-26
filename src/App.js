import NavFilms from './Component/NavFilms';
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Menu from './Component/Menu';
import Contact from './Component/Contact';
import CardDesc from './Component/CardDesc';


function App() {

  const [films,setFilms] = useState(
    [
        {title : 'The Batman', trailer: 'https://www.youtube.com/embed/mqqft2x_Aa4',description :'Dans sa deuxième année de lutte contre le crime, le milliardaire et justicier masqué Batman explore la corruption qui sévit à Gotham et notamment comment elle pourrait être liée à sa propre famille, les Wayne, à qui il doit toute sa fortune. En parallèle, il enquête sur les meurtres d un tueur en série qui se fait connaître sous le nom de Sphinx et sème des énigmes cruelles sur son passage.', posterUrl:'https://fr.web.img6.acsta.net/pictures/21/10/18/15/17/1731713.jpg',rating : 5, id : Math.random()},
        {title : 'Ghodwa',trailer: 'https://www.youtube.com/embed/bOTktWLV7bo', description :'Habib, avocat, qui vit un dilemme psychologique dans sa quête de la vérité sur les exactions commises sous l’ancien régime de Ben Ali. Vérité, justice et réconciliation c’est une trilogie indispensable que le personnage principal peine à atteindre en vue d’établir une certaine justice sociale.Avec la détérioration de son état de santé, le héros passe le flambeau à son fils Ahmed, adolescent de 15 ans. Les rôles s’inversent et le père est pris en charge par son fils qui continuera la lutte de demain (Ghodwa) pour la liberté et la dignité tant espérées dans un long processus démocratique.', posterUrl:'https://media.elcinema.com/uploads/_320x_02a40a87e6da0a296ae06a4c7addc2be0b7df12493ad9311008597ef24ab58ee.jpg',rating : 4, id : Math.random()},
        {title : 'The Mouse',trailer:'https://www.youtube.com/embed/9-0GLwf5JA4', description :'Dédiant sa vie à la poursuite de la justice, le policier novice, Jung Ba Reum (Lee Seung Gi), est un homme honnête au cœur sincère. Travaillant dans un poste de police local, Ba Reum est un policier inébranlable qui, avec son partenaire, Go Moo Chi (Lee Hee Joon), est toujours prêt à faire tout ce qu il faut pour que le travail soit fait. Trouvant un véritable épanouissement dans son métier, Ba Reum est heureux de la vie qu il s est construite. Mais, lorsque la nation est secouée par les meurtres impitoyables d un tueur fou, sa paisible existence prend une tournure très inquiétante.', posterUrl:'https://fr.web.img4.acsta.net/r_1280_720/pictures/21/07/01/15/27/1318703.jpg',rating :5, id : Math.random()},
        {title : 'Cruella',trailer: 'https://www.youtube.com/embed/gmRKv7n2If8', description :'Londres, années 70, en plein mouvement punk rock. Escroc pleine de talent, Estella est résolue à se faire un nom dans le milieu de la mode. Elle se lie d’amitié avec deux jeunes vauriens qui apprécient ses compétences d’arnaqueuse et mène avec eux une existence criminelle dans les rues de Londres. Un jour, ses créations se font remarquer par la baronne von Hellman, une grande figure de la mode, terriblement chic et horriblement snob. Mais leur relation va déclencher une série de révélations qui amèneront Estella à se laisser envahir par sa part sombre, au point de donner naissance à l’impitoyable Cruella, une brillante jeune femme assoiffée de mode et de vengeance.', posterUrl:'https://www.cinehorizons.net/sites/default/files/affiches/1977794243-cruella.jpg',rating :5, id : Math.random()},
        {title : 'Mesh Ana',trailer: 'https://www.youtube.com/embed/B2YvxyfvbXY', description :'Hassan se trouve dans un état étrange qui perd le contrôle de sa main. Avec le temps, il devient la victime de nombreuses situations difficiles et embarrassantes, tandis que tout autour de lui refuse de croire en son état.', posterUrl:'https://movizland.cyou/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D9%85%D8%B4-%D8%A7%D9%86%D8%A7-2021.png',rating :3, id : Math.random()},
        {title : 'No Time To Die',trailer: 'https://www.youtube.com/embed/BIhNsAtPbPI', description :'Il s agit de la vingt-cinquième aventure cinématographique de James Bond, et surtout du dernier film à mettre en scène l acteur Daniel Craig dans le rôle du brillant agent secret James Bond,', posterUrl:'https://cdn.europosters.eu/image/1300/posters/james-bond-no-time-to-die-profile-i114389.jpg',rating :4, id : Math.random()}
     
    ]
  )
  const handleAdd=(newFilm)=> setFilms([...films,newFilm])

  const [inpt,setInpt]=useState('');
  const [rate,setRate]=useState(0);
  
  return (
    <div>
      <NavFilms/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/menu' element={<Menu inpt={inpt} setInpt={setInpt} rate={rate} setRate={setRate} handleAdd={handleAdd} films={films}/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu/:id' element={<CardDesc films={films}/>}/>  
      </Routes>
    
      
    
      
    </div>
  );
}

export default App;