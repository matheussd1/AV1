import { NivelPermissao } from '../enums';

export class Funcionario {
    id: string;
    nome: string;
    telefone: string;
    endereco: string;
    usuario: string;
    senha: string;
    nivelPermissao: NivelPermissao;

    constructor(id: string, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this.nivelPermissao = nivelPermissao;
    }

    autenticar(usuarioTentativa: string, senhaTentativa: string): boolean {
        if (this.usuario === usuarioTentativa && this.senha === senhaTentativa) {
            console.log(`Autenticação bem-sucedida. Bem-vindo, ${this.nome}!`);
            return true;
        } else {
            console.log(`Falha na autenticação. Usuário ou senha incorretos.`);
            return false;
        }
    }

    salvar(): void {
        console.log(`Salvando dados do funcionário ${this.nome}...`);
    }

    carregar(): void {
        console.log(`Carregando dados do funcionário...`);
    }
}