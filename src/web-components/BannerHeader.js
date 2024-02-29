import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from '../pages/Home'

const BannerHeader = () => {
  return (
    <header>
        <Navigation />
    </header>
  )
}

export default BannerHeader