import { Aeronave } from './Aeronave';
import * as fs from 'fs';

export class Relatorio {
    
    gerarRelatorioAeronave(aeronave: Aeronave): void {
        console.log(`Gerando relatório para a aeronave ${aeronave.codigo}...`);
        
        // relatorio em texto
        const conteudo = `
=========================================
RELATÓRIO DE ENTREGA DE AERONAVE
=========================================
Data de Entrega: ${new Date().toLocaleDateString()}
Cliente: Aerocode Client (Padrão)

--- DADOS DA AERONAVE ---
Código: ${aeronave.codigo}
Modelo: ${aeronave.modelo}
Tipo: ${aeronave.tipo}
Capacidade: ${aeronave.capacidade}
Alcance: ${aeronave.alcance} km

--- RESUMO DE PRODUÇÃO ---
Total de Peças Instaladas: ${aeronave.pecas.length}
Total de Etapas Concluídas: ${aeronave.etapas.length}
Total de Testes Realizados: ${aeronave.testes.length}
=========================================
        `;
        
        this.salvarRelatorio(aeronave.codigo, conteudo);
    }

    salvarRelatorio(codigoAeronave: string, conteudo: string): void {
        const nomeArquivo = `relatorio_${codigoAeronave}.txt`;
        // o fs.writeFileSync vai criar e salvar o arquivo de texto
        fs.writeFileSync(nomeArquivo, conteudo, 'utf-8');
        console.log(`Relatório salvo com sucesso no arquivo: ${nomeArquivo}`);
    }
}