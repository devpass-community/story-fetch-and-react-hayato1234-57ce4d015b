import { useState } from "react";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    setIsLoading(true)
    fetch("https://meowfacts.herokuapp.com/")
      .then(response => {
        if(response.ok)
          return response.json()
        throw response;
      })
      .then(responseData => {
        setQuote(responseData.data[0])
      })
      .catch(error => {
        console.error("Error fetching", error)
        setQuote("");
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Container>
      <button data-testid="button" onClick={e => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === '' ?
        ( <Spinner /> ) : ( <span data-testid="quote">{quote}</span> )
      }
    </Container>
  );
}

export default App;