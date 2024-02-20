
# Bitstream-Ninja

<p align="center">
  <img src="https://i.pinimg.com/originals/ce/5a/e6/ce5ae6bfc97f84e613187cc40f287c65.gif" alt="GIF">
</p>


O Bitstream-Ninja é uma ferramenta poderosa projetada para profissionais de segurança ofensiva, visando a geração avançada de sequências numéricas aleatórias. Desenvolvido em Node.js, utiliza conceitos de streaming para eficientemente gerar e manipular grandes volumes de dados, proporcionando um conjunto de recursos valiosos para testes de penetração e avaliações de segurança.
## Recursos

1. **Geração Eficiente de Sequências Numéricas:**

- Utiliza a biblioteca nativa de criptografia do Node.js para gerar sequências numéricas altamente aleatórias.
   
- Implementa o conceito de streaming para processar grandes volumes de dados de forma eficiente, evitando a sobrecarga de memória.


2. **Streaming de Dados:**

- Aproveita os streams do Node.js para processar e escrever sequências diretamente em um arquivo em tempo real, reduzindo a carga na memória.

 3. **Geração de NumberLists:**

- Fornece a opção de gerar sequências numéricas no formato de uma lista, ampliando a versatilidade da ferramenta.

3. **Ferramenta de Fuzzing:**

- Integra-se perfeitamente em cenários de testes de fuzzing, permitindo a geração contínua de dados inesperados para avaliação da resiliência de sistemas.

4. **Simulação de Ataques:**
- Utiliza sequências aleatórias para gerar payloads dinâmicos em simulações de ataques, contribuindo para testes de defesa e resposta a incidentes.

## Como Usar

### Instalação:

```bash
git clone https://github.com/seunome/Bitstream-Ninja.git
cd Bitstream-Ninja
npm install
```

### Execução:

```bash
node app --size 5 --digits 12
``` 

<details>
<summary><strong>Funcionamento Detalhado</strong></summary>

### Geração de Sequências Numéricas:

- Utiliza a biblioteca `crypto` do Node.js para gerar números aleatórios criptograficamente seguros.
- Gera sequências numéricas de acordo com os parâmetros fornecidos, garantindo a aleatoriedade necessária para testes robustos.

### Streaming de Dados com Node.js:

- Implementa o módulo `fs` para criar um stream de escrita no arquivo "random_sequences.txt".
- Adota o conceito de streaming para escrever sequencialmente as sequências numéricas no arquivo, otimizando o uso de memória.

### Barra de Progresso Animada:

- Utiliza a biblioteca `ProgressBar` para criar uma barra de progresso visualmente atraente durante a geração, proporcionando feedback em tempo real sobre o andamento do processo.

</details>

<details>
<summary><strong>Uso em Segurança Ofensiva</strong></summary>

### Geração Eficiente para Testes de Penetração:

- Gera dados significativos para testes de penetração, evitando sobrecarga de memória ao processar grandes volumes de informações.

### Simulações de Ataques com Dados Dinâmicos:

- Contribui para simulações realistas de ataques ao gerar dados dinâmicos, desafiando a resiliência de sistemas contra entradas inesperadas.

### Integração em Testes de Fuzzing:

- Facilita a integração em testes de fuzzing, ajudando a identificar possíveis vulnerabilidades decorrentes de dados inesperados.

</details>

<details>
<summary><strong>Contribuições</strong></summary>

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, propor melhorias ou criar pull requests.

</details>

<details>
<summary><strong>Licença</strong></summary>

Este projeto está licenciado sob a [MIT License](LICENSE).

</details>
