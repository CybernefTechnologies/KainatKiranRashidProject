import React from 'react'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {Card, ListGroup} from 'react-bootstrap'
import './RandomUser.css'

const RandomUser = () => {
    const url = 'https://randomuser.me/api/'


    const [newProfile, setNewProfile] = useState(true)
    const [person, setPerson] = useState(null) 
    const [title, setTitle] = useState('name')
     const [image, setImage] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fview&psig=AOvVaw3HhL_s-N-4jezXjGANF0u9&ust=1648656590301000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCDmcba6_YCFQAAAAAdAAAAABAD')
    const [value, setValue] = useState('random Person')
    
    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.results[0])
        const {
            gender,
            phone, 
            email,
            name: {first, last}, 
            dob: {age},
            login: {password},
            picture : { large: image},
            location : {street : { number, name}}
                    } = data.results[0]
                    const newPerson = {
                    image,
                        phone, 
                        email,
                        password,
                        age, 
                        street: `${number} ${name}`,
                        name: `${first, last}`,
                    } 
                    setPerson(newPerson) 
                    
                    setImage(newPerson.image)
                    setTitle(name)
                    setValue(newPerson.name)
    
    }
    useEffect(()=>{
        {newProfile && fetchData()}
        setNewProfile(false)
    }, [newProfile, url])
    const handleChange = () => {
        setNewProfile(true)
        console.log(newProfile)
    }
  return (
    
    <div>
    <div className='center-main'>
   <div className='center-main-div' >
   <Card style={{ width: '22rem' }}>
   <Card.Img variant="top"  src={person.image} />
   <Card.Header>Profile Details</Card.Header>
   <ListGroup className='bg-info' variant="flush">
   <ListGroup.Item className='bg-light' >Name: {person.name}</ListGroup.Item>
   <ListGroup.Item className='bg-light'>Age: {person.age}</ListGroup.Item>
   <ListGroup.Item className='bg-'>Phone #: {person.phone}</ListGroup.Item>
    </ListGroup>
    <Button onClick={handleChange}
   >New Profile</Button>
   </Card>
   </div>
   </div>
   </div>

  )
}

export default RandomUser 

// <div className='d-block bg-light'>
// </div>
// <div className='d-block'>
//     <img src={person.image} alt="random user" />
// </div>
// <div id='personDetails'>
//     <h3>Name: {person.name} </h3> 
//     <h3>Age: {person.age}</h3>
//     <h3>Phone #: {person.phone}</h3>
//     <h3>Email : {person.email}</h3>
//     <h3>Address: {person.street}</h3>
// </div>
// <button onClick={handleChange}
// >New Profile</button>

