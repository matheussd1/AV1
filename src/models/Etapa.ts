import { StatusEtapa } from '../enums';
import { Funcionario } from './Funcionario';

export class Etapa {
    nome: string;
    prazo: string;
    status: StatusEtapa;
    funcionarios: Funcionario[]; 

    constructor(nome: string, prazo: string) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = StatusEtapa.PENDENTE; // toda etapa nasce pendente
        this.funcionarios = [];
    }

    iniciar(): void {
        if (this.status === StatusEtapa.PENDENTE) {
            this.status = StatusEtapa.ANDAMENTO;
            console.log(`A etapa '${this.nome}' foi iniciada.`);
        } else {
            console.log(`Não é possível iniciar. A etapa atual está como: ${this.status}`);
        }
    }

    finalizar(): void {
        if (this.status === StatusEtapa.ANDAMENTO) {
            this.status = StatusEtapa.CONCLUIDA;
            console.log(`A etapa '${this.nome}' foi concluída com sucesso!`);
        } else {
            console.log(`A etapa precisa estar em ANDAMENTO para ser concluída.`);
        }
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log(`Funcionário vinculado à etapa ${this.nome}.`);
    }

    listarFuncionarios(): void {
        console.log(`--- Funcionários na Etapa: ${this.nome} ---`);
        this.funcionarios.forEach((f, index) => {
            console.log(`${index + 1}. ${f.nome}`);
        });
    }
}