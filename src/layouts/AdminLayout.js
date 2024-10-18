import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-md-2 shadow'>
            <SideBar />
          </div>
          <div className='col-md-10'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminLayout