import profilePic from './assets/20230511_004003.jpg'

function Card(){
    return(
        <div className="card">
            <img className ="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Bach Dam</h2>
            <p className="card-text">I am studying at HUST</p>
        </div>
    );
}

export default Card