import React, {useState, useEffect} from 'react';
import DisplayMainpage from './Modules/DisplayMainpage'
import Footer from './Modules/Footer';

//Services
import apiService from './Services/ApiService'

//Data
import routeData from './Data/routes/routeList.json'
import locoData from './Data/locos/locolist.json'

//CSS
//import './css/Grid.css'
//import './css/Style.css'

let filteredRouteData = routeData.filter((item) => item.id == "SFJ")
let queryParameters = {
  route: '',
  loco: '',
  type: '',
  departureTime: ''
}  

const App = () => {
  const [route,        setRoute]        = useState('')
  const [type,         setType]         = useState('')
  const [loco,         setLoco]         = useState('')
  const [filteredList, setFilteredList] = useState()
  const [service,      setService]      = useState()
  const [timetable,    setTimetable]    = useState([])
  
  const handleRouteSelect = (e, fromChildRoute) => {
    e.preventDefault()

    console.log("Valittu reitti " + fromChildRoute)
    setRoute(fromChildRoute)
    
    //Suodatetaan routelist.json oikea route
    filteredRouteData = routeData.filter((item) => item.id == fromChildRoute)
    setFilteredList(filteredRouteData)
    
    //Päivitetään kysely
    updateQueryParameters(fromChildRoute, loco)
  }

  const handleTypeSelect = (e) => {
    e.preventDefault()
    console.log("painettu handleTypeSelect")
    setType(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log("value was submitted as " + type)
    e.preventDefault()
  }

  const handleLocoSelect = (e, fromChildLoco) => {
    e.preventDefault()
    console.log("valittu  juna: " + fromChildLoco)
    setLoco(fromChildLoco)
  }

  const updateQueryParameters = (aRoute, aLoco, aType, aDepartureTime) => {     
    queryParameters.route = aRoute
    queryParameters.loco = aLoco   
    queryParameters.type = aType  
    queryParameters.departureTime = aDepartureTime  
  }

  const requestServices = (e) => {
    e.preventDefault()
    updateQueryParameters(route, loco, type, 0)
    console.log(queryParameters)
    const queryResponse = apiService.ChangeData('/loadQuery', queryParameters)
    queryResponse.then(response => newService(response.service, response.timetable))
  }

  const requestServicesAuto = () => {
    updateQueryParameters(route, loco)
    console.log(queryParameters)
    const queryResponse = apiService.ChangeData('/loadQuery', queryParameters)
    queryResponse.then(response => newService(response.service, response.timetable))
  }

  const clearSearch = (e) => {
    e.preventDefault()
    setService()
    setFilteredList()
  }

  const newService = (aService, aTimetable) => {
    setService(aService)
    setTimetable(aTimetable)
  }
  
  //Aina kun loco muuttuja päivittyy tämä ajetaan. 
  useEffect(() => {
    requestServicesAuto()
  }, [loco])

  return(
    <div className="flex justify-center"> 
      <div>
        <DisplayMainpage 
          routeData={routeData}
          filteredList={filteredList}
          serviceList={service}
          timetableList={timetable}
          
          formValue={type}
          handleSubmit={handleSubmit}
          handleChange={handleTypeSelect}
          formOptions={["Any type", "Passanger", "Freight"]}

          handleRouteSelect={handleRouteSelect}
          handleLocoSelect={handleLocoSelect}
          buttonOnClickEvent={(e) => requestServices(e)}
          clearSearchButton={(e) => clearSearch(e)}/>
      </div>
      <div className="fixed bottom-0 bg-green-300 w-screen">
        <Footer />  
      </div>
    </div>
    
  )
}

export default App;