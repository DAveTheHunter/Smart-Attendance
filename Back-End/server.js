import http from 'http'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;
const server = http.createServer((req,res) => {
  
})


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})