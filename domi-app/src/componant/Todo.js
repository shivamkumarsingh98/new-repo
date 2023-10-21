import React,{useState} from 'react'

export default function Todo() {
  const [usevalue, setvalue] = useState()
  const [useDisplay,setDisplay] = useState()

  const cliCk = () => {
    setDisplay(usevalue)
  }
   
  const handelSumbit =(event) => {
    event.preventDefault()
  }

  const submitChange = (e) => {
    setvalue (e.target.value)
  }

  return (

    <>
    
    <form omSubmit={handelSumbit}>
    <h1>{useDisplay}</h1>
     <input type='text' placeholder='search' value={usevalue} onChange={submitChange}/>
     <button onClick={cliCk}>click me!</button>
     </form>
    
      
    </>
  )
}

