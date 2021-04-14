import {useState ,useEffect} from "react"
import Header from "../components/header"

function Begin() {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    async function fechData() {
        await fetch("http://localhost/api/json")
          //algo que espera
          .then((res) => {
            return res.json();
          }) //-> se der certo
          .then((res) => {
            //.then do .then kkkkjj '-'
            setData(res);
            console.log(res);
          })
    
          .catch((err) => {
            console.log(err); //err.message
          }) //se der errado
          .finally(() => {
            console.log("finalizou");
          }) // independe do resultado
      }

      
  useEffect(() => {
    fechData();
  }, []);
  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);

    return (
        <>
          <Header inicio={true} missoes={false} loja={false} config={false}/>
                <h1>Inicio</h1>
                

  
        </>
    )
}

export default Begin;