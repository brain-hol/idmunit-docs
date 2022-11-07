# cURL Connector

This connector runs console commands in Windows.

## Operations

### Action

Perform a single HTTP request.

#### Params

| Name      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| url       | The URL of the request.                                                  |
| method    | The HTTP method of the request (supported methods: PUT, POST, DELETE).   |
| [headers] | Headers for the request (multi-value format is `headerKey=headerValue`). |
| [body]    | Body of the request.                                                     |

### Validate

Performs a single HTTP

#### Params

| Name         | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| url          | The URL of the request.                                                  |
| method       | The HTTP method of the request (supported methods: PUT, POST, DELETE).   |
| statusCode   | Expected status code of the response (e.g. 404).                         |
| responseBody | Expected response body as a JSON string.                                 |
| [headers]    | Headers for the request (multi-value format is `headerKey=headerValue`). |
| [body]       | Body of the request.                                                     |

::: info Note
PATCH is also supported, but will send a X-HTTP-Method-Override header instead of using the PATCH verb.
:::

::: info Note
Either one of statusCode or responseBody is required for Validate to work.
:::

## Configuration

The connector can be configured to accept all certificates if using HTTPS:

```xml
<trust-all-certs>true</trust-all-certs>
```
