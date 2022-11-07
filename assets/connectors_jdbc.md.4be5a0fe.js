import{_ as s,c as a,o as n,a as l}from"./app.f33a4d5b.js";const F=JSON.parse('{"title":"JDBC Connector","description":"","frontmatter":{},"headers":[{"level":2,"title":"Operations","slug":"operations","link":"#operations","children":[{"level":3,"title":"ExecSQL:","slug":"execsql","link":"#execsql","children":[]},{"level":3,"title":"Validate","slug":"validate","link":"#validate","children":[]}]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"connectors/jdbc.md"}'),t={name:"connectors/jdbc.md"},e=l(`<h1 id="jdbc-connector" tabindex="-1">JDBC Connector <a class="header-anchor" href="#jdbc-connector" aria-hidden="true">#</a></h1><p>The JDBC connector provides methods to allow you to execute SQL queries on a database and optionally validate the output of those queries from IdMUnit tests.</p><h2 id="operations" tabindex="-1">Operations <a class="header-anchor" href="#operations" aria-hidden="true">#</a></h2><h3 id="execsql" tabindex="-1">ExecSQL: <a class="header-anchor" href="#execsql" aria-hidden="true">#</a></h3><p>Executes the specified query.</p><h4 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>sql</td><td>Query to execute</td></tr></tbody></table><h3 id="validate" tabindex="-1">Validate <a class="header-anchor" href="#validate" aria-hidden="true">#</a></h3><p>Validates the output from executing the specified query.</p><h4 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>sql</td><td>Query to execute</td></tr><tr><td>[column names]</td><td>Column values to be compared</td></tr></tbody></table><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>To configure this connector you need to specify a server, suer, password and jdbc-driver-class:</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">&lt;connection&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;name&gt;</span><span style="color:#D8DEE9FF;">JDBC</span><span style="color:#81A1C1;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;description&gt;</span><span style="color:#D8DEE9FF;">Connector to a database using a JDBC driver</span><span style="color:#81A1C1;">&lt;/description&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;type&gt;</span><span style="color:#D8DEE9FF;">com.trivir.idmunit.connector.JDBC</span><span style="color:#81A1C1;">&lt;/type&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;server&gt;</span><span style="color:#D8DEE9FF;">dbc:mysql://172.17.2.140:3306/dbo</span><span style="color:#81A1C1;">&lt;/server&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;user&gt;</span><span style="color:#D8DEE9FF;">idmuser</span><span style="color:#81A1C1;">&lt;/user&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;password&gt;</span><span style="color:#D8DEE9FF;">B2vPD2UsfKc=</span><span style="color:#81A1C1;">&lt;/password&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;jdbc-driver-class&gt;</span><span style="color:#D8DEE9FF;">com.mysql.jdbc.Driver</span><span style="color:#81A1C1;">&lt;/jdbc-driver-class&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;multiplier/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;substitutions/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;data-injections/&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/connection&gt;</span></span>
<span class="line"></span></code></pre></div><p>Here is an example with a MS SQL Server JDBC driver:</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">&lt;connection&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;name&gt;</span><span style="color:#D8DEE9FF;">JDBC SQL Server</span><span style="color:#81A1C1;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;description&gt;</span><span style="color:#D8DEE9FF;">Connector to a database using a MSSQL JDBC driver</span><span style="color:#81A1C1;">&lt;/description&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;type&gt;</span><span style="color:#D8DEE9FF;">com.trivir.idmunit.connector.JDBC</span><span style="color:#81A1C1;">&lt;/type&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;server&gt;</span><span style="color:#D8DEE9FF;">jdbc:sqlserver://172.17.2.20:1433;databaseName=SQLDBName;user=sa&quot;;</span><span style="color:#81A1C1;">&lt;/server&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;user&gt;</span><span style="color:#D8DEE9FF;">sa</span><span style="color:#81A1C1;">&lt;/user&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;password&gt;</span><span style="color:#D8DEE9FF;">dMGOmoA9SwlloxUZ0n+ffQ==</span><span style="color:#81A1C1;">&lt;/password&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;jdbc-driver-class&gt;</span><span style="color:#D8DEE9FF;">com.microsoft.sqlserver.jdbc.SQLServerDriver</span><span style="color:#81A1C1;">&lt;/jdbc-driver-class&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;multiplier/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;substitutions/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;data-injections/&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/connection&gt;</span></span>
<span class="line"></span></code></pre></div><p>Here is an example with an Oracle database:</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">&lt;connection&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;name&gt;</span><span style="color:#D8DEE9FF;">JDBC Oracle Server</span><span style="color:#81A1C1;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;description&gt;</span><span style="color:#D8DEE9FF;">Connector to a database using Oracle</span><span style="color:#81A1C1;">&lt;/description&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;type&gt;</span><span style="color:#D8DEE9FF;">com.trivir.idmunit.connector.JDBC</span><span style="color:#81A1C1;">&lt;/type&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;server&gt;</span><span style="color:#D8DEE9FF;">&quot;jdbc:oracle:thin:@172.17.2.20:1521/xe&quot;;</span><span style="color:#81A1C1;">&lt;/server&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">&lt;!-- above line formatted for SID, line below is formatted for using Service --&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">&lt;!--&lt;server&gt;jdbc:oracle:thin:@//172.17.2.20:1521/xe&quot;;&lt;/server&gt;--&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;user&gt;</span><span style="color:#D8DEE9FF;">sa</span><span style="color:#81A1C1;">&lt;/user&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;password&gt;</span><span style="color:#D8DEE9FF;">dMGOmoA9SwlloxUZ0n+ffQ==</span><span style="color:#81A1C1;">&lt;/password&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;jdbc-driver-class&gt;</span><span style="color:#D8DEE9FF;">com.microsoft.sqlserver.jdbc.SQLServerDriver</span><span style="color:#81A1C1;">&lt;/jdbc-driver-class&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;multiplier/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;substitutions/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;data-injections/&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/connection&gt;</span></span>
<span class="line"></span></code></pre></div>`,18),o=[e];function p(r,c,i,d,y,D){return n(),a("div",null,o)}const g=s(t,[["render",p]]);export{F as __pageData,g as default};
