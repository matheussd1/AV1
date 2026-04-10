import * as readline from 'readline';
import { Database } from './data/Database';
import { Aeronave } from './models/Aeronave';
import { TipoAeronave } from './enums';

const db = new Database();
db.carregarDados();

// configura o leitor do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu(): void {
    console.log(`
=========================================
✈️  AEROCODE - SISTEMA DE GESTÃO (CLI) ✈️
=========================================
1. Cadastrar nova Aeronave (Simples)
2. Listar Aeronaves
3. Sair do Sistema
=========================================`);
    
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao.trim()) {
            case '1':
                cadastrarAeronave();
                break;
            case '2':
                listarAeronaves();
                break;
            case '3':
                console.log('\nSalvando dados e encerrando a Aerocode. Até logo! ✈️');
                db.salvarDados();
                rl.close();
                break;
            default:
                console.log('\n❌ Opção inválida! Tente novamente.');
                exibirMenu();
                break;
        }
    });
}

function cadastrarAeronave(): void {
    rl.question('Digite o código da aeronave (ex: AC-001): ', (codigo) => {
        rl.question('Digite o modelo (ex: E-190): ', (modelo) => {
            
            // dados prontos pra testar mais facil
            const novaAeronave = new Aeronave(codigo, modelo, TipoAeronave.COMERCIAL, 110, 4500);
            
            db.aeronaves.push(novaAeronave);
            db.salvarDados();
            
            console.log(`\n✅ Aeronave ${codigo} (${modelo}) cadastrada com sucesso!`);
            exibirMenu();
        });
    });
}

function listarAeronaves(): void {
    console.log('\n--- LISTA DE AERONAVES ---');
    if (db.aeronaves.length === 0) {
        console.log('Nenhuma aeronave cadastrada no sistema.');
    } else {
        db.aeronaves.forEach((a, index) => {
            console.log(`${index + 1}. [${a.codigo}] - Modelo: ${a.modelo} | Tipo: ${a.tipo}`);
        });
    }
    exibirMenu(); // volta para o menu
}

// inicia mostrando o menu
exibirMenu();