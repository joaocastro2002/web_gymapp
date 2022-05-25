export interface Treino {
    "treinos": [
        {
            "treino_id": string,
            "uid": string,
            "atividade_id"?: string,
            "modalidade_id": string,
            "duracao": string,
            "calorias": number,
            "distancia": number,
            "data": Date,
            "isDeleted": boolean
        }
    ]
}
