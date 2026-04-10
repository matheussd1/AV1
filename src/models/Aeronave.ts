import { TipoAeronave } from '../enums';
import { Peca } from './Peca';
import { Etapa } from './Etapa';
import { Teste } from './Teste';

export class Aeronave {
    codigo: string;
    modelo: string;
    tipo: TipoAeronave;
    capacidade: number;
    alcance: number;
    
    // listas do que compoe o aviao
    pecas: Peca[];
    etapas: Etapa[];
    testes: Teste[]; 

    constructor(codigo: string, modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
        
        // listas comecam vazias
        this.pecas = [];
        this.etapas = [];
        this.testes = [];
    }

    detalhes(): void {
        console.log(`\n=== Detalhes da Aeronave [${this.codigo}] ===`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Capacidade: ${this.capacidade} passageiros/carga`);
        console.log(`Alcance: ${this.alcance} km`);
        console.log(`Peças instaladas: ${this.pecas.length}`);
        console.log(`Etapas registradas: ${this.etapas.length}`);
        console.log(`Testes realizados: ${this.testes.length}`);
        console.log(`=========================================\n`);
    }

    salvar(): void {
        console.log(`Salvando dados da aeronave ${this.codigo}...`);
    }

    carregar(): void {
        console.log(`Carregando dados da aeronave ${this.codigo}...`);
    }
}