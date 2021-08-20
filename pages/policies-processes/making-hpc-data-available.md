---
layout: page
sectionmenu: processes
title: Making HPC data available to RDL team
index: true
permalink: /policies-processes/hpc-data/
---

Thanks to Chris Wareing for providing these instructions.

Once you have prepared your data on the ARC machines for transfer to the Repository, it is possible for the RDM team to pull the directly to their servers. 

Make your data available as follows. 

1. In your `/nobackup/<yourusername>/` directory, make a folder called `repository`. 
2. Copy the files to go into the Repository into this folder `/nobackup/<yourusername>/repository/`.
3. In this `repository` folder, make those data files publically read available. The command `chmod 704 *` should do this to all files. An `ls –la` command should show them marked `rwx---r—`.
4. Change directory up one level into `/nobackup/<yourusername>/`
5. Make sure everything in this directory is private to your username: `chmod 700 *`
6. Now make only the repository directory publicly read-executable: `chmod 705 repository/`
7. Change directory up one level into `/nobackup/`
8. Make your directory publicly read-executable: `chmod 705 <yourusername>/`

Then email the RDM team with the directory location of your data and the machine it is held on (ARC2/ARC3/MARC1 etc.) 

They can access your data via their access to the ARC machines. 

Once they have let you know the data has been copied from your directory, you should immediately close down access to your directories again. As follows, on the machine in question:- 

1. `cd /nobackup/`
2. `chmod 700 <yourusername>/`
3. `cd <yourusername>`
4. `chmod 700 *`
