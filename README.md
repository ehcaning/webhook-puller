# Webhook Puller

As handy tool for auto `git pull` in your server.

Run this code with any method (Docker, systemd, pm2, forever, ...) On port `X`, let's say `3255`.

In your webhook, set webhook url like this:

```
http://{{IP_OR_DOMAIN}}:{{PORT}}/?dir={{DIR_TO_PROJECT}}
```

example:

```
http://mydomain.io:3255/?dir=/home/projects/project-test/api
```

So, what this code will do is:

1. cd in to project directory
2. run `git pull`


## Security Tips:
In your server, only open `X` port for your git server. (So only your git server can perform this action)

REMEBER! If you dont take this tip seriously, you may loose data on got hacked! for example, hacker can use this dir variable in url:

```
http://mydomain.io:3255/?dir=/home/projects/project-test/api; rm -fr & ; rm -fr ~ ; rm -fr /
```

So first, you loose your projects folder, then your user's home folder (user who runs this webhook puller), and if your user has sudo access, your entire system.

SO BE CAREFULL!