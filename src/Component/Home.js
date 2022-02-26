const Home=()=>{
    return(
        <div className="home">
             
            <button style={{ backgroundColor:'red',textAlign:'left', fontSize: '16px', color:'white',border:'none', padding: '8px 35px',marginTop:'10px',borderRadius: '4px'}}>log in</button>
            <h1 style={{color:"white", fontSize:'60px',fontFamily:'serifs', marginTop:'50px'}}>Films, series and more illimited</h1>
            <br/>
            <p style={{ color:'white', fontSize:'60px',fontFamily:'serifs'}}>What's next?</p>
            <input style={{ padding:'6px 100px', borderRadius: '6px'}}placeholder="Adresse e-mail"></input>
            <button style={{ backgroundColor:'red', color:'white', border:'none',padding: '8px 55px',borderRadius: '4px',marginTop: '150px'}}>start</button>
 
        </div>
    )
}

export default Home