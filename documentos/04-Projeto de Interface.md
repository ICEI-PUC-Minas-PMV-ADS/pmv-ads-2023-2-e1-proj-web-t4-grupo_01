
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
- Componente de **Usuário**, na qual permite ao usuário preencher a caixa de texto com seu email, para posteriormente conseguir acesso ao site;
- Componente de **Senha**, na qual permite ao usuário preencher a caixa de texto com sua senha, para juntamente com componente de **Usuário** e componente **Login**, conseguir entrar no site;
- Componente de **Login**, consiste em um botão que permite o usuário ao ser clicado entrar no site depois de preencher os componentes de **Usuário** e **Senha**;
- Componente de **Registre-se**, consiste em um botão que permite o usuário ao ser clicado ir para página de formulário de usuário voluntário para que possa efetuar seu cadastro no site;
- Componente **Esqueci minha senha**, consiste em um botão que permite o usuário ao ser clicado ir para página de recuperação de senha e recuperá-la;
- Componente **Sou empresa e quero me cadastrar**, consiste em um botão que permite o usuário ao ser clicado ir para página de formulário de usuário organizacional para que possa efetuar seu cadastro no site.

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
- Componente de **Enviar**, consiste em um botão que permite o usuário voluntário ao ser clicado, enviar a imagem escolhida para colocar no componente **Caixa imagem**;
- Componente de **Concluir**, consiste em um botão que permite o usuário voluntário ao ser clicado, concluir seu cadastro no site e ir para Página de login;
- Componente de **Descartar**, consiste em um botão que permite o usuário voluntário ao ser clicado, descartar as informações do formulário;
- Componente de **Desativar Perfil**, consiste em um botão que permite o usuário voluntário ao ser clicado, desativar sua conta. Este componente só ficará visível se já houver sido realizado um login a aplicação previamente, ou seja já possuir cadastro. 
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
- Componente de **Cidade**, na qual permite o usuário organizacional escolher uma cidade a partir de uma caixa de seleção;
- Componente de **Estado**, na qual permite o usuário organizacional escolher uma estado a partir de uma caixa de seleção;
- Componente de **Estabelecimento**, na qual o usuário organizacional pode escolher o tipo de estabelecimento (negócio) ao qual ele pertence a partir de uma caixa de seleção;
- Componente de **Horários**, consiste em textos de todos os dias da semana em sequência, seguidos por uma linha abaixo contendo caixas de texto que permitem ao usuário organizacional preencher seu horário de início e término de atendimento para cada dia da semana;
- Componente de **Conte-nos sobre você**, consiste em uma caixa de texto que permite o usuário organizacional escrever informações sobre seu estabelecimento;
- Componente de **Selecione uma foto para ilustrar seu perfil**, na qual permite que o usuário organizacional selecionar uma foto para colocar em seu perfil;
- Componente de **Preview**, permite ao usuário organizacional ver como sua foto ficará no perfil previamente;
- Componente de **Caixa imagem**, local de armazenamento da foto escolhida para o perfil;
- Componente de **Enviar**, consiste em um botão que permite o usuário organizacional ao ser clicado, enviar a imagem escolhida para colocar no componente **Caixa imagem**;
- Componente de **Concluir**, consiste em um botão que permite o usuário organizacional ao ser clicado, concluir seu cadastro no site e ir para Página de login;
- Componente de **Descartar**, consiste em um botão que permite o usuário organizacional ao ser clicado, descartar as informações do formulário;
- Componente de **Desativar Perfil**, consiste em um botão que permite o usuário organizacional ao ser clicado, desativar sua conta. Este componente só ficará visível se já houver sido realizado um login a aplicação previamente, ou seja já possuir cadastro. 
  
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe2.png"
    <figcaption> Figura 7 - Página com o formulário de informações do usuário organizacional</figcaption>
</figure> 

## Página de busca
A tela Página de busca tem como objetivo possibilitar ao usuário voluntário fazer buscas fixas através de uma caixa de seleção com temas de assuntos do site. No corpo da tela podemos verificar tais informações solicitadas, como na imagem abaixo, por exemplo, podemos ver a listagem de ONGs ou clínicas veterinárias, contendo nome do perfil organizacional, endereço físico, horário de funcionamento e sua avaliação. Com base na estrutura padrão temos como componente, um **Botão de informações sobre a busca**, na qual consiste em um botão ao ser clicado permite que o usuário voluntário seja encaminhado até a página com a informação escolhida.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe3.png"
    <figcaption> Figura 8 - Página de busca com opições pré-definidas</figcaption>
</figure> 

