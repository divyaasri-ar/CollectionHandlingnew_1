export interface CustomerSupportTicket {
    id?: number;
    customerId: number;
    selectedIssue: string;
    otherIssue: string;
    email: string;
}