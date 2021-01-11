const ufs = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
});