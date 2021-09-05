
export interface RESULT {
    cantida_votos: number,
    datos: number[],
    estado: string,
    ganador:string,
    label: string,
    labels: string[],

}
export interface resultResponse{
  data:ResultData[]
}

export interface ResultData {
  estado:            string;
  evento:            Evento;
  votos_realizado:   number;
  cantidad_votantes: number;
}

export interface Evento {
  ref:        string;
  fechaFin:   Date;
  candidatos: Candidato[];
  nombre:     string;
  fechaInit:  Date;
  estado:     string;
  votantes:   Votante[];
}

export interface Candidato {
  votos?:   number;
  nombre:   string;
  foto:     null;
  apellido: string;
  id:       string;
  partido:  string;
}

export interface Votante {
  nombre:    string;
  id:        string;
  makeVoto?: boolean;
}
