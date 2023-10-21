import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from "./react.svg";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState(false);
  const passwordGanrater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@%$#!&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copypasswordClipbord = useCallback(() => {
    PasswordRefer.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGanrater()
  }, [length, numberAllowed, charAllowed, setPassword]
  )
  const PasswordRefer = useRef(null)
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <div className='className ="flex shadow rounded-l-lg overflow-hidden mb-4"'>

          <h1 className="flex shadow rounded-lg overflow-hidden mb-4">Password Generater</h1>
          <input
            type="text"
            value={password}
            className='outline-none w-80 py-1 px-2 rounded-l-lg'
            placeholder="password"
            readOnly
            ref={PasswordRefer}
          />
          <button onClick={copypasswordClipbord} className='rounded-r-lg h-8 bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length: {length}</label>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id='numberInput'
                onChange={() => {
                  setcharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput">Character</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
