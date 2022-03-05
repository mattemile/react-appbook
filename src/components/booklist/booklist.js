import React, { Component } from 'react'
import '../../css/bookList/bookList.css'
import Modal from './modal'

class booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'ceH',
            books: { items: [] },
            visible: { display: 'block' },
            showModal: 0
        }
    }

    fetchBook = () => {
        const API = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm;
        fetch(API).then(r => r.json()).then(r => {
            this.setState({ books: r })
        }).catch((error) => console.log('Error: ' + error))
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ visible: { display: 'none' } })
        this.fetchBook();
    }
    onInputChange = (e) => {
        e.preventDefault();
        this.setState({ searchTerm: e.target.value })
    }

    hideModal = () => {
        this.setState({ showModal: 0 })
    }

    getModal = (value) => {
        this.setState({ showModal: value })
    }
    render() {
        return (
            <React.Fragment>
                <div class='container-fluid codrops-header' style={{ padding: '30px' }}>
                    <section class='text-center'>
                        <h2>Search for books</h2>
                        <form class='form-inline' onSubmit={this.onSubmitHandler}>
                            <div class="form-group" style={{ margin: ' 30px auto' }}>
                                <input
                                    class='form-control'
                                    type="search"
                                    placeholder="book title..."
                                    value={this.searchTerm}
                                    onChange={this.onInputChange}

                                />
                                <button style={{ padding: '8px 15px', borderRadius: '5px' }} class='btn btn-warning' type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
                <div class="main" style={{ marginTop: '10px' }}>
                    <div class="bookshelf" id='bookshelf'>
                        <div style={this.state.visible} class="search-icon" data-reactid=".0.1.0.0">
                            <i class="fas fa-search"></i>
                        </div>
                        {
                            this.state.books.items.map((book, index) => {
                                const background = 'https://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api'
                                return (
                                    <figure key={index} class='details-open' >
                                        <Modal show={this.state.showModal === book.id} onHide={() => this.hideModal(book.id)} title={book.volumeInfo.title} descr={book.volumeInfo.description}
                                            page={book.volumeInfo.pageCount}>
                                        </Modal>
                                        <div class="perspective">
                                            <div class="book">
                                                <div class="cover">
                                                    <div class="front" style={{
                                                        background: "url(" + background + ") 0% 0% /100% 100% no-repeat", border: "2px solid rgb(238,238238)",
                                                        width: '170px', height: '240px'
                                                    }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="buttons">
                                            <button onClick={() => this.getModal(book.id)} style={{ padding: '3px', borderRadius: '5px' }} className='btn btn-warning btn-sm'>
                                                Dettagli
                                            </button>
                                            <a href={book.volumeInfo.infoLink}>Preview</a>
                                        </div>
                                        <figcaption>
                                            <h2>
                                                <span>
                                                    {book.volumeInfo.title}
                                                </span>
                                                <span>
                                                    {book.volumeInfo.authors}
                                                </span>
                                                <span>
                                                    {book.volumeInfo.publishedDate}
                                                </span>
                                            </h2>
                                        </figcaption>
                                    </figure>
                                )
                            })
                        }


                    </div>

                </div>
            </React.Fragment >
        )
    }
}

export default booklist