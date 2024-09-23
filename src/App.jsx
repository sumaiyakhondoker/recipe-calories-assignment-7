
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipesCard from './components/RecipesCard/RecipesCard'

function App() {

  return (
    <>
     
     <Header></Header>
     <div className='lg:max-w-[1320px] mx-auto'> 
     <Banner></Banner>
     <RecipesCard></RecipesCard>
     </div>
     
    </>
  )
}

export default App
