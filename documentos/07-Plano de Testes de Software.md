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
  <td>Verificar se os links e o botão de cadastramento está levando a outra página.</td>
  <td>
   <ol>
    <li>Acessar o link em qualquer navegador.</li>
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
   <li>RF-00:	O site deve fazer com que receba um código.</li>
   </ul>
  </td>
  <td>Verificar o recebimento do código, as novas senhas, e os botões de "Confirmar" e "Descartar".</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador (Firefox, Chrome e Edge).</li>
    <li>Colocar o endereço nesses navegadores descritos.</li>
   </ol>
   </td>
  <td>Todos os botôes devem direcionar as páginas.</td>
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
    <li>RF-02:	O site deve permitir ao usuário colocar e-mail, senha e confirmar e assim ir pra página de usuário.</li>
   <li>RF-02:	O site deve fazer com que ele poste uma foto dele e enviar (o botão enviar não está funcionando, mas redireciona a uma página de error).</li>
    <li>RF-02:	O site deve fazer com que o usuário clique em "concluir" e seja redirecionado a página de buscas.</li>
   </ul>
  </td>
  <td>Verificar se as caixas de preenchimento estão funcionado, e os botões.</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador (Firefox, Chrome e Edge).</li>
    <li>Colocar o endereço nesses navegadores descritos</li>
    <li>Será visualizado a página de Recuperar Senha.</li>
    <li>Clicar nas funções para ver se funciona.</li>
   </ol>
   </td>
  <td>Todos os links da página de "formulário de usuário" devem encaminhar os usuários para as páginas como informado.</td>
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
    <li>RF-03: Ao clicar no botão: sou empresa (QUE SERÁ FEITO EM JAVASCRITP, ELE É REDIRECIONADO A PÁGINA DE FORMULÁRIO ORGNANIZACIONAL)</li>
    <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta no botão "confirmar".</li>
    <li>RF-03:	O site deve permitir ao usuário colocar Nome, endereço de e-mail, cidade de residência, foto de perfil e autobiografia para usuários ‘voluntários’ e nome, CNPJ, endereço de e-mail, endereço de funcionamento, telefone, horário de funcionamento, site da organização, foto de perfil e autobiografia e confirmar e assim ir pra página de usuário.</li>
    <li>RNF-03: Solicitar das organizações/clínicas o CNPJ durante o preenchimento das informações no app.</li>
    <li>RNF-04: Solicitar das organizações/clínicas o link para o site delas no preenchimento das informações no app. </li>
   <li>RF-02:	O site deve fazer com que ele poste uma foto dele e enviar.</li>
   </ul>
  </td>
  <td>Verificar se os botões e as caixas estão funcionando corretamente.</td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador (Firefox, Chrome e Edge).</li>
    <li>Colocar o endereço nesses navegadores descritos.</li>
    <li>Será visualizado na primeira pág de Login para cadastrar, a partir de lá, da para ir a esta página.</li>
    <li>Clicar nas funções para ver se funciona.</li>
   </ol>
   </td>
  <td>Todos os links da página de "formulário de usuário" devem encaminhar os usuários para as páginas como informado.</td>
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
   </ul>
  </td>
  <td>Verificar se a caixa de preenchimento está funcionando e está, e o botão</td>
  <td>
   <ol>
    <li>Acessar o link em qualquer navegador.</li>
    <li>Colocar o endereço do site.</li>
    <li>Será visualizado a página de Cancelamento.</li>
   </ol>
   </td>
  <td>O link da página de cancelamento devem encaminhar os usuários para a página de agradecimento.</td>
  <td>Quezia</td>
 </tr>
</table>

6
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
  <td>CT-06: Verificar as funcionalidades da página de "Emergência"</td>
  <td>
   <ul>
    <li>RF-05: O site deve conter informações sobre cuidados em situações de emergência que tentem ajudar o usuário. </li>
    <li>RF-06: O site deve conter botão para ir até página de busca. </li>
    <li>RF-07: O site deve conter botão para logout.  </li>
   </ul>
  </td>
  <td>Verificar se existe os botões e se eles funcionam, além de verificar se as informações são validas e informativas. </td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador.</li>
    <li>Colocar o endereço do site.</li>
    <li>Será visualizado a página de Emergência. </li>
    <li>Clicar nas funções para ver se funciona.  </li>
   </ol>
   </td>
  <td>Todos os links da página de "emergência" devem encaminhar os usuários para as páginas como informado. </td>
  <td>Quezia</td>
 </tr>
</table>

7
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
  <td>CT-07: Verificar as funcionalidades da página de "Edição de Galeria " </td>
  <td>
   <ul>
    <li>RF-08: Permitir postagem e edição de fotos.  </li>
    <li>RF-08: Permitir a adição de uma nova galeria.  </li>
    <li>RF-15: Conter a header com as informações padrões.  </li>
   </ul>
  </td>
  <td>Verificar se existe os botões e se eles funcionam, além de verificar a capacidade do site de envio de fotos e criação de novas galerias.  </td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador.</li>
    <li>Colocar o endereço do site.</li>
    <li>Será visualizado a página de Edição de Galeria. </li>
    <li>Clicar nas funções para ver se funciona.  </li>
   </ol>
   </td>
  <td>Todos os botões e funções descritas acima funcionar dentro da página de edição de galeria. </td>
  <td>Marcus</td>
 </tr>
</table>

8
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
  <td>CT-08: Verificar as funcionalidades da página de "Busca"  </td>
  <td>
   <ul>
    <li>RF-04: Permitir que usuário use botão que o leve para página com informações de resgate/cuidados dos animais.  </li>
    <li>RF-06: Permitir que o usuário selecione o que deseja buscar.  </li>
   </ul>
  </td>
  <td>Verificar se existe os botões e se eles funcionam. </td>
  <td>
   <ol>
    <li>Acessar o link em qualqer navegador.</li>
    <li>Colocar o endereço nesses navegadores descritos.</li>
    <li>Será visualizado a página de Busca Clicar nas funções para ver se funciona.  </li>
   </ol>
   </td>
  <td>Todos os botões e funções descritas acima funcionar dentro da página de edição de galeria.  </td>
  <td>Pedro</td>
 </tr>
</table>
