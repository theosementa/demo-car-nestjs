import { observer } from 'mobx-react'
import './App.css'
import { CarStore } from './stores/car.store'

const App = observer(() => {
  const carStore = CarStore.shared

  return (
    <>
      <div>
        <button onClick={async () => await carStore.fetchAllCars()}>First fetch all cars</button>
        <div>
          <button onClick={async () => await carStore.addCLE53()}>Create CLE53</button>
          <button onClick={async () => await carStore.addLamborghiniUrus()}>Create Urus</button>
          <button onClick={async () => await carStore.addPurosangue()}>Create Purosangue</button>
        </div>
        {
          carStore.cars.map(($0) => (
            <p key={$0.id}>{ $0.model }</p>
          ))
        }
      </div>
    </>
  )
})

export default App
