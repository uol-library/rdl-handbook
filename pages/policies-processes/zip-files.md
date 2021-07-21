---
layout: page
sectionmenu: processes
title: Handling zipped archives
permalink: /policies-processes/zip-files/
---

## Archive file formats

**A “tar” file archive (.tar)**  
A single file which can contain multiple files and folders within it. It is an uncompressed format and is predominantly used on Unix/Linux platforms. The name originates from a time when files were often saved to tape (“tar” being a shortening of the phrase “tape archive”).

**A “gzip” file (.gz, or rarely .gzip)**  
A file format created by the Gnu zip (gzip) compression algorithm which compresses a single file to produce a .gz file. This is the most popular type of compression on Unix/Linux based systems, but is also available on non-Linux platforms.

**A “bzip2” file (.bz2, or rarely .bzip2)**  
A file format created by the bzip2 compression algorithm. Similar to gzip, this compresses a single file and also historically originates from Unix/Linux platforms and is more efficient than gzip in terms of output file size but it does require more computer processing resource and can take significantly longer to process the same input file. It is also not quite as universally available – especially on non-Linux platforms.

**A “zip” file (.zip)**  
A general compressed file archive container popular on Windows platforms which can contain multiple files and folders, but is also available on most modern non-Windows platforms. Since the zip file format itself is just a container, a number of different compression methods (algorithms) can be used to produce a .zip file - these are often presented as options in compression utilities to allow the user to choose which compression algorithm to use.

**A “7zip” file (.7z, or rarely .7zip)**  
A file format created by the 7-zip compression utility which can contain multiple files and folders, predominantly used on Windows based platforms. Similar to .zip, the .7z format is actually just a container, and a number of different compression algorithms can be used to produce a .7z archive file. This is the least universally accessible type of compressed archive but arguably is the most efficient of all in terms of resultant archive file size.

**A compressed tar archive (.tar.gz, .tar.bz2)**  
Since a tar archive is uncompressed, it is very common for tar files to be compressed once created to reduce their size. Historically they were always compressed using the Gnu zip compression algorithm and the resultant file saved with a “.gz” file extension, and this is still by far the most popular way of compressing a tar file. Since the original file already has a .tar extension, the resultant file actually has two file extensions “.tar.gz”. More recently the newer bzip2 compression algorithm has gained some prominence in the Linux world and can also be used to compress a tar archive file with the resultant file normally saved as a “.tar.bz2” file. It is quite rare to see a tar file compressed using a “zip” compression algorithm (since zip compression originates from the Windows platform), and it is even less common to use 7zip to compress a tar file – in fact, I’ve never seen this done.

## Some common questions and scenarios 

### File archives within file archives and compressing an archive containing compressed files 

Some archive file formats (e.g. zip, tar, 7zip) can contain any type of file, so it is possible for them to contain one or more other archive files (which may or may not be compressed already). Compressing an archive which already contains compressed archives normally will not normally reduce the total file size - in most cases there will be a slight increase in overall file size. 
  
### Splitting large archive files 

Where archive files would otherwise be particularly large, it is quite common to split the archive into smaller archive “parts”. This helps in a number of ways. The smaller resultant files can generally be managed more easily and are more suitable for download over the internet. 

It is important to note that with a “split” archive the individual split files are not valid on their own (i.e. as smaller stand-alone archives). They are only valid when combined together to form a single large archive. 

On a Linux OS there are generic commands and utilities which facilitate the production of split archives and more general ones to split any type of file into smaller parts. There are similar commands and utilities to join split files to form the original, single file. 

On Windows the 7-zip utility is particularly useful since, in addition to supporting all popular file archive formats, it also supports splitting an archive into smaller parts, and extracting all files from a “split” archive. 

When splitting file archives into parts, it is common practice to define a split archive size limit that has some sort of practical or useful meaning in the real world. Although USB memory sticks and USB drives are most commonly used as preferred portable storage these days, capacity limits of various types of optical media are often used to define a split archive file size limit. Each type of optical media has a very definite capacity limit, so storing a single file which is larger than the optical medium’s capacity is not possible, hence the convention of defining a maximum split archive file size limit based on these capacities. 

A commonly used file size limit is therefore the single layer DVD capacity (approximately 4.5GB). Prior to this the most common was 650MB, which was the capacity of a standard CD. 

### Which compression/archive file format is best? 

There are a number of things to consider here. 

**Multiple files and folders**  
Some compressed archive file formats can contain multiple files and folders (.zip, .7z), others can only contain a single file (.gz, .bz2). For this reason on Unix/Linux platforms the (compressed) tar file archive format has always been popular, since the original gzip compression algorithm on Linux and the more modern bzip2 format can only compress single files – but this single file can be a tar file, which itself can contain multiple files and folders. On Windows platforms the .zip format is most popular and natively supports multiple file and folders within it. 

**Accessibility**  
In general, on Windows the .zip format is the most accessible, with the .7z format being less universally used. On non-Windows platforms the native compression formats are .gz and .bz2, of which .gz is the most widely used. The 7-zip utility on Windows reads and writes all common archive formats, but other Windows-based applications are less flexible. In the Linux world, .zip is generally well catered for (despite not being historically native to the OS) so if a file archive is likely to be used across all platforms, .zip could be considered the most accessible. 

