export interface Explorer {
  nombre: string;
  edad: number;
  especie: string;
  origen: string;
  afiliacion: string;
  profesion: string;
  habilidades: string[];
  equipo: Equipo;
  mision_actual: MisionActual;
}

export interface Equipo {
  nave_espacial: string;
  traje_espacial: string;
}

export interface MisionActual {
  nombre_mision: string;
  descripcion: string;
  estado: string;
}
