export interface Menssage {
  id: string;
  number: string;
  date: string;
  action: "ENVIADO" | "RECEBIDO";
  menssage: string;
  client_name: string;
}
