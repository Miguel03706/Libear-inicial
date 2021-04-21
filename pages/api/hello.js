// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  async function fechData() {
    await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
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
      }); // independe do resultado
  }
  useEffect(() => {
    fechData();
  }, []);
  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);

}