## Página de instruções de emergência
A tela Página de instruções de emergência tem como objetivo possibilitar ao usuário voluntário, ao clicar no botão emergência, na qual provem da estrutura básica header, encontrar informações que possam ser importantes e que possam ajudar o voluntário em situações dificeis com os animais encontrados. Com base na estrutura padrão, apenas com alteração na Header, trocando o botão de "emergência" por "pesquisa", temos como componentes uma caixa de seleção que indica motivos fixos das quais você possa estar precisando de ajuda e ao ser escolhida te mostra no corpo da página a informação selecionada.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe7.png"
    <figcaption> Figura 9 - Página de instruções para diversas situações de emergência</figcaption>
</figure> 

## Página de visualização do perfil organizacional
A tela Página de visualização do perfil organizacional, tem como objetivo mostrar ao usuário organizacional as respectivas informações do seu estabelecimento. Possui estrutura padrão com alteração na Header, contendo apenas logo do site, foto do usuário organizacional e botões de sair e editar, nessa pagina temos a seguinte divisão:

-Caso o usuário organizacional queira editar suas informações de texto e imagem de perfil, será possível clicando no botão editar da header, localizado ao lado da foto de perfil e do botão sair. Nesse caso ele será direcionado para Página de formulário de usuário organizacional.

-Caso o usuário organizacional queira editar suas fotos e informações da galeria, será possivel através do componente **Editar galeria**, que consiste no botão editar localizado no corpo da página. Você será redirecionaod até a Página de edição de galeria.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe5.png"
    <figcaption> Figura 10 - Página de visualização do perfil organizacional pelo próprio</figcaption>
</figure> 

## Página de visualização do perfil organizacional pelo usuário voluntário
A tela Página de visualização do perfil organizacional, provem da Página de busca, ou seja quando pesquisado alguma Ong ou clínica e clicado no componente **Botão de informações sobre a busca** você será redirecionado até essa tela, na qual tem como objetivo fornecer informações completas ao usuário voluntário sobre o estabelecimento selecionado. No corpo da tela temos a foto do estabelecimento, biografia, horário de funcionamento, telefone, site, endereço, galeria de fotos e avaliação. Com base na estrutura padrão, temos como componentes:
- Componente de **botão de like**, na qual consiste no botão like e ao ser clicado irá favoritar o estabelecimento; 
- Componente de **avalie** que consiste em um botão que permite a avaliação do estabelecimento pelo usuário voluntário de 0 a 5 patinhas.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe4.png"
    <figcaption> Figura 11 - Página de visualização do perfil organizacional pelo usuário voluntário</figcaption>
</figure> 

## Página de edição de galeria
A tela Página de edição de galeria provem da Página de visualização do perfil organizacional pelo usuário voluntário, quando acionado o componente **Editar galeria**, tem como objetivo possibilitar a edição de imagens e informações da galeria, além disso o usuário organizacional pode criar uma nova ou até mesmo deletar uma galeria. Possui estrutura padrão com alteração na Header, contendo apenas logo do site, foto do usuário organizacional e botões de sair e editar, temos os seguintes componentes: 
- Componente de **Editar nome**, consiste em um botão que permite o usuário organizacional ao ser clicado, editar o nome da galeria;
- Componente de **Deletar galeria**, consiste em um botão que permite o usuário organizacional ao ser clicado deletar a galeria existente;
- Componente de **Adicionar imagem**, consiste em um botão que permite o usuário organizacional ao ser clicado selecionar uma imagem para adicionar a galeria;
- Componente de **Salvar**, consiste em um botão que permite o usuário organizacional ao ser clicado salvar a imagem selecionada no componente **Adicionar imagem**;
- Componente de **Legenda**, consiste em uma caixa de texto que permite o usuário organizacional criar legendas para as imagens;
- Componente **Imagem**, é a imagem escolhida pelo usuário organizacional e sua respectiva legenda; Dentro dela possuímos dois componentes:
  - Componente **Editar imagem**, na qual consiste em um botão que permite o usuário organizacional ao ser clicado editar imagem e legenda;
  - Componente **Deletar imagem**, na qual consiste em um botão que permite o usuário organizacional ao ser clicado deletar imagem e legenda;
- Componente de **Criar nova galeria**, consiste em um botão que permite o usuário organizacional ao ser clicado criar uma nova galeria.
  
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe6.png"
    <figcaption> Figura 12 - Página de edição da galeria de imagens do usuário organizacional</figcaption>
</figure> 

