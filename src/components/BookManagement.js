import { useState } from "react";

const BookManagement = ({ bookList, store, update, remove }) => {
    const [inputBook, setInputBook] = useState();
    const handleJudul = (event) => {
        setInputBook({ ...inputBook, judul: event.target.value });
    }
    const handlePengarang = (event) => {
        setInputBook({ ...inputBook, pengarang: event.target.value });
    }
    const handleHarga = (event) => {
        setInputBook({ ...inputBook, harga: event.target.value });
    }
    const handleStok = (event) => {
        setInputBook({ ...inputBook, stok: event.target.value });
    }
    const [form, setForm] = useState();
    const submitBook = (event) => {
        event.preventDefault();
        setForm('hide');
        store(inputBook);
    }
    const showCreateForm = () => {
        setForm('show');
    }
    const showEdit = (book) => {
        setInputBook(book);
        setForm('edit');
    }
    const submitChange = (event) => {
        event.preventDefault();
        update(inputBook);
        setForm('hide');
    }
    const deleteBook = (book) => {
        remove(book);
    }
    return (
        <div className='container mt-3'>
            <h1 className='text-center'>Book Management</h1>
            {form === 'show' && (
                <div id='formAdd'>
                    <h5>Add Book</h5>
                    <hr />
                    <form className='form-row row' onSubmit={submitBook}>
                        <div className='col-3'>
                            <input type='text' name='judul' className='form-control mx-2' placeholder='Judul' onChange={handleJudul} />
                        </div>
                        <div className='col-3'>
                            <input type='text' name='pengarang' className='form-control mx-2' placeholder='Pengarang' onChange={handlePengarang} />
                        </div>
                        <div className='col-2'>
                            <input type='text' name='harga' className='form-control mx-2' placeholder='Harga' onChange={handleHarga} />
                        </div>
                        <div className='col-2'>
                            <input type='number' name='stok' className='form-control mx-2' placeholder='Stok' onChange={handleStok} />
                        </div>
                        <div className='col-2'>
                            <input type='submit' className='btn btn-primary ml-5' value='Simpan' />
                        </div>
                    </form>
                </div>
            )}
            {form === 'edit' && (
                <div id='formEdit'>
                    <h5>Form Edit</h5>
                    <hr />
                    <form className='form-row row' onSubmit={submitChange}>
                        <div className='col-3'>
                            <input type='text' name='judul' className='form-control mx-2' placeholder='Judul' onChange={handleJudul} value={inputBook.judul} />
                        </div>
                        <div className='col-3'>
                            <input type='text' name='pengarang' className='form-control mx-2' placeholder='Pengarang' onChange={handlePengarang} value={inputBook.pengarang} />
                        </div>
                        <div className='col-2'>
                            <input type='text' name='harga' className='form-control mx-2' placeholder='Harga' onChange={handleHarga} value={inputBook.harga} />
                        </div>
                        <div className='col-2'>
                            <input type='number' name='stok' className='form-control mx-2' placeholder='Stok' onChange={handleStok} value={inputBook.stok} />
                        </div>
                        <div className='col-2'>
                            <input type='submit' className='btn btn-primary ml-5' value='Edit' />
                        </div>
                    </form>
                </div>
            )}
            <div id='bookList'>
                <h2 className='mt-3'>Book List</h2>
                <hr />
                <button className='btn btn-primary m-2' onClick={showCreateForm}>Add Book</button>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.judul}</td>
                                <td>{book.pengarang}</td>
                                <td>{book.harga}</td>
                                <td>{book.stok}</td>
                                <td>
                                    <button className='btn btn-info mr-3' onClick={() => showEdit(book)}>Edit</button>
                                    <button className='btn btn-danger mr-3' onClick={() => deleteBook(book)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookManagement;