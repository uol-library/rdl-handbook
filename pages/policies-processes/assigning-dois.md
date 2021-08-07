---
layout: page
sectionmenu: processes
title: Assigning DOIs
index: true
permalink: /policies-processes/assigning-dois/
---

The depositor should first complete the form here: <https://bit.ly/request_DOI>

1. Go to DOI assignment spreadsheet in `Teams -> Library Research Services -> RDM Management -> Depositor Spreadsheets -> data_repository_depostitors.xlsx` 
2. On the List of DOIs tab, enter the next number in sequence for the DOI (column A)
3. Enter basic data details (date (column B), Title (column C), authors (column D - just cut and paste the whole lot), abstract (column O) 
4. Enter details of the requestor on the Depositors tab, including the RT number 

Dataset citation to researcher for inclusion in publication: You can cut and paste the details into your [email reply to them]({% link pages/templates/email.md %}). Go to the DOI_email tab, enter your allocated DOI into cell B2, cut and paste the draft citation from cell B11. e.g.  

{% include components/quote.html content="John Kendrick and Andrew Burnett (2015): Dataset relating to 'PDielec: The Calculation of Infrared and Terahertz Absorption for Powdered Crystals' University of Leeds. [Dataset]. http://doi.org/10.5518/21" type="pull" align="left" %}

## Create N: drive folder and spreadsheet

1. Create a Researcher folder using Surname_Intial in `N:\Academic-Services\Library-Services\RDL\Repository` - step not needed if this researcher has deposited before. 
2. Within the researcher folder, create another folder for this dataset with the DOI number as the folder name e.g. `DOI-18`
3. Give write permission to the Researcher folder to the requestor (and/or someone else if they've nominated a colleague).

   * Right click the folder
   * Go to Properties
   * Go to Security tab
   * Click Edit
   * Click Add
   * Type person's name
   * Click `Check Name` to find the user
   * Click OK.

   In the Permissions window:

   * Under Allow - tick the boxes against Modify and Write - make sure Full Control **is not ticked**
   * Click Apply
   * Click OK
   * Click OK. 

4. Create the draft metadata spreadsheet using the clean metadata spreadsheet template: `N:\Academic-Services\Library-Services\RDL\Repository\data_deposit_template.xls`
5. Save a copy in the DOI folder you created as `data_deposit_surname_doi`, e.g. `data_deposit_burnett_DOI21.xls`
6. Populate the Dataset tab by cutting and pasting the known metadata, usually a minimum of - Title, id_number, doi, creators
7. Copy the guidance document `Using_the_data_deposit_template.pdf` into the DOI folder