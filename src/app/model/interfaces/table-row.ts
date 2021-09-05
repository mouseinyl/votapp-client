export interface tableRows {
    field: string, header: string
}

export interface action {
  ver?: detailAccion,
  delete?: detailAccion
  create?:boolean
}

export interface detailAccion {
  estado?:boolean,
  route?:string
}