## Página de recuperação de senha
A tela Página de recuperação de senha provém da tela Página de login, quando o usuário tanto voluntário quanto organizacional esquecer a senha ele pode acionar o componente **Esqueci minha senha** (botão de esqueci minha senha) na tela de Página de login e ele será redirecionado até essa página, na qual tem estrutura padrão, exceto não possuir header e temos os seguintes componentes: 
- Componente de **E-mail**, o usuário deve digitar um e-mail na qual possa receber um código digitavel para efetuar a alteração de senha;
- Componente de **Enviar**, consiste em um botão que permite o usuário ao ser clicado enviar o e-mail para receber o código digitavel;
- Componente de **Código digitavel**, consiste em um código que será enviado para o e-mail digitado e irá  validar a troca de senhas do usuário;
- Componente de **Nova senha**, o usuário deve digitar a nova senha desejada conforme os padrões estabelecidos pelo site;
- Componente de **Confirmar senha**, o usuário deve digitar novamente a senha para que possa confirmar e verificar se a senha desejada está correta;
- Componente de **Concluir**, consiste em um botão que permite o usuário ao ser clicado concluir sua redefinição de senha;
- Componentede **Descartar**, consiste em um botão que permite o usuário ao ser clicado descartar a alteração de senha.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe9.png"
    <figcaption> Figura 13 - Página de recuperação de senha</figcaption>
</figure> 

## Página de cancelamento de perfil
A tela Página de cancelamento de perfil provém de duas telas Página de formulário de usuário voluntário e Página de formulário de usuário organizacional, ao acessar o botão Desativar Perfil, você será direcionado para essa tela, na qual tem como objetivo permitir que tanto usuário voluntário quanto o organizacional desative sua conta no site. Tem estrutura padrão, exceto não possuir header e temos os seguintes componentes: 
- Componentede **Motivo do cancelamento**, consiste em uma caixa de texto que pede ao usuário que nos fale o motivo da desativação;
- Componente **Cancelar perfil**, consiste em um botão que, quando clicado pelo usuário, confirma o cancelamento de sua conta no site.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe8.png"
    <figcaption> Figura 14 - Página com formulário de cancelamento de perfil</figcaption>
</figure> 

### Protótipo de baixa fidelidade

Protótipos de baixa fidelidade apresentam de forma simplificada o design da interface e o relacionamento entre suas páginas, permitindo evolução da proposta da solução. Neste projeto, os utilizaremos para apoiar a validação dos requisitos e efetuar mudanças dos mesmos, caso seja necessário, para menor impacto na codificação da aplicação.

## Página de login
A tela Página de login tem como objetivo possibilitar ao usuário a entrada na aplicação. Com base na estrutura padrão sem a Header, ela mostra a logo do site, seu nome e temos os seguintes componentes:
- Componente de **Usuário**, na qual permite ao usuário preencher a caixa de texto com seu email, para posteriormente conseguir acesso ao site;
- Componente de **Senha**, na qual permite ao usuário preencher a caixa de texto com sua senha, para juntamente com componente de **Usuário** e componente **Login**, conseguir entrar no site;
- Componente de **Login**, consiste em um botão que permite o usuário ao ser clicado entrar no site depois de preencher os componentes de **Usuário** e **Senha**;
- Componente de **Registre-se**, consiste em um botão que permite o usuário ao ser clicado ir para página de formulário de usuário voluntário para que possa efetuar seu cadastro no site;
- Componente **Esqueci minha senha**, consiste em um botão que permite o usuário ao ser clicado ir para página de recuperação de senha e recuperá-la;
- Componente **Sou empresa e quero me cadastrar**, consiste em um botão que permite o usuário ao ser clicado ir para página de formulário de usuário organizacional para que possa efetuar seu cadastro no site.

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
- Componente de **Enviar**, consiste em um botão que permite o usuário voluntário ao ser clicado, enviar a imagem escolhida para colocar no componente **Caixa imagem**;
- Componente de **Concluir**, consiste em um botão que permite o usuário voluntário ao ser clicado, concluir seu cadastro no site e ir para Página de login;
- Componente de **Descartar**, consiste em um botão que permite o usuário voluntário ao ser clicado, descartar as informações do formulário;
- Componente de **Desativar Perfil**, consiste em um botão que permite o usuário voluntário ao ser clicado, desativar sua conta. Este componente só ficará visível se já houver sido realizado um login a aplicação previamente, ou seja já possuir cadastro. 
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
- Componente de **Cidade**, na qual permite o usuário organizacional escolher uma cidade a partir de uma caixa de seleção;
- Componente de **Estado**, na qual permite o usuário organizacional escolher uma estado a partir de uma caixa de seleção;
- Componente de **Estabelecimento**, na qual o usuário organizacional pode escolher o tipo de estabelecimento (negócio) ao qual ele pertence a partir de uma caixa de seleção;
- Componente de **Horários**, consiste em textos de todos os dias da semana em sequência, seguidos por uma linha abaixo contendo caixas de texto que permitem ao usuário organizacional preencher seu horário de início e término de atendimento para cada dia da semana;
- Componente de **Conte-nos sobre você**, consiste em uma caixa de texto que permite o usuário organizacional escrever informações sobre seu estabelecimento;
- Componente de **Selecione uma foto para ilustrar seu perfil**, na qual permite que o usuário organizacional selecionar uma foto para colocar em seu perfil;
- Componente de **Preview**, permite ao usuário organizacional ver como sua foto ficará no perfil previamente;
- Componente de **Caixa imagem**, local de armazenamento da foto escolhida para o perfil;
- Componente de **Enviar**, consiste em um botão que permite o usuário organizacional ao ser clicado, enviar a imagem escolhida para colocar no componente **Caixa imagem**;
- Componente de **Concluir**, consiste em um botão que permite o usuário organizacional ao ser clicado, concluir seu cadastro no site e ir para Página de login;
- Componente de **Descartar**, consiste em um botão que permite o usuário organizacional ao ser clicado, descartar as informações do formulário;
- Componente de **Desativar Perfil**, consiste em um botão que permite o usuário organizacional ao ser clicado, desativar sua conta. Este componente só ficará visível se já houver sido realizado um login a aplicação previamente, ou seja já possuir cadastro. 
  
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe2.png"
    <figcaption> Figura 7 - Página com o formulário de informações do usuário organizacional</figcaption>
