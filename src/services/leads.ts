import type { ILead } from "@/lib/type";
import supabase from "./supabase";

export async function getLeads(): Promise<ILead[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("pain_leads")
      .select("*");

    if (error) {
      throw new Error(error);
    }
    return data as ILead[];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function submitLead(lead: {
  full_name: string;
  phone_number: string;
  date: string;
}): Promise<null | ILead[]> {
  try {
    const leads = getLeads();
    const isDuplicate = (await leads).some(
      (existingLead) =>
        existingLead.phone_number == lead.phone_number &&
        existingLead.full_name.toLowerCase() == lead.full_name.toLowerCase()
    );

    if (isDuplicate) {
      return null;
    }
    const { error, data } = await supabase.from("pain_leads").insert([lead]);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
