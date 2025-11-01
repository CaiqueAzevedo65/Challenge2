# 📋 Plano de Melhorias - Prevent

## 🔴 Prioridade Alta (Crítico)

- [ ] **Corrigir caminhos de imagens**
  - Alterar `/public/images/` para `/images/` em todos os arquivos
  - Arquivos afetados: `Results/index.jsx`, `App.css`
  - Motivo: Vite não resolve corretamente caminhos com `/public/`

- [ ] **Implementar funcionalidade de busca**
  - Adicionar lógica de busca no componente `Header`
  - Permitir busca por cidade/bairro
  - Redirecionar para página de resultados com os dados filtrados

- [ ] **Corrigir inconsistência de rotas**
  - Padronizar rotas em lowercase: `/projects` e `/configurations`
  - Atualizar links no `Header/index.jsx` (linhas 33 e 36)
  - Garantir consistência entre definição de rotas e navegação

- [ ] **Criar arquivo de dados separado**
  - Mover dados hardcoded de `Results/index.jsx` para `src/data/cityData.js`
  - Mover dados de `Historico/index.jsx` para `src/data/historicoData.js`
  - Facilitar manutenção e possível integração com API

- [ ] **Tornar o mapa dinâmico**
  - Passar coordenadas como props para `Map/index.jsx`
  - Criar dados de coordenadas para cada estado
  - Atualizar mapa baseado no estado/cidade selecionado

## 🟡 Prioridade Média (Importante)

- [ ] **Implementar persistência de configurações**
  - Salvar dados do formulário em `localStorage`
  - Carregar configurações salvas ao abrir a página
  - Adicionar feedback visual ao salvar

- [ ] **Adicionar loading states**
  - Criar componente de Loading
  - Adicionar estados de carregamento nas páginas
  - Melhorar experiência do usuário

- [ ] **Adicionar tratamento de erros**
  - Implementar error boundaries
  - Adicionar fallbacks para dados não encontrados
  - Criar página 404 para rotas inexistentes

- [ ] **Integrar com API real**
  - Pesquisar APIs de dados meteorológicos (INMET, CEMADEN)
  - Implementar camada de serviços para requisições
  - Substituir dados mockados por dados reais

- [ ] **Completar seção pitch na Home**
  - Adicionar conteúdo na seção vazia (linhas 98-107)
  - Definir objetivo da seção com o time
  - Implementar layout e conteúdo

- [ ] **Decidir sobre componente Graphic**
  - Integrar `Graphic/index.jsx` em alguma página OU
  - Remover componente se não for necessário
  - Evitar código morto no projeto

## 🟢 Prioridade Baixa (Melhorias)

- [ ] **Adicionar testes automatizados**
  - Instalar Jest e React Testing Library
  - Criar testes unitários para componentes
  - Criar testes de integração para páginas
  - Configurar CI/CD com testes

- [ ] **Migrar para TypeScript**
  - Instalar dependências do TypeScript
  - Criar interfaces para dados (Estados, Cidades, Alertas)
  - Converter componentes gradualmente
  - Adicionar type safety ao projeto

- [ ] **Adicionar Prettier**
  - Instalar e configurar Prettier
  - Criar `.prettierrc` com regras do projeto
  - Adicionar script `format` no `package.json`
  - Integrar com ESLint

- [ ] **Melhorar documentação técnica**
  - Adicionar comentários JSDoc nos componentes
  - Criar guia de contribuição (CONTRIBUTING.md)
  - Documentar estrutura de dados
  - Adicionar exemplos de uso

- [ ] **Implementar dark mode**
  - Criar contexto de tema
  - Adicionar variáveis CSS para temas
  - Conectar com opção nas configurações
  - Persistir preferência do usuário

- [ ] **Otimizações de performance**
  - Implementar lazy loading de rotas
  - Otimizar imagens (WebP, compressão)
  - Adicionar memoização onde necessário
  - Implementar code splitting

- [ ] **Melhorias de acessibilidade**
  - Adicionar labels ARIA
  - Garantir navegação por teclado
  - Melhorar contraste de cores
  - Testar com leitores de tela

- [ ] **Refatoração de código**
  - Padronizar nomenclatura (português ou inglês)
  - Remover CSS duplicado
  - Extrair constantes e magic numbers
  - Melhorar organização de imports

## 📝 Notas Adicionais

### Dados Mockados Atuais
- Estados: São Paulo, Rio de Janeiro, Minas Gerais
- Bairros de risco: 6 por estado
- Histórico: 3 eventos por estado

### APIs Sugeridas para Integração
- **INMET** (Instituto Nacional de Meteorologia)
- **CEMADEN** (Centro Nacional de Monitoramento e Alertas de Desastres Naturais)
- **IBGE** (Dados geográficos)
- **OpenWeatherMap** (Dados meteorológicos)

### Melhorias de UX Sugeridas
- Adicionar animações de transição entre páginas
- Implementar skeleton loading
- Adicionar tooltips explicativos
- Melhorar feedback visual em ações do usuário
- Adicionar breadcrumbs para navegação

---

**Última atualização:** 30/10/2025  
**Versão do projeto:** 0.0.0
