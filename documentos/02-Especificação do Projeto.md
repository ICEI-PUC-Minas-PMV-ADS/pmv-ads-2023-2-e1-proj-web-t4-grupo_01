# Especificação do Projeto

## Perfis de Usuários

Foco inicial do projeto é atender a dois tipos de usuário, estes sendo o indivíduo voluntário que identificou e/ou resgatou o animal e as organizações que oferecem atendimento. 

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil de voluntário (nome temporário)  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Perfil destinado ao usuário comum que entra no app em busca de informações sobre como interagir com o animal resgatado, melhores práticas, cuidados necessários, apoio veterinário voluntário ou pago e sobre abrigo para o mesmo.  </td>
</tr> 
<tr>
<td><b>Necessidades</b></td>
<td>Requer do usuário confirmação de e-mail e telefone para contato, tendo opção de personalização com foto de perfil e descrição estilo “biografia” (sobre) no perfil. 
Oferecer informações para atendimento de emergência, listagem de clínicas próximas, abrigos próximos, datas e preço dos programas de vacinação/castração em forma de lista e contatos de emergência para agências reguladoras facilitando denuncia de maus tratos.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Organizacional (nome temporário)  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Perfil destinado a organizações de suporte que oferecem serviços relacionados ao resgate, cuidado, adoção e relocação de animais em situação de abandono.   </td>
</tr> 
<tr>
<td><b>Necessidades</b></td>
<td>Requer do usuário confirmação de e-mail, endereço, telefone para contato e horário de funcionamento tendo opção de personalização com foto de perfil e descrição estilo “biografia” (sobre) no perfil, além de (galeria) para fotos da sede de atendimento e (galeria) dos animais para adoção em abrigo no momento. 
Também requer informações sobre preço e data de programas de vacinação/castração caso a organização em questão ofereça estes serviços. 
Oferecer formas de contato com os usuários voluntários e material informativo sobre seus projetos, serviços e instalações, além de permitir feedback sobre/para o app que possa beneficiar os perfis. 
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO...    | QUERO/PRECISO ...  |PARA ...                  |
|--------------------|---------------------------|----------------------------------|
| Usuário organizacional              | Formulário de cadastro organizacional                       | Para divulgar informações referentes a organização que represento.                             |
| Usuário voluntário                 | Formulário de cadastro de ‘voluntários’                        | Para ter acesso às informações dos perfis organizacionais.                               |
| Usuário voluntário                | Informações sobre como resgatar animais abandonados                        | Para poder resgatar/ajudar o animal em questão.                               |
| Usuário voluntário                | Informações sobre programa de castração/vacinação                        | Para assegurar cuidado necessário para meu animal.                               |
| Usuário organizacional                 | Espaço para divulgar campanhas de vacinação/castração                        | Para divulgar horário, local e preço da campanha de vacinação/castração.                              |
| Usuário organizacional                 | Espaço para divulgar animais disponíveis para adoção                        | Para divulgar animais disponíveis para adoção.                               |
| Usuário voluntário                | Botão de emergência                         | Para saber o que fazer em situações críticas.                               |
| Usuário organizacional                 | Página de login (verificação de senha, usuário)                        | Para me permitir acesso ao perfil organizacional.                               |
| Usuário voluntário                  | Página de login (verificação de senha, usuário)                        | Para me permitir acesso ao perfil ‘voluntário’.                              |
| Usuário organizacional                 | Página de perfil                       | Para acessar/visualizar o perfil organizacional.                               |
| Usuário voluntário                 | Página de perfil                       | Para acessar/visualizar o perfil ‘voluntário’.                               |
| Usuário voluntário                | Página de busca                        | Para achar informações sobre abrigos/clínicas/ONGs/serviços relacionados ao animal em questão.                               |
| Usuário organizacional                 | Formulário da página de galeria para fotos                        | Para acrescentar ou remover as fotos para divulgação do espaço físico/animal para adoção/produtos e serviços/cartaz de campanha.                               |
| Usuário voluntário                | Uma ou mais forma de interagir com os perfis organizacionais.                        | Para facilitar a localização de informações dos perfis organizacionais favoritos do usuário voluntário e/ou ajudar no posicionamento dentro do mecanismo de busca dos perfis organizacionais do app por maio de avaliação do serviço prestado.                              |




## Requisitos do Projeto


### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-00  | Página de login universal solicitando e-mail cadastrado e senha para permitir acesso, além de botão que leva para a página formulário de registro de novos usuários.                    | Alta   | 
| RF- 01   |  Página formulário de cadastro de usuário, solicitando as seguintes informações: Nome, endereço de e-mail, cidade de residência, foto de perfil e autobiografia para usuários ‘voluntários’ e nome, CNPJ, endereço de e-mail, endereço de funcionamento, telefone, horário de funcionamento, site da organização, foto de perfil e autobiografia.                   | Alta   |
| RF- 02   |  Página de perfil usuário ‘voluntário’ com a foto de perfil no topo, nome, endereço de e-mail, descrição estilo autobiografia, cidade de residência, botão busca, botão emergência.                    | Alta   |
| RF- 03   |  Página de perfil usuário organizacional com nome, CNPJ, endereço de e-mail, endereço de funcionamento, telefone, horário de funcionamento, site da organização, foto de perfil e autobiografia.                   | Alta   |
| RF- 04   |  Botão que leva para página com informações de resgate/cuidados dos animais, mostrar como ajudar de formas básicas o animal necessitado                     | Média   |
| RF- 05   |  Página com informações sobre cuidados em situações de emergência, presente em todas as páginas exceto login, formulários e a página de informações de emergência facilitando o acesso ao mesmo.                     | Média   |
| RF- 06   |  Botão que leva para página com ferramenta de busca, permitindo busca selecionando opções de uma lista pré-definida, acessível de todas as páginas exceto página de login e formulários de cadastro.                  | Alta   |
| RF- 07   |  Botão para logout                    | Média   |


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF- 00 |  Permitir postagem de fotos dos serviços/animais/campanhas prestados pelo usuário organizacional.                     | Alta   | 
| RNF- 01 |  Permitir adicionar ou favoritar os perfis organizacionais que prestaram/prestam serviços de boa qualidade.           | Média  | 
| RNF- 02 |  Permitir avaliar a qualidade do serviço prestado pelos perfis organizacionais.                                       | Média  | 
| RNF- 03 |  Solicitar das organizações/clínicas o CNPJ durante o preenchimento das informações no app.                           | Baixo  | 
| RNF- 04 |  Solicitar das organizações/clínicas o link para o site delas no preenchimento das informações no app.                | Baixo  | 
| RNF- 05 |  Ferramenta para mudar o idioma padrão de interação com o app.                                                        | Baixo  | 
| RNF- 06 |  Ferramenta para mudar as cores de fundo/texto do app entre modo luminoso e modo escuro.                              | Baixo  | 
| RNF- 07 |  Definir uma barra Header com os botões: Home (levando para o perfil), busca, emergência e logout                     | Alta   | 




**Prioridade: Alta / Média / Baixa. 

