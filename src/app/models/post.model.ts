export interface Post {
    publicacao_id: string,
    criador_id?: string,
    ginasio_id: string,
    data: string,
    descricao: string,
    tipo: number,
    imagens_publicacao: [],
    _count: {
        gostos_publicacao: number
    }
}
