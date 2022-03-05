import React, { Component } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'

class mainTemplate extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>
                    {this.props.children}
                </p>
                <Footer />
            </div>
        )
    }
}

export default mainTemplate