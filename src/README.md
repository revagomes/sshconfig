# SSH Config Manager

Rather than manage one giant configuration file for your ssh aliases, each alias/group has been broken out into its own file in `~/.ssh/config.d/your_alias`. Any files in that directory get automatically concatenated into `~/.ssh/config` file.
To add a new alias, simply add a new alias file that directory and run the update command.

```
$ echo "Host example.com\nUser example" > ~/.ssh/config.d/example
$ sshconfig update
```
