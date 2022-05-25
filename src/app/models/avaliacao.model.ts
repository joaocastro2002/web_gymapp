export interface Avaliacao {

    "avaliacao_id": string,
    "data": Date,
    "peso"?: number,
    "musculo": number,
    "gordura_corporal": number,
    "gordura_visceral": number,
    "agua": number,
    "proteina": number,
    "massa_ossea": number
    "metabolismo_basal": number
    "avaliacao_imagens": [
        {
            "url": string
        }
    ],
    "medidas_avaliacao": [
        {
            "medida": string,
            "unidade_medida": string,
            "locais_medidas": {
                "descricao": string,
                "unilado": boolean
            }
        }
    ],
    "users_avaliacoes_treinador_idTousers": {
        "nome": string,
        "imagem_url?": string
    }
}


