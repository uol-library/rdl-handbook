---
layout: page
sectionmenu: processes
title: File names
index: true
permalink: /policies-processes/file-preparation/
---

Be aware of differences between operating systems - file extensions are common in Windows but much less so in Linux/Mac.


* Must be **lower case** with **no spaces**. Emphasise it’s bad practice to have case convey meaning. 
* Must only contain alphanumeric characters and - _ (hyphen underscore) 
* Preferably only have a single . character 

{% include components/quote.html content="An apostrphe in the filename OR IN THE FOLDER WE CREATE ON THE N DRIVE e.g. O'Neill - will cause the ingest to fail!" type="pull" align="left" %}

## Renaming files using procfnw 

These notes assume you will rename all of the files in a folder and its sub-folders 

1. Launch the program  
   <N:\Academic-Services\Library-Services\RDL\Repository\procfnw.exe_shortcut>
2. Copy the path and name of the folder to be changed into "Input Folder" - easiest to open folder and copy and paste whole string from file browser e.g. `N:\Academic-Services\Library-Services\RDL\Repository\Halcrow_M\DOI-370\RDL\crystal`
3. Choose a full path and name for the folder to contain the renamed versions of the files e.g. `N:\Academic-Services\Library-Services\RDL\Repository\Halcrow_M\DOI-370\RDL\crystal_new`
4. Make sure the options List only (dry run) and Recurse sub-folders should be selected at this stage 
5. Click Go 

A list of proposed changes is displayed. When you are happy that the changes are correct run again with List only (dry run) not selected. You may need to verify with the researcher that the new file names are OK.

* Verify that any filenames that appear in the dataset readme or other documentation are correct 
* Ensure filename changes are reflected in the ingestion spreadsheet 

**Remove the files created by the renaming script**

1. Open the newly generated folder containing the renamed files 
2. Type procfn in the search box 
3. This will list the working files created by the program 
4. Select and delete all of these 

**Once you are happy all is OK**

1. Delete the original folder and contents 
2. Rename the new folder to fit with the planned ingestion 

## Generating lists of file names

Sometimes it is useful to generate a list of files in a folder e.g. if you are helping a researcher to complete the File part of the ingest template. 

1. Copy the file_list shortcut file from `N:\Academic-Services\Library-Services\RDL\Repository`
2. Place a copy of the shortcut alongside the folder for which you want a file list
3. Right-click and drag the folder over the file_list shortcut 
4. Choose _Open with_ 

This will create a file called dir_list.txt in the folder chosen 

This file will contain a list of all files in the folder that can be used to populate the file list in spreadsheet 

Some filenames will need to be deleted from the list where they are not actually part of the dataset to be deposited. 
