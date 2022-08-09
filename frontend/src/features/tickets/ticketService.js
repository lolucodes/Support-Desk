import axios from 'axios'

const API_URL = '/api/tickets/'

// Create new ticket  
const createTicket = async (userData) => {
  const response = await axios.post(API_URL, userData)
  
  if(response.data) {
    localStorage.setItem('ticket', JSON.stringify(response.data))
  }
  return response.data
}


const ticketService = {
  createTicket,
}

export default ticketService