</figure> 

## Página de busca
A tela Página de busca tem como objetivo possibilitar ao usuário voluntário fazer buscas fixas através de uma caixa de seleção com temas de assuntos do site. No corpo da tela podemos verificar tais informações solicitadas, como na imagem abaixo, por exemplo, podemos ver a listagem de ONGs ou clínicas veterinárias, contendo nome do perfil organizacional, endereço físico, horário de funcionamento e sua avaliação. Com base na estrutura padrão temos como componente, um **Botão de informações sobre a busca**, na qual consiste em um botão ao ser clicado permite que o usuário voluntário seja encaminhado até a página com a informação escolhida.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe3.png"
    <figcaption> Figura 8 - Página de busca com opições pré-definidas</figcaption>
</figure> 

## Página de instruções de emergência
A tela Página de instruções de emergência tem como objetivo possibilitar ao usuário voluntário, ao clicar no botão emergência, na qual provem da estrutura básica header, encontrar informações que possam ser importantes e que possam ajudar o voluntário em situações dificeis com os animais encontrados. Com base na estrutura padrão, apenas com alteração na Header, trocando o botão de "emergência" por "pesquisa", temos como componentes uma caixa de seleção que indica motivos fixos das quais você possa estar precisando de ajuda e ao ser escolhida te mostra no corpo da página a informação selecionada.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe7.png"
    <figcaption> Figura 9 - Página de instruções para diversas situações de emergência</figcaption>
</figure> 

## Página de visualização do perfil organizacional
A tela Página de visualização do perfil organizacional, tem como objetivo mostrar ao usuário organizacional as respectivas informações do seu estabelecimento. Possui estrutura padrão com alteração na Header, contendo apenas logo do site, foto do usuário organizacional e botões de sair e editar, nessa pagina temos a seguinte divisão:

-Caso o usuário organizacional queira editar suas informações de texto e imagem de perfil, será possível clicando no botão editar da header, localizado ao lado da foto de perfil e do botão sair. Nesse caso ele será direcionado para Página de formulário de usuário organizacional.

-Caso o usuário organizacional queira editar suas fotos e informações da galeria, será possivel através do componente **Editar galeria**, que consiste no botão editar localizado no corpo da página. Você será redirecionaod até a Página de edição de galeria.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe5.png"
    <figcaption> Figura 10 - Página de visualização do perfil organizacional pelo próprio</figcaption>
</figure> 

