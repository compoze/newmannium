Newmannium
=================
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

## What is Newmaninum
Newmannium is a simple wrapper around Postman's [newman](https://github.com/postmanlabs/newman) and the [Postman APIs](https://learning.postman.com/docs/developer/intro-api/)

Newmannium is also the name of Newman's Millenium party (of which Jerry was not invited)

![](img/newman.jpeg)

## Why Newmannium

While Postman's cloud-based Workspaces making collaborating on collections easy, there is not anyway to remotely execute a Postman collection easily (for example in a CI pipeline). Newmannium gives the ability to pull collections from a shared Postman Workspace, and execute it via the newman command line runner

## Docs
<!-- toc -->
* [Installation](#installation)
* [Commands](#commands)
<!-- tocstop -->
# Installation
<!-- usage -->
```sh-session
$ npm install -g newmannium
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`newmannium collections`](#newmannium-collections)
* [`newmannium run`](#newmannium-run)

## `newmannium collections`

List all collections user has access to

```
USAGE
  $ newmannium collections [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  List all collections user has access to

EXAMPLES
  $ oex newmannium collections
```

_See code: [dist/commands/collections.ts](https://github.com/compoze/newmannium/blob/v0.0.0/dist/commands/collections.ts)_

## `newmannium run`

Execute postman cloud collection via newman

```
USAGE
  $ newmannium run -c <value> [-h]

FLAGS
  -c, --collection=<value>  (required) name of collection in postman cloud to run
  -h, --help                Show CLI help.

DESCRIPTION
  Execute postman cloud collection via newman

EXAMPLES
  $ oex newmannium run -c test.postman_collection.json
```

_See code: [dist/commands/run.ts](https://github.com/compoze/newmannium/blob/v0.0.0/dist/commands/run.ts)_
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
