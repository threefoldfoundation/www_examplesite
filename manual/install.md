
# Set up publishtools environment

## Recommended additional tools

- [Sourcetree](https://www.sourcetreeapp.com/) (manage your git repositories & branches)
- [Visual Studio Code](https://code.visualstudio.com/) (code editor)

```bash
#Install publishtools on your machine (OSX only for now):
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/crystaluniverse/publishtools/master/scripts/install.sh)"

#This will allow you to run all wiki's and websites on your local machine.
```

Make sure your ssh-key is loaded and you have it in your github account - [Instructions](docs/sshkey.md)

```bash
#Install publishtools
publishtools install

#Update to latest version
publishtools update

#See which version you're on
publishtools version

#List all active sites on publishtools (will show if changes in the repo)
publishtools list

#Pull in latest changes for all repos
publishtools pull

#Open code editor (Visual Studio Code)
publishtools edit -r <repo_name>

#Run the webserver locally
publishtools develop

#Run the the command (e.g pull, develop etc) for specific repo (-r)
publishtools <command> -r <repo_name>
```

For more commands and details see [**Crystalunivers/Publishtools readme**](https://github.com/crystaluniverse/publishtools)
