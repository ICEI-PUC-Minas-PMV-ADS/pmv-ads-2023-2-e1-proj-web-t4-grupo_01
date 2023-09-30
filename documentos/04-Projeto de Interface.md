
# Projeto de Interface

## Fluxo de usuário
O diagrama apresentado na Figura 3 mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o edereço o repositório Github do projeto.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/userflow.png"
    <figcaption>Figura 3 - Fluxo de usuário mostrando as interções internas app</figcaption>
</figure> 

## Wireframe
Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam estruturas comuns que são apresentadas na Figura 4. Nesta estrutura, existem 3 grandes componente, descritos a seguir. São eles:

- Cabeçalho: Contendo os botões de navegação direta mais relevantes para a navegação do usuário.
- Corpo de conteúdo: Contendo as informações e alguns botões de navegação para o usuário.
- Rodapé: Contendo as  informações sobre a equipe que desenvolveu o app.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/WireframeModelo.png"
    <figcaption>Figura 4 - Wireframe modelo apresentando os principais componente presentes no app</figcaption>
</figure>


## Página de login
A tela Página de login tem como objetivo possibilitar ao usuário a entrada na aplicação. Com base na estrutura padrão sem a Header, ela mostra a logo do site, seu nome e temos os seguintes componentes:
- Componente de **Usuário**, na qual permite ao usuário preencher a caixa de texto com seu email, para posteriormente consgeuir acesso ao site;
- Componente de **Senha**, na qual permite ao usuário preencher a caixa de texto com sua senha, para juntamente com componente de **Usuário** e componente **Login**, conseguir entrar no site;
- Componente de **Login**, consiste em um botão que permite o usuário ao aperta-lo entrar no site depois de preencher os componentes de **Usuário** e **Senha**;
- Componente de **Registre-se**, consiste em um botão que permite o usuário ao aperta-lo ir para página de formulário de usuário voluntário para que possa efetuar seu cadastro no site;
- Componente **Esqueci minha senha**, consiste em um botão que permite o usuário ao aperta-lo ir para página de recuperação de senha e recupera-la;
- Componente **Sou empresa e quero me cadastrar**, consiste em um botão que permite o usuário ao aperta-lo ir para página de formulário de usuário organizacional  para que possa efetuar seu cadastro no site.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe0.png"
    <figcaption>Figura 5 - Página de login e registro dos usuários</figcaption>
</figure> 

## Página de formulário de usuário voluntário
A tela Página de formulário de usuário voluntário tem como objetivo possibilitar ao usuário voluntário preencher seus dados para que possa se cadastrar no site e efetuar seu login no mesmo, além disso permite a alteração de informações e desativamento do perfil. Com base na estrutura padrão sem a Header, temos os seguintes componentes:
- Componente de **E-mail**, na qual permite que o usuário voluntário preencha a caixa de texto com seu email para cadastro no site;
- Componente de **Senha**, na qual permite que o usuário voluntário preencha a caixa de texto com sua senha para cadastro no site;
- Componente de **Selecione uma foto para ilustrar seu perfil**, na qual permite que o usuário voluntário escolha uma foto para colocar em seu perfil;
- Componente de **Preview**, permite ao usuário voluntário ver como sua foto ficará no perfil previamente;
- Componente de **Caixa imagem**, local de armazenamento da foto escolhida para perfil;
- Componente de **Enviar**, consiste em um botão que permite o usuário voluntário ao aperta-lo, enviar a imagem escolhida para colocar no componente **Caixa imagem**;
- Componente de **Concluir**, consiste em um botão que permite o usuário voluntário ao aperta-lo, concluir seu cadastro no site e ir para Página de login;
- Componente de **Descartar**, consiste em um botão que permite o usuário voluntário ao aperta-lo, descartar as informações do formulário;
- Componente de **Desativar Perfil**, consiste em um botão que permite o usuário voluntário ao aperta-lo, desativar sua conta. Este componente só ficará visivel se já houver sido realizado um login a aplicação previamente, ou seja já possuir cadastro. 
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe1.png"
    <figcaption>Figura 6 - Página com o formulário de informações do usuário voluntário</figcaption>
</figure> 

## Página de formulário de usuário organizacional
A tela Página de formulário de usuário organizacional tem como objetivo possibilitar ao usuário organizacional preencher seus dados para que possa se cadastrar no site e efetuar seu login no mesmo, além disso permite a alteração de informações e desativamento do perfil. Com base na estrutura padrão sem a Header, temos os seguintes componentes:
- Componente de **Nome**, na qual permite o usuário organizacional preencha a caixa de texto com seu nome;
- Componente de **CNPJ**, na qual permite o usuário organizacional preencha a caixa de texto com seu CNPJ;
- Componente de **Endereço**, a qual permite o usuário organizacional preencha a caixa de texto com seu endereço;
  Componente de **Bairro**, na qual permite o usuário organizacional preencha a caixa de texto com seu bairro;
