
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeCards from './components/RecipeCards/RecipeCards'


function App() {

  return (
    <>
     
     <Header></Header>
     <div className='lg:max-w-[1320px] mx-auto'> 
     <Banner></Banner>
     <RecipeCards></RecipeCards>
     </div>
     
    </>
  )
}

export default App
