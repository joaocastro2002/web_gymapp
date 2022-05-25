export interface MyPerfil {
    perfil: {
        uid: string,
        email: string,
        nome: string,
        password: string,
        data_nasc: Date,
        hashtag: string,
        data_entrada: Date,
        funcao_id: string,
        refresh_token: string,
        genero: number,
        pontos: number,
        descricao?: string,
        imagem_url?: string,
        isDeleted: boolean
    }

}
