export interface PostSecureUrl {
    url: string, 
    dateExpiryFormat: "Hours" | "Days" | "Years" | null,
    dateExpiry: number | null,
    clickExpiry: number | null,
    passphrase: string | null,   
}