import axios from "axios";

export default {
    listarProgresso: async (userId) => {
        const res = await axios.get(`http://localhost/api/progresso.php?id=${userId}`);
        return res.data.result[0].progresso;
    },
    exibirAtividade: async () => {
        const res = await axios.get(`http://localhost/api/atividades.php?`);
        return res.data.result;
    },
    listarRanking: async () => {
        const res = await axios.get(`http://localhost/api/ranking.php`)
        return res.data.result;
    },
    exibirExplicacao: async (slug) => {
        const res = await axios.get(`http://localhost/api/explicacao.php?slug=${slug}`);
        return res.data.result;
    },
    exibirMissoes: async (id) =>{
        const res = await axios.get(`http://localhost/api/ListarMissao.php?id=${id}`);
        return res.data.result;
    },
    userMissoes: async (id) =>{
        const res = await axios.get(`http://localhost/api/ListarMissao.php?id=${id}`);
        return res.data.result;
    },
    CompletaMissao: async (id,complete) =>{
        await axios.get(`http://localhost/api/missao.php?id=${id}&complete=${complete}`);
    }
}