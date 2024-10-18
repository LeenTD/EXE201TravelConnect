import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PageLayout({ children }) {
    return (
        <div>
            <Header />
     
            {children}
            <Footer />
        </div>
    )
}

export default PageLayout