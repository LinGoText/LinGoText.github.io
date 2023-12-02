---
outline: deep
---

# Installing LinGo

We're now ready to install LinGo. Like most open source applications, there are 2 main ways to download it:

1) Installing the binaries (executables).
2) Building from source

So far building from source is the only available option, so we'll stick with that. As soon as I'll include some binaries when I'll publish the first releases I'll also add a section on how to run the app from the binaries (even though it's considerably easier).

## Building from source:

LinGo was written in Go, so in order to build it from source we'll need the Go compiler installed on our machine. In order to not make this documentation excessively long, I'll report here a [very easy-to-follow Go installation guide](https://go.dev/doc/install), available for linux, macOS and windows.

This is, technically, all you need if you need to use this application for "space-separated" languages (i.e languages where tokens are separated by spaces) like english,finnish,hungarian,russian,serbian,indonesian,korean,french exc.

If you need this app to study what are known as "scriptio continua" languages (this means languages without spaces in between words), then you'll also need to install the python interpreter; for this [I'll also leave a guide here](https://realpython.com/installing-python/).

We can now download the actual code: [head over to the repository](https://github.com/hsnborn22/LinGo), and click on the green button "<> code" on the top.

![tutorial image](https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/lingo1.png)

Once you have clicked it, click the "download zip" button that should've popped out.

![tutorial image2](https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/lingo2.png)

You should now have a zip of the code installed on your machine; unzip it wherever you want, and then enter the unzipped folder. Here, head over to the "src" folder. Here, you will have to run the following command inside of the terminal:

```bash
go get
```
This will install all the necessary golang dependencies that will allow the application to function correctly. If you're part of the **european-like language group** (i.e languages whose words are separated by spaces), then you're good to go: to start the application just type:

```bash
go run main.go
```

### Extra steps for the thai-japanese-khmer-chinese group.

If you belong to the second group, you will have to do some extra steps: first, head over to the "scriptioContinuaTokenization" folder, and run the following command:

```bash
pip install -r requirements.txt
```

You are now (almost) done. To boot the application, stay in the "scriptioContinuaTokenization" folder: before booting the application, run the python server corresponding to your language (which can be server_thai.py, server_japanese.py or server_khmer.py) inside said folder. To run the server, use the command:

```bash
python3 <server-file-name>.py
```

If you wanted to study thai, for example, it would be:

```bash
python3 server_thai.py
```

(If your terminal says that "python3" is not recognized, don't panic; just check your environment variables).

You are now finally ready to boot the app and enjoy a nice language learning session; go back to the src folder (you can do that with the command cd .. in the terminal) and run the following command:

```bash
go run main.go
```

You are now in the program main menu. Remember to keep the python server running throughout the whole session. 

## Table of contents:

[[toc]]

## What next?

[Loading texts with LinGo](/text.md)
