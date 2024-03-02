import UserGreeting from "./UserGreeting.jsx"

function App(){
    return(
        <>
            <UserGreeting isLoggedIn={true} username="BachDam"/>
            <UserGreeting isLoggedIn={true}/>
            <UserGreeting isLoggedIn={false}/>
        </>
    );
}

export default App