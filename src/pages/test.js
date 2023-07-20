import React, { useState } from 'react'

function Test() {
  // State for form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Send POST request to server with form data
    const response = await fetch('http://localhost:3001/mypost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })

    // Handle response
    if (response.ok) {
      // Success
      console.log('User created')
    } else {
      // Error
      console.error('An error occurred')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Test