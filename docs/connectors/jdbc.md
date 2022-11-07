# JDBC Connector

The JDBC connector provides methods to allow you to execute SQL queries on a database and optionally validate the output of those queries from IdMUnit tests.

## Operations

### ExecSQL:

Executes the specified query.

#### Params

| Name           | Description                  |
| -------------- | ---------------------------- |
| sql            | Query to execute             |

### Validate

Validates the output from executing the specified query.

#### Params

| Name           | Description                  |
| -------------- | ---------------------------- |
| sql            | Query to execute             |
| [column names] | Column values to be compared |

## Configuration

To configure this connector you need to specify a server, suer, password and jdbc-driver-class:

```xml
<connection>
    <name>JDBC</name>
    <description>Connector to a database using a JDBC driver</description>
    <type>com.trivir.idmunit.connector.JDBC</type>
    <server>dbc:mysql://172.17.2.140:3306/dbo</server>
    <user>idmuser</user>
    <password>B2vPD2UsfKc=</password>
    <jdbc-driver-class>com.mysql.jdbc.Driver</jdbc-driver-class>
    <multiplier/>
    <substitutions/>
    <data-injections/>
</connection>
```

Here is an example with a MS SQL Server JDBC driver:

```xml
<connection>
    <name>JDBC SQL Server</name>
    <description>Connector to a database using a MSSQL JDBC driver</description>
    <type>com.trivir.idmunit.connector.JDBC</type>
    <server>jdbc:sqlserver://172.17.2.20:1433;databaseName=SQLDBName;user=sa";</server>
    <user>sa</user>
    <password>dMGOmoA9SwlloxUZ0n+ffQ==</password>
    <jdbc-driver-class>com.microsoft.sqlserver.jdbc.SQLServerDriver</jdbc-driver-class>
    <multiplier/>
    <substitutions/>
    <data-injections/>
</connection>
```

Here is an example with an Oracle database:

```xml
<connection>
    <name>JDBC Oracle Server</name>
    <description>Connector to a database using Oracle</description>
    <type>com.trivir.idmunit.connector.JDBC</type>
    <server>"jdbc:oracle:thin:@172.17.2.20:1521/xe";</server>
    <!-- above line formatted for SID, line below is formatted for using Service -->
    <!--<server>jdbc:oracle:thin:@//172.17.2.20:1521/xe";</server>-->
    <user>sa</user>
    <password>dMGOmoA9SwlloxUZ0n+ffQ==</password>
    <jdbc-driver-class>com.microsoft.sqlserver.jdbc.SQLServerDriver</jdbc-driver-class>
    <multiplier/>
    <substitutions/>
    <data-injections/>
</connection>
```