export interface PostInfo {
    criador_nome: string,
    publicacao_id: string,
    criador_id: string,
    ginasio_id?: string,
    data: string,
    descricao: string,
    tipo: number,
    imagens_publicacao: [],
    gostos_publicacao: [],
    identificacoes_publicacoes: [],
    comentarios_publicacao: [
        {
            users: {
                nome: string,
                uid: string,
                imagem_url?: string
            },
            comentario: string
        }
    ],
    _count: {
        gostos_publicacao: number
    }

}
