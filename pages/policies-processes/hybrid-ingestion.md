---
layout: page
sectionmenu: processes
title: Hybrid Ingestion
index: true
permalink: /policies-processes/hybrid-ingestion/
---

## Adding datasets to Review or Live repository: process

1. Launch datatool (using Chrome or Firefox!):

   * Live repository: <https://archive.researchdata.leeds.ac.uk/cgi/datatool>
   * Review repository: <https://review.researchdata.leeds.ac.uk/cgi/datatool>

2. Within the Datatool click on 'Choose file' and browse to the N Drive 
3. Navigate to relevant folder, then highlight and Copy full path 
4. Highlight ingestion file and click Open - you are returned to the deposit screen in EPrints
5. Paste the N drive path into the box 
6. Type in the passphrase 
7. Convert EPrints XML - if there are no errors, a new screen appears. 
8. Choose Import to Review (or Import to Live – only if 100% sure)
9. If the dataset or some of its files are very large, the dataset is scheduled to be ingested using an overnight process
10. Enter the passphrase (easy to forget and buggers up process if you do!) 
11. Metadata and files now imported and will be listed in Latest Additions 
12. The new record will be visible in browse views in approx. 24 hours 

If it all goes wrong and you want to start again, reload datatool

## Dealing with common errors 

Whenever possible, it is advisable to attempt data ingestion during the morning or early afternoon in case you need technical support. 

Ensure an empty spreadsheet template is used each time. 

Watch out for cells with hidden formatting which display a single unmatched quote character at the start of the value in the cell when it is selected.

If the first step in the ingestion process fails with errors suggesting either some cells are not empty when they should be, or an unknown field (with a field name shown in the error message as two quotes with nothing inside them) there are most likely cells in the spreadsheet which contain invisible data (e.g. whitespace characters, custom formatting, functions etc.). In this you need probably need to [sanitise the spreadsheet]({% link pages/policies-processes/preparing-spreadsheet.md %}). 

If ingestion errors continue to occur and you feel you may need some technical support to sort them out 
* Ensure that you keep a record of the exact error messages occurring 
* Save a copy of the spreadsheet in its exact state as used when you were trying the ingestion process 

If the second stage of the ingestion process happens very quickly, it is likely that it has failed, since this is the point at which the data files referenced in the metadata are copied into the repository. In this case check that the file references in the spreadsheet are accurate – remember file names are case sensitive.

## Gotchas

Check for non-alphanumeric characters. May cause problems. 

Filenames in spreadsheet and on N drive must match **exactly**

Make sure eprint and row ids have been entered on the spreadsheet and cover all the associated files 

Remember to enter retention_date and record_type (repository or registry) 