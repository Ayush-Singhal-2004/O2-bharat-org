import { google } from "googleapis";
import path from "path";

async function sendToSheet(name, email, phoneNumber, user) {
    const auth = new google.auth.GoogleAuth({
        "keyFile": path.join(process.cwd(), "credentials.json"),
        "scopes": "https://www.googleapis.com/auth/spreadsheets",
    });
    try {
        const client = await auth.getClient();
        const googleSheets = google.sheets({
            "version": "v4",
            "auth": client
        })
        const spreadsheetId = "1fsoyFYsg5o9x6oVq6L55NJv-0k-Mynt14vnwNiTIIY8";
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Sheet1!A:B",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [ name, email, phoneNumber, user ]
                ]
            }
        })
    } 
    catch(error) {
        console.log(error);
    }
}

export default sendToSheet;