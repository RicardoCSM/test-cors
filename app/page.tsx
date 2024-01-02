import axios from 'axios';

export default function Home() {
  const fetchToken = async () => {
    try {
        const response = await axios.post("https://ricardo-csm.limesurvey.net/admin/remotecontrol", {
            data: {
                "method": "get_session_key",
                "params": [
                    "ricardo_csm",
                    "Cado0123"
                ],
                "id": 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
    } catch(e) {
        console.log(e);
    }
}
  
  return (
    <div onClick={() => fetchToken()}>
      Teste
    </div>
  )
}
