---
layout: page
sectionmenu: dmp
title: Storage and Backup
permalink: /data-management/storage-and-backup/
---

## Data Appraisal

At project end the data appraised for retention will be converted to appropriate formats (on the advice of local data management experts) before being submitted to a repository. These above file formats have been chosen because they are accepted standards and in widespread use.   

Data seen to be of long term value will be deposited in a trusted repository such as the institutional research data repository (Research Data Leeds) in accordance with the University Research Data Management Policy (http://library.leeds.ac.uk/research-data-policies).   

## Backup and data security procedures

_Updated Feb 2020_

During the active phase of the study research data will be stored on the University of Leeds SAN (Storage Area Network) located behind the University’s Institutional firewall to include: 
* Enterprise level disk storage and file servers located in physically secure data centres with appropriate fire suppression equipment
* Snapshots taken every day at 10pm (and accessible for 1 month) of which snapshots are user recoverable from the desktop
* A full back up to tape is taken once every month and an incremental copy to backup tape is taken every night (and kept for 28 days)
* Every quarter, the most recent set of full dump tapes are moved to a long term storage facility where they are kept for 12 months
* Tapes are initially stored in on-campus fireproof safes and then moved to off-campus secure locations.  

### N: Drive brief 

Electronic data will be stored on the University of Leeds N: drive (collaborative) storage service, which comprises enterprise level disk storage and file servers replicated between two on-campus and one off-campus data centres. Data is protected by 4-hourly, daily and monthly snapshots. [updated Aug 2018] 

### N: Drive detailed 

Data will be stored on the University of Leeds N: drive (collaborative) storage service, which comprises enterprise level disk storage and file servers distributed across physically separate and secure data centres with appropriate fire suppression equipment. Data is synchronously replicated between the storage units in the two on-campus data centres. A further copy of this data is asynchronously replicated every 4 hours to a third off-campus storage unit. NAS layer snapshots, that are accessible by end users, are taken every day between 10pm-midnight and are retained for up to 64 days dependent on the data churn rate. Further system level snapshots, which are only accessible by system administrators, are taken and retained on the following schedule: Every 4 hours (retained for 25 hours), every 24 hours (retained for 28 days), once a month (retained for 52 weeks). All snapshots are replicated using the same synchronous/asynchronous schedules and to the same storage locations as described for data storage. Both the storage and NAS layers are located behind the University’s Institutional firewall to protect against external attacks. 

### File naming convention and directory structure 

Files will be systematically named and stored, with a code the whole team recognises.  

The file structure for the qualitative will include clear indication of the folder storing the data 

There will be a separate folder for each area of testing  

We will produce a reference document that outlines this methodology including anonymised participant number and description of the type of data (transcription, interview audio, class room image, workbook page x, etc 

### Active /short term storage 

1. The primary data store will be the project University’s N: drive folder which will be created by the IT team at award stage.  
2. All portable devices will be encrypted to allow for working practices that require data to be stored on laptops or other portable devices for a short period before being transferred to the N: drive, 
3. Access to any non-public data from personal devices will be via Desktop Anywhere only unless they are encrypted to FIPS 140-2 and only accessible by the research team.   

### Portable devices / Laptop / USB’s:  Data collection / One drive / Dropbox 

All personal, mobile devices used for university business e.g. laptops need University encryption:

<http://it.leeds.ac.uk/info/27/get_connected/264/encryption_faqs-laptops>

Where personal data is being processed, the Faculty IT Manager will be contacted to arrange a secure N: drive folder location where permissions will be set to enable appropriate levels of access.  

* I am using Desktop Anywhere to access project data via a portable device encrypted with the University’s mandatory encryption software (Sophos Safeguard). 
* I am using University purchased/supplied laptops / USB’s for data collection that includes Worldwide laptop insurance and SafeStick encrypted USB memory sticks for secure data backup / transfer.  
* On the rare occasion I will need to use an iPad, access is secured via a complex alpha-numeric passcode (not just a 4-digit PIN) which is set to erase all data after 10 incorrect attempts. 

The following information regarding use of encrypted laptops abroad: 

<http://it.leeds.ac.uk/info/127/information_security_your_role/263/travelling_abroad_with_an_encrypted_laptop_and_data>

Recordings made on a portable device will be deleted as soon as they have been transcribed / copied in a digital audio form to the N: drive folder. An audio recorder that records to removal media (such as SD cards) will be used as these can be securely erased at the end of the project using a utility such as [CyberShredder](http://goo.gl/5ItjU).

The primary data store will be the project N: drive folder which will be created by the IT team at award stage. However some working practices, such as archival research or fieldwork, may require data to be stored on laptops or other portable devices for a short period before it is transferred to the N: drive, taking into account both the likelihood and impact of both data loss and data exposure when doing so. These portable devices will be encrypted if any non-public (including personal or sensitive) data needs to be stored on them. Access to any non-public data from personal devices will be via Desktop Anywhere only unless they are encrypted to FIPS 140-2 and only accessible by the research team. 

### Fieldwork 

Access to any non-public data from personal devices will be via Desktop Anywhere only unless they are encrypted to FIPS 140-2 and only accessible by the research team. 

### Events / workshops / focus groups etc 

Any credit card information taken on payment for project led conferences, workshops, dissemination events will ONLY be processed using a PCI-DSS compliant system. 

University policy requires that such payments are only permitted via the conference office or using http://store.leeds.ac.uk (or in exceptional circumstances using a 3rd party PCI-DSS compliant provider, such as WorldPay).  Under no circumstances will any card details be collected via a local website. 

Any personal data collected will be deleted within a reasonable time after the end of the event e.g. 6 week retention of a record of attendance in the form of name, institution only (i.e. no home addresses / phone numbers) 

Any website used to collect personal data (names / addresses etc.) will contain a suitable privacy statement detailing what information is being collected, what it will be used for, when it will be destroyed and what, if any, data will be retained and for what purpose. A sample statement is here, which may be amended to suit. http://www.leeds.ac.uk/privacy. http://goo.gl/bJ0NO 

### Data collected will contain sensitive information 

Care will be taken to ensure their security. Data will be stored during the fieldwork phase on laptops encrypted to FIPS 140-2, using University Encryption Standard software. Digital photographs and audio-recordings will be securely erased from SD cards (using software such as CyberShredder) once they are transferred to laptops. During fieldwork data will be backed up onto hardware encrypted memory sticks such as Imation Ironkey. These encrypted memory sticks would be couriered to Leeds at regular intervals, or carried back by the PI. Once in Leeds the data would be stored securely on the University of Leeds SAN (Storage Area Network), which comprises enterprise level disk storage and file servers located in physically secure data centres with appropriate fire suppression equipment. Snapshots are taken every day at 10pm (and accessible for 1 month). A second level of snapshots is taken every month and are kept for 11 months. Snapshots are user recoverable from the desktop. A full back up to tape is taken once every month and an incremental copy to backup tape is taken every night (and kept for 28 days). Every quarter, the most recent set of full dump tapes are moved to a long term storage facility where they are kept for 12 months. Tapes are initially stored in on-campus fireproof safes and then moved to off-campus secure locations. The SAN is located behind the University’s Institutional firewall to protect against external attacks. 

 