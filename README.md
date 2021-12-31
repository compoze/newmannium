oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g newmannium
$ newmannium COMMAND
running command...
$ newmannium (--version)
newmannium/0.0.0 darwin-arm64 node-v16.13.0
$ newmannium --help [COMMAND]
USAGE
  $ newmannium COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`newmannium newmannium collections`](#newmannium-newmannium-collections)
* [`newmannium newmannium run`](#newmannium-newmannium-run)

## `newmannium newmannium collections`

List all collections user has access to

```
USAGE
  $ newmannium newmannium collections [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  List all collections user has access to

EXAMPLES
  $ oex newmannium collections
```

## `newmannium newmannium run`

Execute postman cloud collection via newman

```
USAGE
  $ newmannium newmannium run -c <value> [-h]

FLAGS
  -c, --collection=<value>  (required) name of collection in postman cloud to run
  -h, --help                Show CLI help.

DESCRIPTION
  Execute postman cloud collection via newman

EXAMPLES
  $ oex newmannium run -c test.postman_collection.json
```
<!-- commandsstop -->
* [`newmannium help [COMMAND]`](#newmannium-help-command)
* [`newmannium newmannium collections`](#newmannium-newmannium-collections)
* [`newmannium newmannium run`](#newmannium-newmannium-run)

## `newmannium help [COMMAND]`

Display help for newmannium.

```
USAGE
  $ newmannium help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for newmannium.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `newmannium newmannium collections`

List all collections user has access to

```
USAGE
  $ newmannium newmannium collections [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  List all collections user has access to

EXAMPLES
  $ oex newmannium collections
```

## `newmannium newmannium run`

Execute postman cloud collection via newman

```
USAGE
  $ newmannium newmannium run -c <value> [-h]

FLAGS
  -c, --collection=<value>  (required) name of collection in postman cloud to run
  -h, --help                Show CLI help.

DESCRIPTION
  Execute postman cloud collection via newman

EXAMPLES
  $ oex newmannium run -c test.postman_collection.json
```
