---
layout: page
sectionmenu: processes
title: Creating manifests 
permalink: /policies-processes/creating-manifests/
---

## Choosing the right type of file archive 

Where datasets include or require many files and/or folders bundled together in compressed file archives, care should be taken to ensure that the correct type of file archive is used, based mainly on the expected predominant platform of re-users - loosely this can be divided into Windows or Linux (where Linux includes MacOS for the sake of this consideration). 

See [Handling file archives using 7zip]({% link pages/policies-processes/zip-files.md %}) for help on choosing the right type of file archive. Generally the file archive should either be a compressed tar file archive (.tar.gz) if expected predominant re-use is on Linux machines, or a zip file archive (.zip) if most of the re-use is expected to be on Windows machines, or if re-use is likely to be cross-platform (i.e. Linux/Windows/MacOS). 

## Evaluating individual files sizes and total archive size 

See [Handling file archives using 7zip]({% link pages/policies-processes/zip-files.md %}) for guidance on file and archive sizes. You should carefully consider the merits of a sensible maximum individual file size wherever possible and should also limit the total archive size to maximise reuse potential. File archives should be split into smaller parts if necessary (using the 7zip application) to keep the total archive size manageable, and this method can also be used to split up large individual files (e.g. a single large file can be added to an archive which is split into parts). 

## File name convention for file archive manifest files 

It may be helpful to include a file manifest for each file archive as part of the dataset. The file manifest will be a simple text file, the content of which will be a list of files and folders contained within the associated file archive (with their size in bytes). I would advise that the name of the text file matches the name of the archive file name with suitable suffix (which is preferable to a prefix for file sorting purposes) - I suggest ".manifest.txt", and this is the convention used by the file manifest utilities described below. So for example, if the file archive is named "presentation_data_1.tar.gz" then the manifest filename would be "presentation_data_1.tar.gz.manifest.txt". 

## Creating a file manifest 

Once a suitable file archive (.zip or .tar.gz) has been created, producing a manifest for the archive couldn't be easier. There are three utilities which facilitate "drag and drop" manifest file creation - one utility is for tar files, the other two are for zip files. 

If working off campus, access the N drive via Windows Remote Desktop.  Citrix/Desktop Anywhere will also gain access to N but, if a manifest file needs to be created from the datafiles, the batch file will not work via Citrix. 

Open up two Windows Explorer instances. In one of them, navigate to the top of the Repository folder on the N: drive - you should see three shortcuts in the list of files, "tar_file_manifest", "zip_file_manifest" and "zip_file_manifest_alt". In the other Windows Explorer instance, navigate to the folder containing the file archive(s). Normally this will be a sub-folder inside the Repository folder on the N: drive. Select a file archive and drag it onto the appropriate shortcut in the first Windows Explorer instance (if it is a .tar or .tar.gz drop it onto the tar_file_manifest shortcut, if it is a .zip file use the zip_file_manifest shortcut). 

The "zip_file_manifest_alt" should be used if the "zip_file_manifest" utility gives an empty output when attempting to produce a manifest for a zip archive. This is to take care of cases where the zip64 format extension has been used within a zip archive (see  Handling file archives / using 7zip for more information about this). If this utility also produces an empty output, it is safe to assume the zip archive is corrupted. 

Ensure you only select ONE file archive at a time, and that you drop it onto the correct shortcut. 

When an archive file is dropped onto one of the shortcuts, a Command Prompt window ("dos box") will appear with some preliminary information. Ensure the Command Prompt window has focus (i.e. click your mouse in it for good measure), then press any key. The utility will then create a file manifest for the archive and save it to a text file located in the same folder as the file archive and with a file name following the naming convention described above. Once the manifest process has finished you should see another message in the Command Prompt window and an instance of Windows Notepad should appear with the newly created manifest file loaded into it. 

To exit the utility, simply close the Notepad window - the Command Prompt window will then also disappear.