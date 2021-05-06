import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={HomePage} />
            <Redirect to="/not-found" />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
