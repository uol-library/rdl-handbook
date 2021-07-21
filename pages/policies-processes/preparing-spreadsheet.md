---
layout: page
sectionmenu: processes
title: Preparing the spreadsheet
permalink: /policies-processes/preparing-spreadsheet/
---

1. Open the spreadsheet completed by the researcher  
   
   Based on `N:\Academic-Services\Library-Services\RDL\Repository\data_deposit_template.xls`

2. Copy horizontal sheet - used for deposit  

   * Open `N:\Academic-Services\Library-Services\RDL\Repository\data_deposit_horizontal_template.xls`
   * Right-Click on Ingest tab
   * Select Move or Copy 
   * Choose researcher spreadsheet 
   * Click OK 

   Ingest should now be the first tab in the researcher spreadsheet - if not move Ingest to be the first tab 
   
   Save the workbook in "Excel 97-2003 Workbook" format as  ingest_FINAL_DOInnn.xls 

3. Merge content of Datasets and File Sheets into Ingest Sheet  

   In Datasets  
   * Select range of cells - top left, title of dataset - bottom right to include all cells with entries
   * Right-click and select copy
   * In the Ingest sheet right-click the cell under" title" by row_id 1_0
   * Select "Paste Special"
   * In the pop-up select "Values" and "Transpose" then click OK

   In Files  
   * Select range of cells - top left, cell below "Title" - bottom right, last filename
   * Right-click and select copy
   * In the Ingest sheet right-click the cell under "documents.title" in the first row below those containing dataset metadata
   * Select Paste 
   * Make sure the filenames appear in both "documents.main" and "documents.path" 

4. The first four columns are used to control the ingestion.  

   * The dataset metadata appears first and the columns "eprintid" and "rowid" are used 
   * The files metadata also use the "documents.docid" and "documents.rowid"
   * Make sure the entries are correct
   * Remove any entries below the last filename 

## Checking the spreadsheet

* **Creator ORCID** - ensure ORCIDs are formatted as https://orcid.org/xxxx 
* **Creator affiliation** - add creator affiliation ID - use `affiliation_crossref.xlsx` in Repository folder 
* **Creator affiliation type** - crossref
* **Deposit Agreement** - yes/no
* **Preservation** - PRONOM 
* **Collections and sub-collections**
* **Metadata language** en 
* **Retention date** - 01/nextmonth/tenyears 

## Cleaning / Sanitising the spreadsheet

This will remove any invisible data in any of the cells selected. 

_EITHER:_

* Select the area of the spreadsheet containing all the valid rows and columns, ensuring no extra cells outside of this range have been selected. 
* Copy the area to the clipboard (ctrl-c) 
* Create a new spreadsheet. 
* Paste the clipboard contents into the new spreadsheet (ctrl-v). 

_OR_ 

* Select the entire column immediately to the right of the last one used for metadata. 
* Hold down shift, and scroll across many screen’s worth of columns to select a large number of columns. 
* Right-click on any cell in the selected region and select “Delete cells” from the menu. (Note that simply pressing the delete key WILL NOT clear all invisible characters). 
* Select the entire row immediately underneath the last one used for metadata. 
* Hold down the shift key and scroll down many screen’s worth of rows to select a large number of rows. 
* Right-click on any cell in the selected region and select “Delete cells” from the menu. (Note that simply pressing the delete key WILL NOT clear all invisible characters). 
* Save the spreadsheet and try running the first ingestion step again. 
* If the same errors occur, repeat these steps until no more similar errors occur during the first stage of the hybrid ingestion. 

## Remove hidden formatting in Excel cells 

* Select all the cells, right-click, select Format cells…, and select “General”. 
* if the problems persist:

  1. Select a known "good" cell with no formatting issues 
  2. Click the "Format Painter" paintbrush icon (top left) in Excel 
  3. Click on the cell(s) with the formatting issues. 
