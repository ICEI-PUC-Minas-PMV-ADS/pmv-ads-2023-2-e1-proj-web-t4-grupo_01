# Plano de Testes de Software

Testes do Projeto de Interface e Programação de Funcionalidades

Os testes funcionais a serem realizados na aplicação são descritos a seguir:

1
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o cadastramento e os links da página de Login</td>
  <td>
   <ul>
    <li>RF-00:	O site deve permitir ao usuário cadastrar uma conta.</li>
    <li>RF-00:	O site deve permitir ao usuário cadastrar uma conta e assim ele será direcionado a página de busca.</li>
   <li>RF-00:	O site deve permitir apertar um botão que leva para a página formulário de novos registros, como: foto, email e senha.</li>
   </ul>
  </td>
  <td>Verificar se os links e o botão de cadastramento está levando a outra página</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador.</li>
    <li>Colocar o endereço do site.</li>
    <li>Será visualizado a página de Login.</li>
    <li>Clicar nas funções para ver se funciona.</li>
   </ol>
   </td>
  <td>Todos os links da página de Login devem encaminhar os usuários para as páginas como informado.</td>
  <td>Pedro</td>
 </tr>
</table>

2
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar para onde vai a página esqueceu a senha</td>
  <td>
   <ul>
    <li>RF-00:	O site deve permitir ao usuário cadastrar uma conta.</li>
    <li>RF-00:	O site deve permitir ao usuário confirmar e assim ir pra página de busca.</li>
   <li>RF-00:	O site deve fazer com que receba um código</li>
   </ul>
  </td>
  <td>Verificar o recebimento do código, as novas senhas, e os botões de "Confirmar" e "Descartar" (Ambos não estão funcionando, nem o recebimento do código)</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador (Firefox, Chrome e Edge).</li>
    <li>Colocar o endereço nesses navegadores descritos</li>
   </ol>
   </td>
  <td>Todos os botôes devem direcionar as páginas (Não criadas ainda).</td>
  <td>Pedro</td>
 </tr>
</table>

3
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar as funcionalidades da página de "formulário de usuário"</td>
  <td>
   <ul>
    <li>RF-02:	O site deve permitir ao usuário cadastrar uma conta no botão "confirmar".</li>
    <li>RF-02:	O site deve permitir ao usuário colocar email, senha e confirmar e assim ir pra página de usuário.</li>
   <li>RF-02:	O site deve fazer com que ele poste uma foto dele e enviar (o botão enviar não está funcionando, mas redireciona a uma página de error)</li>
    <li>RF-02:	O site deve fazer com que o usuário clique em "concluir" e seja redirecionado a página de buscas (QUE A MESMA NÃO ESTÁ FEITA)</li>
   </ul>
  </td>
  <td>Verificar se as caixas de preenchimento estão funcionado, e os botões (ainda sem funcionalidade)</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador (Firefox, Chrome e Edge).</li>
    <li>Colocar o endereço nesses navegadores descritos</li>
    <li>Será visualizado a página de Recuperar Senha.</li>
    <li>Clicar nas funções para ver se funciona.</li>
   </ol>
   </td>
  <td>Todos os links da página de "formulário de usuário" devem encaminhar os usuários para as páginas como informado. (Nessa página em questão não está)</td>
  <td>Leticia</td>
 </tr>
</table>

4
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar as funcionalidades da página de "formulário organizacional"</td>
  <td>
   <ul>
    <li>RF-03: Ao clicar no botão: sou empresa (QUE SERÁ FEITO EM JAVASCRITP, ELE É REDIRECIONADO A PÁGINA DE FORMULÁRIO ORGNANIZACIONAL</li>
    <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta no botão "confirmar".</li>
    <li>RF-03:	O site deve permitir ao usuário colocar Nome, endereço de e-mail, cidade de residência, foto de perfil e autobiografia para usuários ‘voluntários’ e nome, CNPJ, endereço de e-mail, endereço de funcionamento, telefone, horário de funcionamento, site da organização, foto de perfil e autobiografia e confirmar e assim ir pra página de usuário.</li>
    <li>RNF-03: Solicitar das organizações/clínicas o CNPJ durante o preenchimento das informações no app</li>
    <li>RNF-04: Solicitar das organizações/clínicas o link para o site delas no preenchimento das informações no app. </li>
   <li>RF-02:	O site deve fazer com que ele poste uma foto dele e enviar (o botão enviar não está funcionando, mas redireciona a uma página de error)</li>
   </ul>
  </td>
  <td>Verificar se os botões e as caixas estão funcionando corretamente (estão sem funcionalidade, mas estão na página)</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador (Firefox, Chrome e Edge).</li>
    <li>Colocar o endereço nesses navegadores descritos</li>
    <li>Será visualizado na primeira pág de Login para cadastrar, a partir de lá, da para ir a esta página</li>
    <li>Clicar nas funções para ver se funciona.</li>
   </ol>
   </td>
  <td>Todos os links da página de "formulário de usuário" devem encaminhar os usuários para as páginas como informado. (NADA ESTÁ FUNCIONANDO)</td>
  <td>Leticia</td>
 </tr>
</table>

5
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar a página "cancelamento de usuário</td>
  <td>
   <ul>
    <li>RF-07:	O site deve permitir ao usuário justificar seu cancelamento.</li>
    <li>RF-07:	O site deve permitir ao usuário </li>
   </ul>
  </td>
  <td>Verificar se a caixa de preenchimento está funcionando e está, e o botão</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador.</li>
    <li>Colocar o endereço do site.</li>
    <li>Será visualizado a página de Cancelamento.</li>
   </ol>
   </td>
  <td>O link da página de cancelamento devem encaminhar os usuários para a página de agradecimento.</td>
  <td>Quezia</td>
 </tr>
</table>


