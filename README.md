# cookiecutter-playdate

An unofficial [Cookiecutter](https://cookiecutter.readthedocs.io/en/stable/) template for building [Playdate](https://play.date) games with [VS Code](https://code.visualstudio.com) on macOS, Windows and Linux.

## Setup

- [Python](https://www.python.org) and [Cookiecutter](https://cookiecutter.readthedocs.io/en/stable/) are required to generate projects using this template.
- [VS Code](https://code.visualstudio.com) and the [Playdate SDK](https://play.date/dev/) are required to develop projects generated from this template.

## Usage

### First Usage

Execute `cookiecutter https://github.com/midouest/cookiecutter-playdate` in your terminal to download and run the template. Cookiecutter will download and cache the `cookiecutter-playdate` template the first time you execute this command.

**Example**

```shell
$ cookiecutter https://github.com/midouest/cookiecutter-playdate
name [Untitled]:
directory_name [untitled]:
author [Anonymous]:
description [Untitled Playdate game]:
reverse_domain [com.example]:
bundle_id [com.example.untitled]:
```

### Subsequent Usage

If the template has already been downloaded once, you can execute `cookiecutter cookiecutter-playdate` to re-use the cached template.

### Updating

If you want to download the latest version of the template, execute `cookiecutter https://github.com/midouest/cookiecutter-playdate` again. Cookiecutter will prompt you to confirm that you want to download the template again and overwrite the previous version.

## Config

You can change the default values with Cookiecutter's [user config](https://cookiecutter.readthedocs.io/en/stable/advanced/user_config.html).

For example, given a `.cookiecutterrc` file in your home directory with the following contents:

```yaml
default_context:
  author: Your Name
  reverse_domain: com.yourdomain
```

The next time you generate a project from this cookiecutter, you will see the default values that you configured:

```shell
$ cookiecutter https://github.com/midouest/cookiecutter-playdate
name [Untitled]:
directory_name [untitled]:
author [Your Name]:
description [Untitled Playdate game]:
reverse_domain [com.yourdomain]:
bundle_id [com.yourdomain.untitled]:
```
