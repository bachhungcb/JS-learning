import Student from './Student.jsx'

function App(){
    return(
        <>
            <Student name="Bach Dam" age={20} isStudent={false}/>
            <Student name="Ha Huy" age={-10} isStudent={true}/>
            <Student name="Duc Hung" age={10} isStudent={false}/>
            <Student name="Dam Huy" age={15} isStudent={true}/>
            <Student name="Phu"/>
        </>
    );
}

export default App