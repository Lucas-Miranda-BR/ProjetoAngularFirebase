export interface IProduto {
    nome: string;
    preco: number;
    estoque: number;
    marca: IMarca[];

}
export interface IMarca {
    nome: string
}
