---
layout: page
sectionmenu: processes
title: Repository Policies
permalink: /policies-processes/
---

## Research Data Management Policies

* [Research data management policy](https://library.leeds.ac.uk/research-data-policies)
* [Safeguarding data](https://library.leeds.ac.uk/info/14062/research_data_management/63/safeguarding_data)

## University Policies

* [Information Protection Policy](https://leeds.service-now.com/it?id=kb_article&number=KB0011140)
* [Data Protection Information for Researchers](https://dataprotection.leeds.ac.uk/information-for-researchers/)
* [Information Management Guide](https://dataprotection.leeds.ac.uk/wp-content/uploads/sites/48/2019/05/Information-Management-Guide.pdf)

## Retaining personal data indefinitely

The law advises not to hold personal data indefinitely ‘just in case’ it might be useful in future.  And although there are exceptions ie if personal contact details are being retained for archiving or research purposes, indefinite retention of personal data eg contact details will need sign off by the University Data Protection Officer as such a request falls outside of normal personal data retention protocols.   

For example, how likely is it that you will still be based at Leeds University 10/15 years from today? And in line with the university storage infrastructure where will the encrypted personal data be stored for long term access?   

If you do have a rationale for indefinite retention, we would recommend documenting the exact reasons for wanting to keep personal details indefinitely and for what specific purpose, and then email your justification to the DPO@leeds.ac.uk.  However once this purpose has been documented and signed off, you cannot then later use the personal data being retained indefinitely for a different purpose.  

## Access to data for peer review 

Data associated with a paper needs to be made available for peer review. The papers authors should not know who the reviewers are and, in double blind peer review, the reviewers should not know the authors.  

### Potential solutions 

1. **Make the data available in the repository**. Don't mint a DOI. Send the URL to the reviewers. Include a prominent note on the eprint record 'This data is associated with a paper which has been submitted for publication. The data may be subject to change [date]. Full details of the associated publication and the final dataset will be made available in due course. 
2. **Make the data available in RADAR**. Repository account enables access to the dataset only from specific user account(s).
3. **Share the data via OneDrive**. This may not be suitable for double blind peer review. However, if the journal can act as a liaison point i.e. the editor is given access to the OneDrive data, the journal could then provide access details to the peer reviewers. This could be a good solution if the journal is willing to do this. 
4. **Share the data in another repository** - Figshare, Zenodo - which supports restricted access prior to publication of a dataset. This is a good way to share data with a restricted group, but may not be suitable for single or double blind peer review - unless the journal publisher can act as the access gateway as in the OneDrive model outlined in 3. One downside - why bother to deposit in RDL if the data is already in Figshare or similar? 
5. **Ask the journal if they can help** - there may be a mechanism for providing access to the data. This may not be in place. There is a risk data will become supplementary information or be deposited in another repository (if we see this as a problem) so reduces the role for RDL.  

### File Sizes

These limits should be guided primarily by considerations around reuse, but some are in place to guard against the failure of processes to complete due to insufficient space/compute resource.

**Individual files**

* 2 GByte individual file limit for hybrid ingestion
* 10 GByte preferred individual file limit for back-end ingestion 
* If individual file above 10 GBytes investigate and break into smaller files. 
* If individual file above 10 GBytes and cannot sensibly be broken into smaller files allow back-end ingestion up to 20 GBytes 
  
We will have to address what to do with individual files above 20 GBytes in the next round of repository/delivery development 

**Dataset size**

* 20 GByte dataset limit for hybrid ('normal') ingestion 
* 50 GByte  preferred limit for single dataset (ePrint) using back-end ingestion 
* If dataset above 50 GBytes investigate and break into smaller datasets as a collection 
* If dataset above 50 GBytes and cannot sensibly be broken into smaller datasets allow ingestion up to 200 GBytes 
* If dataset above 200 GBytes must break into smaller datasets as a collection 


