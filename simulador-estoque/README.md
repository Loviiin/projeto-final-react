# Simulador de Estoque

Este projeto é um simulador de estoque desenvolvido em React utilizando Vite. O objetivo do projeto é fornecer uma interface intuitiva para gerenciar produtos em estoque, permitindo adicionar, editar, remover e visualizar produtos.

## Funcionalidades

- **Adicionar Produtos**: Permite adicionar novos produtos ao estoque, incluindo nome, preço, categoria e imagem.
- **Editar Produtos**: Permite editar as informações de produtos existentes.
- **Remover Produtos**: Permite remover produtos do estoque.
- **Pesquisar Produtos**: Permite pesquisar produtos pelo nome.
- **Ordenar Produtos**: Permite ordenar produtos por nome ou preço.
- **Filtrar por Categoria**: Permite filtrar produtos por categoria.
- **Dashboard**: Exibe um gráfico com a quantidade de produtos por categoria e uma lista de produtos com suas imagens.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento de projetos em React.
- **React Router**: Biblioteca para gerenciamento de rotas em aplicações React.
- **Chart.js**: Biblioteca para criação de gráficos.
- **React Chart.js 2**: Integração do Chart.js com React.
- **Google Custom Search API**: API para busca de imagens.

## Principais Desafios

- **Integração com a API do Google Custom Search**: Implementar a busca de imagens utilizando a API do Google Custom Search e lidar com possíveis erros e falta de resultados relevantes.
- **Persistência de Dados**: Garantir que os dados dos produtos sejam persistidos no `localStorage` para que não sejam perdidos ao recarregar a página.
- **Responsividade**: Garantir que a interface seja responsiva e se adapte adequadamente a diferentes tamanhos de tela, incluindo desktops e dispositivos móveis.


## Instruções de Uso

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/simulador-estoque.git

2. cd simulador-estoque

3. npm install ou yarn install

### Executando o projeto

1. Inicie o servidor:
    ```sh
    npm run dev

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

### License
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


### Próximos Passos

1. **Utilizar uma IA para verificar as imagens que a API do google retornou

Se precisar de mais ajuda em qualquer um desses passos, sinta-se à vontade para perguntar!