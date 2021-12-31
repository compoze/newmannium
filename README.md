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
* [Usage](#usage)
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
* [`newmannium run`](#newmannium-run)
* [`newmannium collections`](#newmannium-collections)

# Usage

In order for Newmannium to access your Postman API Collections, Newmannium expects an environment named **POSTMAN_API_KEY** to be available in the shell. You can generate a Postman API Key from their site here: [Generate Token](https://lively-eclipse-481148.postman.co/settings/me/api-keys?)

## `newmannium run`

Execute Postman Cloud Workspace Collection via newman

```
USAGE
  $ newmannium run -c <name_of_collection>

FLAGS
  -c, --collection=<value>  (required) name of collection in postman cloud to run
  -h, --help                Show CLI help.

DESCRIPTION
  Execute postman cloud collection via newman

EXAMPLES
  $ newmannium run -c test.postman_collection.json
```

If the collection does not exist, or the user token does not have access to the collection, an error is returned

## `newmannium collections`

List all Postman Workspace Collections user has access to

```
USAGE
  $ newmannium collections [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  List all collections user has access to

EXAMPLES
  $ newmannium collections
```