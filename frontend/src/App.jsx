import { useEffect, useState } from 'react';
import './App.css'
import { io } from 'socket.io-client'


const socket = io("http://localhost:3000");



function App() {

  const [message, setMessage] = useState('');
  const [messages, setMessages]= useState([]);
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0)
  const [inputcounter, setInputcounter] = useState(0)
  
  function btnClic(){
    socket.emit("bouton", 'coucou les gens');
  }

  useEffect (() =>{

    socket.on("bouton_reponse", (data) => {
      console.log (data)

    })

    socket.on('message_reponse', (data) => {

      setMessages((prev) => [...prev, data[0]+': '+data[1]]);
    })

  

    return () => {
      socket.off("bouton_reponse");
      socket.off("message_reponse");
      
      
    }




  }, [])


  function envoyer(){

    if(message.trim === "")
    {
      return
    }

    setMessages((prev) => [...prev, "Moi: "+message]);

    socket.emit("message", [name, message]);

    

  }
  
  
  return (
    <>
      <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      
      />

      <div>{counter}</div>
      
      <input 
      type="number" 
      value={inputcounter}
      onChange={(e) => setInputcounter(e.target.value)}
      />

      <button onClick={incrementer}>Incrementer</button>


      <h1>Exo Websocket</h1>
      <div><button onClick={btnClic}>Test</button></div>

      <input type="text"
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       />

       <button onClick={envoyer}>Envoyer</button>

      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      
    </>
  )
}

export default App
