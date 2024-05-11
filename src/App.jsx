import { Switch, Route } from "wouter"
import ProductList from './components/pages/product-list'
import ProductDetail from './components/pages/product-detail'
import Page404 from './components/pages/page-404'
import Landing from "./components/pages/landing"
import 'tailwindcss/tailwind.css';
import './App.css'

function App() {
  return (
    <Switch>
      <Route path="/" component={Landing}/>
      <Route path="/products" component={ProductList}/>
      <Route path="/products/:id" component={ProductDetail}/>

      <Route path="/404" component={Page404}/>
    </Switch>
  )
}

export default App
