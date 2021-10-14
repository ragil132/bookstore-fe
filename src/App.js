import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BookManagement from './components/BookManagement';

function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: 'Laskar Pelangi', pengarang: 'Andrea Hirata', harga: 80000, stok: 7 },
    { _id: 2, judul: 'Bumi', pengarang: 'Tere Liye', harga: 85000, stok: 5 }
  ]);
  const storeData = (inputBook) => {
    console.log(inputBook);
    alert('Data successfully saved');
  }
  const updateData = (inputBook) => {
    console.log(inputBook);
    alert('Data successfully updated');
  }
  const deleteData = (book) => {
    console.log(book);
    alert('Data successfully deleted');
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
