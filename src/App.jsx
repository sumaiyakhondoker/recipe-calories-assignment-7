
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeCards from './components/RecipeCards/RecipeCards'


function App() {

  return (
    <>
     
     <Header></Header>
     <div className='lg:max-w-[1320px] mx-auto p-2 lg:p-0'> 
     <Banner></Banner>
     <RecipeCards></RecipeCards>
     </div>
    <ToastContainer theme='dark'></ToastContainer>
    </>
  )
}

export default App
