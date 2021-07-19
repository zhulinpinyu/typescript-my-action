import { useState } from "react"

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setName('')
    setGuests([...guests, name])
  }

  return <div>
    <h3>GuestList</h3>
    {
      guests.map(guest => <li key={guest}>{guest}</li>)
    }
    <input value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={onClick}>Add Guest</button>
  </div>
}

export default GuestList