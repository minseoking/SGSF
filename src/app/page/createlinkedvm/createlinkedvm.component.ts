import { Component, OnInit } from '@angular/core';
import { VapiService } from '../../share/service/vapi.service';
import { Vmquerymodel } from '../../model/vm/vmquerymodel';
import { Apiresultmodel } from '../../model/vm/apiresultmodel';

@Component({
  selector: 'app-createlinkedvm',
  templateUrl: './createlinkedvm.component.html',
  styleUrls: ['./createlinkedvm.component.css']
})
export class CreatelinkedvmComponent implements OnInit {
  message : string ='test';
  error : any;
  model : any;
  apiresultmodel : Apiresultmodel;
  vmquerymodel = new Vmquerymodel();
  //constructor() { }
  constructor(private vapiService : VapiService) { }

  ngOnInit() {
  }
  getVmList(){

    console.log("#1");
    this.vmquerymodel.horizonUrl='10.200.80.20';
    this.vapiService.getDesktopPoolAllList(this.vmquerymodel).subscribe(
      data => this.apiresultmodel = data, // success path
      error => this.error = error // error path
    );
    // console.log(this.apiresultmodel);
    // console.log(this.model);
    // console.log(this.error);
  }

  createlinkedfloatingvm(){
    this.vmquerymodel = {
    "horizonUrl": "cloud-cs01.feelaware.cloud",
    "vCenterUrl": "cloud-vc01.feelaware.cloud",
    "poolId": "lmsLFTest5",
    "displayName": "lmsLFTest5",
    "description": null,
    "newVMName": null,
    "userName": "LargoGuest",
    "masterImage": "w764-scpv30-cloud-linked-api",
    "accessGroupName": null,
    "namingPattern": "LMSLF5TEST1",
    "maxNumberOfMachines": 0,
    "numberOfSpareMachines": 0,
    "provisioningTime": null,
    "minNumberOfMachines": 0,
    "snapshotName": "snapshot1",
    "datacenterName": "Cloud-Datacenter",
    "hostName": "Cloud-CL",
    "vmFolderPath": "vm",
    "resourcePoolPath": "Resources",
    "customizationSpecName": "AD-Join-DNS",
    "datastoreList": [
        "CLOUD-DATA01"
    ],
    "vmCount": 0,
    "vmName": "LMSLF5TEST1",
    "specifiedNaming": true,
    "vsan": false,
    "powerPolicyType": "ALWAYS_POWERED_ON",
    "automaticLogoffPolicyType": "NEVER",
    "automaticLogoffMinutes": 120,
    "allowUsersToResetMachines": true,
    "allowMultipleSessionsPerUserForFloating": false,
    "deleteOrRefreshMachineAfterLogoffTypeForFloating": "NEVER",
    "refreshOsDiskAfterLogoffTypeForDedicate": "NEVER",
    "refreshPeriodDaysForReplicaOsDiskForDedicate": 0,
    "refreshThresholdPercentageForReplicaOsDiskForDedicate": 0,
    "defaultDisplayProtocolType": "PCOIP",
    "allowUsersToChooseProtocol": false,
    "enableHTMLAccess": false,
    "renderer3DType": "DISABLED",
    "vRamSizeMB": 96,
    "maxNumberOfMonitors": 3,
    "maxResolutionOfAnyOneMonitorType": "UHD",
    "adobeFlashQualityType": "NO_CONTROL",
    "adobeFlashThrottlingType": "DISABLED",
    "useViewStorageAccelerator": false,
    "regenerateViewStorageAcceleratorDays": 0,
    "blackoutTimes": null,
    "transparentPageSharingScope": "VM",
    "viewComposerDiskTypes": null,
    "domainAdministrator": null,
    "adContainer": null,
    "reclamationThresholdGB": 0,
    "reclaimVmDiskSpace": true,
    "redirectWindowsProfile": true,
    "persistentDiskSizeMB": 2048,
    "persistentDiskDriveLetter": "D",
    "redirectDisposableFiles": true,
    "nonPersistentDiskSizeMB": 4096,
    "nonPersistentDiskDriveLetter": "Auto",
    "useSeparateDatastoresPersistentAndOSDisks": false,
    "useSeparateDatastoresReplicaAndOSDisks": false,
    "provisioningType": null,
    "replicaDiskDatastore": null
}

    console.log("#lfvm1");
    // console.log(this.);
    this.vapiService.createLinkedFloatingDesktopPool(this.vmquerymodel).subscribe(
      data => this.apiresultmodel = data, // success path
      error => this.error = error // error path
    );
    // console.log(this.apiresultmodel);
    // console.log(this.model);
    // console.log(this.error);
  }
}