## Página de visualização do perfil organizacional pelo usuário voluntário
A tela Página de visualização do perfil organizacional, provem da Página de busca, ou seja quando pesquisado alguma Ong ou clínica e clicado no componente **Botão de informações sobre a busca** você será redirecionado até essa tela, na qual tem como objetivo fornecer informações completas ao usuário voluntário sobre o estabelecimento selecionado. No corpo da tela temos a foto do estabelecimento, biografia, horário de funcionamento, telefone, site, endereço, galeria de fotos e avaliação. Com base na estrutura padrão, temos como componentes:
- Componente de **botão de like**, na qual consiste no botão like e ao ser clicado irá favoritar o estabelecimento; 
- Componente de **avalie** que consiste em um botão que permite a avaliação do estabelecimento pelo usuário voluntário de 0 a 5 patinhas.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe4.png"
    <figcaption> Figura 11 - Página de visualização do perfil organizacional pelo usuário voluntário</figcaption>
</figure> 

## Página de edição de galeria
A tela Página de edição de galeria provem da Página de visualização do perfil organizacional pelo usuário voluntário, quando acionado o componente **Editar galeria**, tem como objetivo possibilitar a edição de imagens e informações da galeria, além disso o usuário organizacional pode criar uma nova ou até mesmo deletar uma galeria. Possui estrutura padrão com alteração na Header, contendo apenas logo do site, foto do usuário organizacional e botões de sair e editar, temos os seguintes componentes: 
- Componente de **Editar nome**, consiste em um botão que permite o usuário organizacional ao ser clicado, editar o nome da galeria;
- Componente de **Deletar galeria**, consiste em um botão que permite o usuário organizacional ao ser clicado deletar a galeria existente;
- Componente de **Adicionar imagem**, consiste em um botão que permite o usuário organizacional ao ser clicado selecionar uma imagem para adicionar a galeria;
- Componente de **Salvar**, consiste em um botão que permite o usuário organizacional ao ser clicado salvar a imagem selecionada no componente **Adicionar imagem**;
- Componente de **Legenda**, consiste em uma caixa de texto que permite o usuário organizacional criar legendas para as imagens;
- Componente **Imagem**, é a imagem escolhida pelo usuário organizacional e sua respectiva legenda; Dentro dela possuímos dois componentes:
  - Componente **Editar imagem**, na qual consiste em um botão que permite o usuário organizacional ao ser clicado editar imagem e legenda;
  - Componente **Deletar imagem**, na qual consiste em um botão que permite o usuário organizacional ao ser clicado deletar imagem e legenda;
- Componente de **Criar nova galeria**, consiste em um botão que permite o usuário organizacional ao ser clicado criar uma nova galeria.
  
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe6.png"
    <figcaption> Figura 12 - Página de edição da galeria de imagens do usuário organizacional</figcaption>
</figure> 

## Página de recuperação de senha
A tela Página de recuperação de senha provém da tela Página de login, quando o usuário tanto voluntário quanto organizacional esquecer a senha ele pode acionar o componente **Esqueci minha senha** (botão de esqueci minha senha) na tela de Página de login e ele será redirecionado até essa página, na qual tem estrutura padrão, exceto não possuir header e temos os seguintes componentes: 
- Componente de **E-mail**, o usuário deve digitar um e-mail na qual possa receber um código digitavel para efetuar a alteração de senha;
- Componente de **Enviar**, consiste em um botão que permite o usuário ao ser clicado enviar o e-mail para receber o código digitavel;
- Componente de **Código digitavel**, consiste em um código que será enviado para o e-mail digitado e irá  validar a troca de senhas do usuário;
- Componente de **Nova senha**, o usuário deve digitar a nova senha desejada conforme os padrões estabelecidos pelo site;
- Componente de **Confirmar senha**, o usuário deve digitar novamente a senha para que possa confirmar e verificar se a senha desejada está correta;
- Componente de **Concluir**, consiste em um botão que permite o usuário ao ser clicado concluir sua redefinição de senha;
- Componentede **Descartar**, consiste em um botão que permite o usuário ao ser clicado descartar a alteração de senha.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe9.png"
    <figcaption> Figura 13 - Página de recuperação de senha</figcaption>
</figure> 

## Página de cancelamento de perfil
A tela Página de cancelamento de perfil provém de duas telas Página de formulário de usuário voluntário e Página de formulário de usuário organizacional, ao acessar o botão Desativar Perfil, você será direcionado para essa tela, na qual tem como objetivo permitir que tanto usuário voluntário quanto o organizacional desative sua conta no site. Tem estrutura padrão, exceto não possuir header e temos os seguintes componentes: 
- Componentede **Motivo do cancelamento**, consiste em uma caixa de texto que pede ao usuário que nos fale o motivo da desativação;
- Componente **Cancelar perfil**, consiste em um botão que, quando clicado pelo usuário, confirma o cancelamento de sua conta no site.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/Wireframe8.png"
    <figcaption> Figura 14 - Página com formulário de cancelamento de perfil</figcaption>
</figure> 
