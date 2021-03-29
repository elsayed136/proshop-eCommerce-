import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
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
