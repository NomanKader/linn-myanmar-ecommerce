import axios from 'axios';

const GetAnnouncementAPI=async()=>{
  const url = process.env.REACT_API_ENDPOINT+'public/announcement/settings';

  const headers = {
    'Content-Type': 'application/json',
    'Cookie': 'SESSION=Y2E3NjlkNTQtZGRmMS00MWU2LTg3NmMtNDNiOTAzN2Y1ZmI0; SESSION=Y2E3NjlkNTQtZGRmMS00MWU2LTg3NmMtNDNiOTAzN2Y1ZmI0',
  };
  
  await axios.get(url, { headers })
    .then(response => {
      // Handle the response here
      console.log(response.data);
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
    });
  
}
export default GetAnnouncementAPI;