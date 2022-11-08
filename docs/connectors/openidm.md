# OpenIDM Connector

The OpenIDM Connector allows you to manage objects and the sync process for the ForgeRock OpenIDM platform. The connector handles managed users, links to external applications and the recon process.

Validation of managed users can handle complex and array attributes, as well as customary single and multi-value attributes.

## Installation

The OpenIDM connector (openidm.jar) requires gson-2.3.jar as well as ojdbc6.jar to be added to your classpath.

## Operations

::: info Attribute Postfix Specifiers
This connector needs to explicitly force attribute types. These postfixes can be added to the end of an attribute in the column header.

There are currently three supported attribute type specifiers that can be used in the column header:

- `[]` can be used to treat the attribute as an array type.\
  Example: `groups[]` or `description[]`.
- `::bolean` can be used to force and attribute to be treated as a boolean.\
  Example: `loginDisabled::boolean`.
- `::string` can be used to force and attribute to be treated like a string.\
  Example: `surname::string`.
:::
