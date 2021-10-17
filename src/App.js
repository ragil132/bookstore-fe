import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BookManagement from './components/BookManagement';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    axios.get('http://localhost:4000/book')
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  const storeData = (inputBook) => {
    //console.log(inputBook);
    //alert('Data successfully saved');

    axios.post('http://localhost:4000/book/add', inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert('Data successfully saved');
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }
  const updateData = (inputBook) => {
    //console.log(inputBook);
    //alert('Data successfully updated');

    axios.put(`http://localhost:4000/book/update/${inputBook._id}`, inputBook)
      .then((res) => {
        retrieveData();
        alert('Data successfully updated');
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }
  const deleteData = (book) => {
    //console.log(book);
    //alert('Data successfully deleted');

    axios.delete(`http://localhost:4000/book/delete/${book._id}`)
      .then(() => {
        retrieveData();
        alert('Data successfully deleted');
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home bookList={books} />
          </Route>
          <Route path='/book-management'>
            <BookManagement bookList={books} store={storeData} update={updateData} remove={deleteData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
