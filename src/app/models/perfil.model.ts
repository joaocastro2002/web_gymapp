export interface Perfil {
    perfil: [
        {
            nome: string,
            hashtag: string,
            descricao?: string,
            imagem_url?: string,
            definicoes_user: {
                is_privado?: boolean
            }
        }
    ],
}
