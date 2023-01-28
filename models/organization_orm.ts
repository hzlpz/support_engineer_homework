export interface Organization {
    createddate:                       Date;
    updateddate:                       Date;
    deletedat:                         Alloyuserid;
    id:                                string;
    orgname:                           string;
    shopifystoreid:                    number;
    myshopifydomain:                   string;
    numbillingretries:                 number;
    numfailedcyclesbeforecancel:       number;
    delaybetweenretries:               number;
    logo:                              Alloyuserid;
    billingtime:                       Date;
    billingtimezone:                   string;
    initialsubscriptionimportcomplete: boolean;
    monthlyfee:                        Alloyuserid;
    pertransactionfee:                 Alloyuserid;
    pertransactionpercentagefee:       Alloyuserid;
    billingstartdate:                  Alloyuserid;
    account:                           Account;
    alloyuserid:                       Alloyuserid;
    activeworkflows:                   Account;
    setup:                             string;
    outofstockbehavior:                Outofstockbehavior;
    cancellationmessage:               Alloyuserid;
    hasvisitedretention:               boolean;
    rewardspointmeaningid:             Alloyuserid;
    hasotpenabled:                     boolean;
    instagramuserdata:                 Account;
    lookerdashboardprefix:             Lookerdashboardprefix;
}

export enum Account {
    Empty = "{}",
}

export enum Alloyuserid {
    Null = "NULL",
    The63C868C71275A771Dcc6Fe7B = "63c868c71275a771dcc6fe7b",
}

export enum Lookerdashboardprefix {
    EmbedDashboardsNext28EmbedDomain = "/embed/dashboards-next/28?embed_domain=",
}

export enum Outofstockbehavior {
    CreateAlways = "CREATE_ALWAYS",
}
