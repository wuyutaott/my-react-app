import Student from "./Student";

function App() {
  return (
    <>
        <Student name="John" age="10" isStudent={true} />
        <Student name="Doe" age={20} isStudent={false} />
        <Student name="Jane" age={30} isStudent={true} />
        <Student isStudent={false} />
    </>
  );
}

export default App;