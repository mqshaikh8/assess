import React, {useEffect, useState} from 'react'
import './App.css';

//component
import Book from './component/Book'
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState({})
  const handleChange = (val) => {
    setSearchTerm(val)
    fetch(`https://goodreads-server-express--dotdash.repl.co/search/${searchTerm}`)
    .then(r => r.json())
    .then(data => setResult(data))
  }
  const resultDisplayer = () => {
    return(
      <div>
        <p>{`${result.total} results`}</p>
        <div>
          {result.list.map(book => <Book name={book.authorName} img={book.imageUrl} title={book.title}/>)}
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <input type="text" id="booksearch" name="booksearch" onChange={(event) => handleChange(event.target.value)}/>
      {result.list ? resultDisplayer() : null}
    </div>
  );
}

export default App;
