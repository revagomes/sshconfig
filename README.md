# SSH Config Manager

> SSH Configuration files in a sane way.

Rather than manage one giant configuration file for your ssh aliases, each alias/group has been broken out into its own file in `~/.ssh/config.d/your_alias`. Any files in that directory get automatically concatenated into `~/.ssh/config` file.
To add a new alias, simply add a new alias file that directory and run the update command.

e.g:
```
$ sshconfig init
$ echo -e "Host example.com\n\tHostname example.com\n\tUser example" > ~/.ssh/config.d/example
$ sshconfig update
```
