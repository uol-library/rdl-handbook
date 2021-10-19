---
layout: page
sectionmenu: processes
title: File names
index: true
permalink: /policies-processes/file-preparation/
---

Be aware of differences between operating systems - file extensions are common in Windows but much less so in Linux / Mac.

## Naming conventions

* File names must be **lower case** - Windows is _case-insensitive_ whereas most file systems are _case-sensitive_ so be consistent in the use of lower case to ensure inter-operability across systems. 
* File names must only contain alphanumeric characters, `-` (hyphens) or `_` (underscores), and should only have a single `.` character if possible before the file extension.
* Keep filenames to a reasonable length and be sure they are under 31 characters in total.

{% include components/quote.html content="Some characters are illegal in file names (slashes, colons, quotes) but others (spaces, ampersands, brackets, single quotes) can also cause problems in URLs" type="pull" align="left" %}

## Generating lists of file names

Sometimes it is useful to generate a list of files in a folder e.g. if you are completing the **File** part of the ingest template. 

1. open the directory using the terminal or windows command prompt
2. type `ls > file_list.txt` (Linux/Mac) or `dir /b > file_list.txt` (Windows) to dump a list of files to the file `file_list.txt`

Check the file to make sure it is complete (the above commands will not list hidden files, for example) and remove any directories.

Some filenames may need to be deleted from the list where they are not actually part of the dataset to be deposited. 