- Componente de **E-mail**, na qual permite o usuário organizacional preencha a caixa de texto com seu E-mail;
- Componente de **Senha**, na qual permite que o usuário organizacional preencha a caixa de texto com sua senha para cadastro no site;
- Componente de **Telefone**, a qual permite o usuário organizacional preencha a caixa de texto com seu telefone;
- Componente de **Nº**, na qual permite o usuário organizacional preencha a caixa de texto com seu Nº;
- Componente de **CEP**, na qual permite o usuário organizacional preencha a caixa de texto com seu CEP;
- Componente de **Complemento**, a qual permite o usuário organizacional preencha a caixa de texto com seu complemento;
- Componente de **Endereço Html**, na qual permite o usuário organizacional preencha a caixa de texto com seu endereço Html;
- Componente de **Cidado**, na qual permite o usuário organizacional escolher uma cidade a partir de uma caixa de seleção;
- Componente de **Estado**, na qual permite o usuário organizacional escolher uma estado a partir de uma caixa de seleção;
- Componente de **Horários**, consiste em textos de todos os dias da semana em sequência, seguidos pela linha de baixo contendo caixas de texto que permite que o usuário organizacional preencha colocando em cada dia da semana seu horário de inicio e temrino de atendimento;
- Componente de **Conte-nos sobre você**, consiste em uma caixa de texto que permite o usuário organizacional escrever informações sobre seu estabelecimento;
- Componente de **Selecione uma foto para ilustrar seu perfil**, na qual permite que o usuário organizacional escolha uma foto para colocar em seu perfil;
- Componente de **Preview**, permite ao usuário organizacional ver como sua foto ficará no perfil previamente;
- Componente de **Caixa imagem**, local de armazenamento da foto escolhida para perfil;
- Componente de **Enviar**, consiste em um botão que permite o usuário organizacional ao aperta-lo, enviar a imagem escolhida para colocar no componente **Caixa imagem**;
- Componente de **Concluir**, consiste em um botão que permite o usuário organizacional ao aperta-lo, concluir seu cadastro no site e ir para Página de login;
- Componente de **Descartar**, consiste em um botão que permite o usuário organizacional ao aperta-lo, descartar as informações do formulário;
- Componente de **Desativar Perfil**, consiste em um botão que permite o usuário organizacional ao aperta-lo, desativar sua conta. Este componente só ficará visivel se já houver sido realizado um login a aplicação previamente, ou seja já possuir cadastro. 
  

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe2.png"
    <figcaption> Figura 7 - Página com o formulário de informações do usuário organizacional</figcaption>
</figure> 

## Página de busca
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe3.png"
    <figcaption>Página de busca com opições pré-definidas</figcaption>
</figure> 

## Página de instruções de emergência
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe7.png"
    <figcaption>Página de instruções para diversas situações de emergência</figcaption>
</figure> 

## Página de visualização do perfil organizacional
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe5.png"
    <figcaption>Página de visualização do perfil organizacional pelo próprio</figcaption>
</figure> 

## Página de visualização do perfil organizacional pelo usuário voluntário
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe4.png"
    <figcaption>Página de visualização do perfil organizacional pelo usuário voluntário</figcaption>
</figure> 

## Página de edição de galeria
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe6.png"
    <figcaption>Página de edição da galeria de imagens do usuário organizacional</figcaption>
</figure> 

## página de recuperação de senha
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe9.png"
    <figcaption>Página de recuperação de senha</figcaption>
</figure> 

## Página de cancelamento de perfil
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe8.png"
    <figcaption>Página com formulário de cancelamento de perfil</figcaption>
</figure> 



## Protótipo

Desenvolver um protótipo emerge como uma das maneiras mais ágeis e econômicas de validar uma ideia, conceito ou funcionalidade. Isso permite a interação, avaliação, modificação e aprovação das principais características de uma interface antes de entrar na fase de desenvolvimento. Leia o artigo [Protótipos: baixa, média ou alta fidelidade?](https://medium.com/ladies-that-ux-br/prot%C3%B3tipos-baixa-m%C3%A9dia-ou-alta-fidelidade-71d897559135).

### Protótipo de baixa fidelidade

Protótipos de baixa fidelidade apresentam de forma simplificada o design da interface e o relacionamento entre suas páginas, permitindo evolução da proposta da solução. Neste projeto, os utilizaremos para apoiar a validação dos requisitos e efetuar mudanças dos mesmos, caso seja necessário, para menor impacto na codificação da aplicação.

[Elabore as principais interfaces gráficas da aplicação de modo que os requisitos funcionais sejam contemplados nas telas propostas.]

[Adicione aqui as telas da sua aplicação com seus devidos títulos.] 
 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
>- Ferramentas:
>> - [Pencil](https://pencil.evolus.vn/)
>> - [MarvelApp](https://marvelapp.com/)
>> - [Figma](https://www.figma.com/)



