import Alert from './components/alerts/alert';
import './App.css';

import { BellRing } from 'lucide-react';


function App() {


  return (
    <>
{/* light */}
    <Alert 
    type={"alert-light"} 
    titleIcon={<BellRing size={21}/>} 
    title='Alert Title'
    desc='Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Dicta velit reiciendis non voluptatum?
     Dolorem qui natus est tempora corrupti quos.'
    />
{/* primary */}
    <Alert 
    type={"alert-primary"} 
    titleIcon={<BellRing size={21}/>} 
    title='Alert Title'
    desc='Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Dicta velit reiciendis non voluptatum?
     Dolorem qui natus est tempora corrupti quos.'
    />
{/* danger */}
    <Alert 
    type={"alert-danger"} 
    titleIcon={<BellRing size={21}/>} 
    title='Alert Title'
    desc='Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Dicta velit reiciendis non voluptatum?
     Dolorem qui natus est tempora corrupti quos.'
    />
{/* success */}
    <Alert 
    type={"alert-success"} 
    titleIcon={<BellRing size={21}/>} 
    title='Alert Title'
    desc='Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Dicta velit reiciendis non voluptatum?
     Dolorem qui natus est tempora corrupti quos.'
    />
{/* warning */}
    <Alert 
    type={"alert-warning"} 
    titleIcon={<BellRing size={21}/>} 
    title='Alert Title'
    desc='Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Dicta velit reiciendis non voluptatum?
     Dolorem qui natus est tempora corrupti quos.'
    />


    </>
  )
}

export default App
