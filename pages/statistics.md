---
layout: page
title: Repository Statistics
permalink: /statistics/
---

## Introduction

The administrative statistics outputs collate administrative data relating to the number of eprint items and documents in the repositories. 

To understand the outputs, as a reminder: - 

* One eprint (record) can contain zero or more documents. 
* In theory, each document within an eprint can contain one or more files, but in practice, for RDL and Timescapes, each document only ever has one file associated with it, so the terms "document" and "file" can be used interchangeably. 
* When files are ingested into eprints, some known types may have (normally lower-resolution) access copies (a.k.a. thumbnails, derivatives, or surrogates) created automatically by EPrints. For example, a high-resolution TIFF image may have one or more lower-resolution JPEG thumbnail images created by EPrints as part of the post-ingestion process. 
* These thumbnails are also associated with the parent eprint, so if an eprint contains documents, there could be a mix of the original ingested files and the automatically-generated thumbnails. For this reason the statistics output uses the terms "original documents" and "thumbnails" to distinguish between them. 
* Where no distinction is made (i.e. "documents") - this should be taken to mean ALL documents, both originals and thumbnails. 

The four areas in which items (eprints) may reside are:

1. Archive - the live repository area (i.e. the main publicly accessible area of the repository) 
2. Buffer - the holding area where items which have been fully ingested reside before they are made live 
3. Inbox - partially ingested items reside here 
4. Deletion - items which have been retired are moved to this (dark) area 

Only items in the archive area are visible from the front web GUI interface (unless you are logged in as a repository editor or administrator). 

So normally, for the purposes of statistics reporting, we are only interested in eprints which are in the live archive area, AND within these eprints, we are only interested in "original documents" (i.e. we don't want to include the thumbnail files as well). 

## Administrative Summary Statistics

The administrative summary statistics give a brief summary, showing total numbers of eprints and documents, also giving a breakdown of original documents (i.e. excluding the thumbnails) in each of the four repository areas (archive, buffer, inbox, deletion). 

They are available for all repositories relating to RDL and Timescapes from the following URLs: - 

RDL Live  
<https://archive.researchdata.leeds.ac.uk/cgi/admstats>

RDL Review (only available on campus or via WVD)  
<https://review.researchdata.leeds.ac.uk/cgi/admstats 

RDL RADAR  
<http://radar.researchdata.leeds.ac.uk/cgi/admstats>

Timescapes  
<https://timescapes.researchdata.leeds.ac.uk/cgi/admstats>

Timescapes Review (only available on campus or via WVD)  
https://tstest.researchdata.leeds.ac.uk/cgi/admstats 

## Original document statistics

The original document statistics show the number and total size (in bytes) of original documents associated with all live eprints (i.e. those in the "archive" area) in the repository. Grand totals for the number of live eprints, the number of original documents associated with them, and the total size (in bytes) of all original documents associated with all live eprints are also shown. 

They are available for the RDL repositories from the following URLs:

RDL Live  
<https://archive.researchdata.leeds.ac.uk/cgi/dstats>

RDL Review  
<https://review.researchdata.leeds.ac.uk/cgi/dstats>

RDL RADAR  
<https://radar.researchdata.leeds.ac.uk/cgi/dstats>

## Document breakdown statistics

Document breakdown statistics show the number of original documents associated with all live eprints (i.e. those in the "archive" area) in the repository. A comprehensive breakdown by faculty and school for the number of live eprints and the number of original documents associated with them is also shown. Please be aware of the possibility of multiple-counting with the faculty/school breakdowns - this is all explained in the outputs. 

They are available for the RDL repositories from the following URLs:

RDL Live  
<https://archive.researchdata.leeds.ac.uk/cgi/bstats>

RDL Review  
<https://review.researchdata.leeds.ac.uk/cgi/bstats>

RDL RADAR  
<http://radar.researchdata.leeds.ac.uk/cgi/bstats>

## Reuse statistics

Reuse statistics, as the name suggests, provide information relating to how the items in the repositories are accessed and reused (as opposed to administrative statistics which quantify the number of datasets and files in the repositories). 

### IRStats2

IRStats2 is an eprints plugin module which, once configured, reports on various reuse statistics. 

This is available for the RDL Live repository, and can be accessed from the following URL:

<https://archive.researchdata.leeds.ac.uk/cgi/stats/report>

Please note - you need to be logged in as a repository administrator or editor to be able to view this link. 

Currently it is NOT publicly accessible (you will see an error if not already appropriately logged into the repository's EPrints web GUI). This can easily be changed in future if necessary.

### IRUS UK

IRUS-UK (Institutional Repository Usage Statistics UK) is a national aggregation service, which provides COUNTER-conformant usage statistics for all content downloaded from participating UK institutional repositories (IRs). The University's repositories send usage data to IRUS using a plugin, and IRUS clean the data (remove visits from bots and other automated processes) to get a clear picture of repository visitors.

You access the statistics through the IRUS-UK portal:

<https://irus.jisc.ac.uk/secure/irus/>

