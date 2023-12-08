# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

### Página de login
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/index1.png"
    <figcaption>Figura 26 - Página de login</figcaption>
</figure>

#### Requisito atendido

Página inicial permite login, registro de novos usuários e redireciona para a página de recuperação de senha.
Atende as funcionalidades:
RF- 00
RF- 18

#### Artefatos da funcionalidade

A tela Página de login tem como objetivo possibilitar ao usuário a entrada na aplicação. Com base na estrutura padrão sem a Header, ela mostra a logo do site, seu nome e temos os seguintes componentes:
- Componente de **Usuário**, na qual permite ao usuário preencher a caixa de texto com seu email, para posteriormente conseguir acesso ao site;
- Componente de **Senha**, na qual permite ao usuário preencher a caixa de texto com sua senha, para juntamente com componente de **Usuário** e componente **Login**, conseguir entrar no site;
- Componente de **Login**, consiste em um botão que permite o usuário ao ser clicado entrar no site depois de preencher os componentes de **Usuário** e **Senha**;
- Componente de **Registre-se**, consiste em um botão que permite o usuário ao ser clicado ir para página de formulário de usuário voluntário para que possa efetuar seu cadastro no site;
- Componente **Esqueci minha senha**, consiste em um botão que permite o usuário ao ser clicado ir para página de recuperação de senha e recuperá-la;


#### Estrutura de Dados

Página composta por um arquivo HTML (Index.html) e um arquivo Style.CSS (style.css)


#### Instruções de acesso

Pode ser encontrada em no repositório Github no diretório:
<a href="https://htmlpreview.github.io/?https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/codigo-fonte/Index.html">codigo-fonte/Index.HTML</a>

#### Responsável

Pedro de Oliveira Rosas

### Página de formulário de usuário voluntário
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/formusuario1.png"
    <figcaption>Figura 27 - Página de formulário de usuário voluntário</figcaption>
</figure>

#### Requisito atendido

Página inicial permite ao novo usuário ou ao usuário que deseja editar suas informações a fazer isso ou ir para a página de cancelamento de cadastro.
Atende as funcionalidades:
RF- 01
RF- 07
RF- 20


#### Artefatos da funcionalidade

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


#### Estrutura de Dados

Página composta por um arquivo HTML (FormularioUsuario.html) e um arquivo Style.CSS (style.css)


#### Instruções de acesso

Pode ser encontrada em no repositório Github no diretório:
<a href="https://htmlpreview.github.io/?https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/codigo-fonte/FormularioUsuario.html">codigo-fonte/FormularioUsuario.HTML</a>

#### Responsável

Letícia Mateus

### Página de recuperação de senha
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/recuperasenha1.png"
    <figcaption>Figura 28 - Página de recuperação de senha</figcaption>
</figure>

#### Requisito atendido

Página inicial permite ao usuário a recuperar sua senha.
Atende as funcionalidades:
RF- 17


#### Artefatos da funcionalidade

A tela Página de recuperação de senha provém da tela Página de login, quando o usuário tanto voluntário quanto organizacional esquecer a senha ele pode acionar o componente **Esqueci minha senha** (botão de esqueci minha senha) na tela de Página de login e ele será redirecionado até essa página, na qual tem estrutura padrão, exceto não possuir header e temos os seguintes componentes: 
- Componente de **E-mail**, o usuário deve digitar um e-mail na qual possa receber um código digitavel para efetuar a alteração de senha;
- Componente de **Enviar**, consiste em um botão que permite o usuário ao ser clicado enviar o e-mail para receber o código digitavel;
- Componente de **Código digitavel**, consiste em um código que será enviado para o e-mail digitado e irá  validar a troca de senhas do usuário;
- Componente de **Nova senha**, o usuário deve digitar a nova senha desejada conforme os padrões estabelecidos pelo site;
- Componente de **Confirmar senha**, o usuário deve digitar novamente a senha para que possa confirmar e verificar se a senha desejada está correta;
- Componente de **Concluir**, consiste em um botão que permite o usuário ao ser clicado concluir sua redefinição de senha;
- Componentede **Descartar**, consiste em um botão que permite o usuário ao ser clicado descartar a alteração de senha.


#### Estrutura de Dados

Página composta por um arquivo HTML (Recuperasenha.html) e um arquivo Style.CSS (style.css)


#### Instruções de acesso

Pode ser encontrada em no repositório Github no diretório:
<a href="https://htmlpreview.github.io/?https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/codigo-fonte/Recuperarsenha.html">codigo-fonte/Recuperarsenha.HTML</a>

#### Responsável

Marcus Vinicius

### Página de cancelamento de cadastro
<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/documentos/img/cancela1.png"
    <figcaption>Figura 29 - Página de cancelamento de cadastro</figcaption>
</figure>

#### Requisito atendido

Página inicial permite ao usuário cancelar seu cadastro.
Atende as funcionalidades:
RF- 19

#### Artefatos da funcionalidade

A tela Página de cancelamento de perfil provém de duas telas Página de formulário de usuário voluntário e Página de formulário de usuário organizacional, ao acessar o botão Desativar Perfil, você será direcionado para essa tela, na qual tem como objetivo permitir que tanto usuário voluntário quanto o organizacional desative sua conta no site. Tem estrutura padrão, exceto não possuir header e temos os seguintes componentes: 
- Componente de **Motivo do cancelamento**, consiste em uma caixa de texto que pede ao usuário que nos fale o motivo da desativação;
- Componente **Cancelar perfil**, consiste em um botão que, quando clicado pelo usuário, confirma o cancelamento de sua conta no site.

#### Estrutura de Dados

Página composta por um arquivo HTML (Cancelamento.html) e um arquivo Style.CSS (style.css)


#### Instruções de acesso

Pode ser encontrada em no repositório Github no diretório:
<a href="https://htmlpreview.github.io/?https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t4-grupo_01/blob/main/codigo-fonte/Cancelamento.html">codigo-fonte/Cancelamento.HTML</a>

#### Responsável

Quezia Emilly