**Efficiency**  
On a Windows platform, the .7z format is more efficient than .zip, but less universally accessible. On a non-Windows platform, .bz2 format is more efficient that .gz, and although both are equally accessible on any modern Linux OS, .gz is more accessible on non-Linux platforms. 

### Conclusion 

* If the end users are expected to be predominantly using a Windows OS, the .zip format is best suited. 
* If the end users are expected to be predominantly working within a Linux OS, the .tar.gz format is best suited. (If the end users are exclusively working on Linux OS, the .tar.bz2 format could also be considered acceptable, but for consistency I would recommend still using .tar.gz instead.) 
* If the end users are expected to be using a mix of platforms (Windows, Linux, MacOS etc.), the .zip format is best suited (as it is the most universally accessible).

### Important size limitations of the zip format and the implications of using the "zip64" extended zip format 

The standard zip container format has an individual file size and total archive size limit of one byte less than 4GB (4294967295 bytes). It is also limited to 65535 files/folders within a single zip archive. Due to these restrictions, the "zip64 format extensions" were created as a later modification to the original zip container format. Newer versions of compression utilities such as 7-zip will automatically switch the container format from zip to zip64 if a single file within a zip archive is 4GB or greater, if the total zip archive size is 4GB or greater, or if the total number of files and folders within a zip archive exceeds 65535. Note that the filename extension of a zip archive is ".zip" regardless of whether the standard zip container format or the enhanced zip64 format is used within it. Care should be taken in this regard since there are still many zip compression software libraries and modules, used in a whole range of popular applications, utilities, and operating systems (where zip files can be opened using standard file/folder viewers), which do not support the zip64 enhancements to the zip format. This can result in an inability to open, analyse or extract files from a zip64-encoded zip archive. Sometimes errors are produced, other times incorrect file sizes are reported, and in the worst cases, files extracted from the zip archive can be corrupted.  

### The 7-zip (Windows) utility 

The 7-zip utility is recommended on Windows platforms since it is able to read and write all the most popular file archive formats including .zip, .gz, .bz2, .tar and its own .7z format. It is also able to split file archives into smaller parts during the archive creation process. On non-Windows platforms the 7-zip utility is sometimes available (though much less popular), but native commands and utilities readily exist to compress, uncompress, split and join archives. 

Since it supports all major file archive formats, the 7-zip utility can be used to create the two most popular archive types - .zip intended predominantly for re-use on Windows, and .tar.gz intended for re-use predominantly on Linux-bases OSes. 

**Creating a “split” archive with 7-zip**  
When creating a file archive in 7-zip, select an option from the drop-down list under “Split to volumes”. 

**Selecting the level of compression with 7-zip**  
Each type of archive format has its own levels of compression. In general you should choose a minimum of “Normal” compression, and if size is an issue, or where time is not a factor, choose a higher level of compression. Bear in mind that actual compression results depends heavily on the nature of the original files. If original files are already in a format which uses its own type of compression (e.g. .jpg files), overall compression ratio is likely to be relatively poor, and the advantages of choosing very high levels of compression are likely to be minimal, with the disadvantage of taking much longer. 

**Creating a tar file (ready for compressing with gzip) in 7-zip**  
Normally tar files are created on the Linux platform using the tar command. However, if you need to create one on a Windows machine, use the 7-zip utility to create it. Just be sure to select tar from the list of archive types. Once done, you should run 7-zip again to compress the tar file using gzip. Note that it is NOT possible to create a tar file AND compress it at the same time in 7-zip – to do that it is a two-stage process – create the tar file first, then re-run 7-zip to create a .gz file from the tar file. 

**Choosing an archive type in 7-zip**  
If the archive is likely to be predominantly used on Linux, choose the gzip format, first ensuring all files and folders have been combined into a single tar file, which can also be done in the 7-zip utility if necessary (in this case the resultant file will be a .tar.gz file). If the archive is likely to be used on windows, choose the zip format. If you are unsure, or if the archive is likely to be used on any type of platform, use the zip format. 

**Why can’t I select gzip (or bzip2) as the archive type in 7-zip?**  
If you have selected a folder or multiple files to be included in an archive in 7-zip, the types of archive available to create is limited to those which support multiple files and folders. The gzip and bzip2 formats do NOT support this. If you are trying to compress a tar file, ensure you have selected (only) the single tar file for inclusion in the archive, and that you have not selected the folder in which it resides by mistake. 

**Which file size should I choose when splitting an archive?**  
Some common size limits are included in the 7-zip utility when selecting to split an archive into smaller volumes. A common split size is single layer DVD capacity (4.5GB). Downloading files larger than this takes a considerable amount of time even on a fast network connection – so this is the file size I recommend. 

The dual layer DVD capacity is approximately 8.1GB and could be used as an alternative in RDL’s case (since ABE ingestion limits files to 10GB) - though this limit seems more arbitrary, and it is important to note that the use of this size limit is generally not widespread. 

There is another consideration when creating zip file archives. Due to the size limitations of the standard zip container format as mentioned earlier, and the potential re-use difficulties of zip archives which use the zip64 extended zip format, it is highly recommended that wherever possible individual file sizes within a zip archive, and the total size of the zip archive is kept below 4GB whenever possible. Note that in these cases, splitting a large zip archive into smaller parts will not prevent the zip64 container format being used if it is required. This is because a split zip archive is essentially recombined as part of the file extraction process, so if the combined archive exceeds any of the standard zip format size restrictions, the zip64 extended format will be used even if the zip archive is split using a part size of less than 4GB.