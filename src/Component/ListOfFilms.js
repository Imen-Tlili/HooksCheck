import CardFilms from "./CardFilms";

const ListOfFilms=({films,inpt,rate})=>{
    const list= films.filter(film=>film.title.toUpperCase().includes(inpt.toUpperCase()) && film.rating>= rate).map(film => <CardFilms  key={film.id} film={film}/>)
    return(
        <div className='listFilms'>

          {list.length ===0? alert("There is no films to show") : list}
        </div>
    )
}
export default ListOfFilms;