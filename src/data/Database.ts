import * as fs from 'fs';
import { Aeronave } from '../models/Aeronave';
import { Funcionario } from '../models/Funcionario';
import { Peca } from '../models/Peca';

const ARQUIVO_DADOS = 'dados_aerocode.txt';

export class Database {    // listas principais
    aeronaves: Aeronave[] = [];
    funcionarios: Funcionario[] = [];
    pecas: Peca[] = []; // peças em estoque

    salvarDados(): void {
        const dados = {
            aeronaves: this.aeronaves,
            funcionarios: this.funcionarios,
            pecas: this.pecas
        };
        
        
        fs.writeFileSync(ARQUIVO_DADOS, JSON.stringify(dados, null, 2), 'utf-8');
    }

    carregarDados(): void {    //pra ver se o arquivo ja existe antes de tentarler
        if (fs.existsSync(ARQUIVO_DADOS)) {
            const conteudo = fs.readFileSync(ARQUIVO_DADOS, 'utf-8');
            const dados = JSON.parse(conteudo);
            
            this.aeronaves = dados.aeronaves || [];
            this.funcionarios = dados.funcionarios || [];
            this.pecas = dados.pecas || [];
        }
    }
}