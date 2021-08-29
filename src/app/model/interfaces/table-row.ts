export interface tableRows {
    field: string, header: string
}

export interface action {
  ver?: detailAccion,
  delete?: detailAccion
}

export interface detailAccion {
  estado?:boolean,
  route?:string
}
