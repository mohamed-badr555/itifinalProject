import React from 'react'
import MyNav from '../MyNav/MyNav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({curruntUser,removeUser}) {
  return (
    <div className="d-flex flex-column min-vh-100">
            <MyNav curruntUser={curruntUser} removeUser={removeUser} />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
  )
}
