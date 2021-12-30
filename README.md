oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
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
* [`newmannium help [COMMAND]`](#newmannium-help-command)
* [`newmannium newmannium PERSON`](#newmannium-newmannium-person)
* [`newmannium newmannium run`](#newmannium-newmannium-run)
* [`newmannium plugins`](#newmannium-plugins)
* [`newmannium plugins:inspect PLUGIN...`](#newmannium-pluginsinspect-plugin)
* [`newmannium plugins:install PLUGIN...`](#newmannium-pluginsinstall-plugin)
* [`newmannium plugins:link PLUGIN`](#newmannium-pluginslink-plugin)
* [`newmannium plugins:uninstall PLUGIN...`](#newmannium-pluginsuninstall-plugin)
* [`newmannium plugins update`](#newmannium-plugins-update)

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

## `newmannium newmannium PERSON`

Say hello

```
USAGE
  $ newmannium newmannium [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/newmannium/index.ts](https://github.com/compoze/newmannium/blob/v0.0.0/dist/commands/newmannium/index.ts)_

## `newmannium newmannium run`

Execute postman cloud collection via newman

```
USAGE
  $ newmannium newmannium run -c <value> [-h]

FLAGS
  -c, --collection=<value>  (required) postman collection path
  -h, --help                Show CLI help.

DESCRIPTION
  Execute postman cloud collection via newman

EXAMPLES
  $ oex newmannium run -c test.postman_collection.json
```

## `newmannium plugins`

List installed plugins.

```
USAGE
  $ newmannium plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ newmannium plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `newmannium plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ newmannium plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ newmannium plugins:inspect myplugin
```

## `newmannium plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ newmannium plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ newmannium plugins add

EXAMPLES
  $ newmannium plugins:install myplugin 

  $ newmannium plugins:install https://github.com/someuser/someplugin

  $ newmannium plugins:install someuser/someplugin
```

## `newmannium plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ newmannium plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ newmannium plugins:link myplugin
```

## `newmannium plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ newmannium plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ newmannium plugins unlink
  $ newmannium plugins remove
```

## `newmannium plugins update`

Update installed plugins.

```
USAGE
  $ newmannium plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
