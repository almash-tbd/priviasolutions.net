import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("=============================================");
    console.log("NEW CONTACT FORM SUBMISSION RECEIVED (SERVER)");
    console.log("=============================================");
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
    console.log(`Interest: ${data.interest}`);
    console.log(`Message: ${data.message}`);
    console.log(`Timeline: ${data.timeline || "N/A"}`);
    console.log(`Budget: ${data.budget || "N/A"}`);
    console.log("=============================================");

    return NextResponse.json({ success: true, message: "Contact details logged successfully." });
  } catch (error) {
    console.error("Error processing contact submission on server:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
