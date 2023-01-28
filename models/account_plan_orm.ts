export interface AccountPlan {
    createddate: Date;
    updateddate: Date;
    deletedat: string;
    id: string;
    shopifyid: string;
    uniqueshopifyid: string;
    receivedfromshopifydate: Date;
    shopifyupdatedate: Date;
    planname: string;
    status: string;
    approvedat: string;
    trialdays: number;
    usagelineitemshopifyid: string;
    planfee: number;
    transactionfee: number;
    percentagefee: number;
    organizationid: string;
    features: string;
    confirmationurl: string;
    trialperiodstart: Date;
    trialperiodend: Date;
    reportusageat: string;
    is_cancelled(): boolean;
}
