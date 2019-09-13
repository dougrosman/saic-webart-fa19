# web art | ARTTECH 3900 | SESSION 03: Beginning HTML/CSS | Sep 9, 2019
___
<a href="../">Home</a><br>

<a href="https://dougrosman.github.io/saic-webart-fa19/lectures/session01">Session 01 - 08/28/19</a> |
<a href="https://dougrosman.github.io/saic-webart-fa19/lectures/session02">Session 02 - 09/04/19</a> |
<a href="https://dougrosman.github.io/saic-webart-fa19/lectures/session03">Session 03 - 09/09/19</a> |
<a href="https://dougrosman.github.io/saic-webart-fa19/lectures/session04">Session 04 - 09/11/19</a> |

___

#### Examples for Today:
<a href="https://dougrosman.github.io/saic-webart-fa19/code/session03">Basic HTML/CSS 01</a>

### Schedule

1. Session02 recap
1. Command Line review
1. git/GitHub review
1. Create Web Art repository on GitHub
1. Enable GitHub pages for repo
1. Clone Repo to local machine
1. VS code review
1. Learn some HTML/CSS! <br>
    –Break–
1. Work on Artist Presentation websites



### Homework:

1. Work on Net Art Presentation website to present on Monday 09/16

___

## Command Line Review
* Tab completion
* Arrow key navigation
    * Use side arrows to move cursor
    * use up/down arrows to cycle through previous commands
* Directory == folder
* 'option'+click to place your cursor
* Tabs/windows
```
$ cd    // change directory
$ pwd   // print current directory
$ ls    // list files in current directory
     -a     // list all files, including hidden files
     -l     // list all files with more information
$ mkdir // make new directory
$ mv    // move file or folder from one directory to another (also used for renaming files)
$ cp    // copy file from one directory to another
    -r      // (recursively copy) copy a folder and all the files inside it to a new directory
$ history   // view 1000 recent command line entries
$ clear     // clears the page (also cmd+k)
$ cd ~      // change directory to home directory
$ touch filename.txt    // create a txt file (replace 'filename' with whatever you want to anme the file)
```

## git/GitHub Review
* Configuring config file for your GitHub account (only do commands that have a '$' in front of them)
    ```
    // test the credential-osxkeychain function
    $ git credential-osxkeychain
    > Usage: git credential-osxkeychain <get|store|erase>

    // set your keychain to store your github password
    $ git config --global credential.helper osxkeychain       

    // set your username ()
    $ git config --global user.name "Your Name"

    // set your email address
    $ git config --global user.email youremail@saic.edu

    // If you're on a school computer
    $ cd path/to/your/repo
    $ git config user.name "User Name"
    $ git config user.email "youremail@saic.edu"
    ```
* Creating Repos
* Cloning Repos
* Making changes to documents
    ```
    $ git add
    $ git commit -m "brief summary of changes (present tense)"
    $ git push
    ```

## Create Web Art repository on GitHub
 ok

## Enable GitHub pages for repo
## Clone Repo to local machine
## VS code review
## Learn some HTML/CSS!
* HTML skeleton (html/head/title/body)
* tags/elements
* lists
* images
* embedding
* escape characters
* more things
* Validate your HTML: <a href="https://validator.w3.org/#validate_by_input" target="blank">https://validator.w3.org/#validate_by_input</a>


<br><br><br><br><br><br><br><br><br><br><br><br><br>
## in class notes
* HTML: hypertext markup language
* CSS: Cascading Style Sheet

* inline Elements/block elements

<br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br>
    –Break–
1. Work on Artist Presentation websites






#### code for running a python server.
Open a terminal and navigate to the folder you want to serve:
```bash
cd path/to/folder
```
Then depending on which version of python you have installed, launch the server. For python 2:
```bash
python -m SimpleHTTPServer
```
and for python 3:
```bash
python -m http.server
```
if you don't know what version of python you have installed you can check first by running:
```bash
python --version
```

#### Resources

<a href="https://blog.teamtreehouse.com/use-html5-sectioning-elements" target="blank">HTML5 Sectioning Elements</a><br>
<a href="https://www.w3schools.com/charsets/" target="blank">HTML5 Character Sets</a><br>
