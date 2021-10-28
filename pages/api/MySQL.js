import axios from "axios";

export default {
    exibirAtividade: async () => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        const res = await axios.get(`http://localhost/api/atividades.php?id=${user.uid}`);
        return res.data.result;
    },
    exibirExplicacao: async (slug) => {
        const res = await axios.get(`http://localhost/api/explicacao.php?slug=${slug}`);
        return res.data.result;
    },
    exibirMissoes: async () => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        const res = await axios.get(`http://localhost/api/ListarMissao.php?id=${user.uid}`);
        return res.data.result;
    },
    userMissoes: async (id) => {
        const res = await axios.get(`http://localhost/api/ListarMissao.php?id=${id}`);
        return res.data.result;
    },
    completaMissao: async (complete) => {
        const userKey = Object.keys(window.sessionStorage)
        .filter(it => it.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        await axios.get(`http://localhost/api/CompletarMissao.php?id=${user.uid}&complete=${complete}`);
    },
    completaAtividade: async (complete) => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        await axios.get(`http://localhost/api/completaAtividade.php?id=${user.uid}&id_progresso=${complete}`);
    },
    comprarItens: async (comprar, preco) => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        await axios.get(`http://localhost/api/comprarItens.php?id=${user.uid}&comprado=${comprar}&preco=${preco}`);
    },
    listarProgresso: async (userId) => {
        const res = await axios.get(`http://localhost/api/progresso.php?id=${userId}`);
        return res.data.result[0].progresso;
    },
    listarRanking: async () => {
        const res = await axios.get(`http://localhost/api/ranking.php`)
        return res.data.result;
    },
    listarCompras: async () => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        const res = await axios.get(`http://localhost/api/listarLoja.php?id=${user.uid}`)
        return res.data.result;
    },
    setProgresso: async (id_progresso) => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        const res = await axios.get(`http://localhost/api/setProgresso.php?id=${user.uid}&id_progresso=${id_progresso}`);
        return res.data.result[0].progresso;
    },
 
}