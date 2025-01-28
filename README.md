# pdpj-front-referencia - Frontend de Referência da PDPJ
Implementação de Referência para Fontend PDPJ

## O que é este projeto?

Este é o projeto de referência para o desenvolvimento de _frontends_ para a Plataforma Digital do Poder Judiciário - PDPJ. Ele se baseia no _framework_ UIKit, desenvolvido em parceria entre o CNJ e o TJMT.

O UIKit foi desenvolvido em Angular, _framework_ baseado em componentes visuais desenvolvido pelo Google e que se utiliza da linguagem de programação `typescript`.

## O que já vem pronto

A fim de facilitar o desenvolvimento de novos _frontends_ para a PDPJ, este projeto já vem pré-configurado com alguns componentes e services costumeiramente presentes, de tal modo que o desenvolvedor não precise se preocupar com o _boiler plate_, podendo partir diretamente para a codificação negocial da solução.

Assim, o projeto já contém:

- Integração com o serviço de login único da PDPJ - SSO (Keycloak);
- Service de `spinner`, que pode ser chamado sempre que uma requisição assíncrona for demorar um pouco, bloqueando a tela até a chamada do método `hide` e exigindo um "relógio rodando";
- Service de `avisos`, que se utiliza do componente `SnackBar` do Angular Material para exibir pequenos alertas na tela (tipos info, warn, error e success);
- Um módulo `shared`, que já exporta os componentes mais comuns do Angular Material (_dropdowns_, botões, etc);
- Interceptor para incluir automaticamente o cabeçaho `Authorization` em todas as requisições ao _backend_;
- Interceptor para tratar os erros/exceções retornadas pelas chamadas à API do _backend_;

As configurações da aplicação ficam no arquivo `src\assets\config\env.js`, em particular, a URL do _backend_ e os dados para autenticação no SSO (client_id e URL do SSO).

> Para obter o client_id do seu projeto, solicite ao mentor técnico do projeto no CNJ.

## O que eu devo modificar?

Em princípio, além do arquivo env.js, o desenvolvedor(a) pode se ater a escrever os services que irão fazer as chamadas à API do _backend_, e criar as telas do sistema, organizadas em componentes e módulos.

No Angular, o módulo é um conceito muito importante, e se refere ao agrupamento de um conjunto de telas e componentes visuais.

No UIKit, o cabeçalho e menu da aplicação já vem prontos, ainda que configuráveis. Assim, a telas escritas especificamente para o projeto aparecem no "miolo" da tela, onde estiver colocado o `router-outlet` do componente principal (`app.component.html`).

Além disso, serão necessários personalizar os seguintes arquivos:

- app-routing.module.ts - Contém as rotas principais da sua aplicação. Geralmente, uma para cada módulo. O usual é que cada módulo, por sua vez, configure suas rotas filhas;
- app.component.html - Define o _layout_ principal da aplicação;
- app.component.ts - No ponto onde se define a rota inicial;

## Pilha de tecnologias

> #### Angular
> - **11.2**
> - https://angular.io/

> #### AngularCLI 
> - https://cli.angular.io/

> #### Angular Material Design
> - https://material.angular.io/

> #### Font Awesome
> - https://fontawesome.com/

> #### Bootstrap (apenas gridsystem)
> - https://getbootstrap.com/

> #### Akita
> - https://netbasal.gitbook.io/akita/

## Iniciando

Para executar localmente a aplicação, antes de mais nada, é necessário possuir o `Node.js` instalado em sua máquina. Vide https://nodejs.org/en/download/.

Instalado o `Node.js`, deve-se instalar o Angular e o _typescript_, por meio do `NPM`, gerenciador de dependências e pacotes do `Node.js`. Para tanto, execute na linha de comando:

```sh
npm install --global @angular/cli typescript
```

Com o Angular instalado, clone este projeto, dando-o um novo nome:

```sh
git clone https://git.cnj.jus.br/pdpj/frontends/referencia.git [your-project-name]
```

Após, vá para a raiz da pasta criada pelo comando acima, e execute `npm install` na linha de comando, para instalar todas as dependências do projeto (elas ficarão na pasta `node_modules`, dentro da raiz do projeto):

```sh
npm install
```

Por fim, execute o comando abaixo para rodar a aplicação. Ela ficará disponível no endereço http://localhost:4200.

```sh
ng serve
```

### Gerando telas

Para facilitar a geração de telas de CRUD, pode-se utilizar o comando `ng crud`, do Angular, como mostrado abaixo.

```sh
# Comando para gerar telas (CRUD) a partir de um schema
ng g crud --name=localidade --obj="{'id':'number', 'title':'string'}" --force

# Comando para gerar telas (CRUD) a partir de uma API
ng g crud --name=breweries --url=https://api.openbrewerydb.org/breweries --force
```

### Debug no VSCode

No VSCode é possível fazer o `debug` pressionando a tecla `F5`.

## Repositórios Vinculados

> #### UIKit
> - Contém os arquivos de código-fonte do projeto UIKit (estilos e componentes)
> - https://git.cnj.jus.br/uikit/uikit

> #### UIKit.PJe.Jus - Design
> - Projeto contendo repositórios referente a Interface Gráfica dos sistemas da Justiça
> - https://git.cnj.jus.br/uikit/ui.pje.jus
