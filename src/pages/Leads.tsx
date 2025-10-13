import { getLeads } from "@/services/leads";
import { formatDate } from "@/lib/utils";
import React from "react";
import type { ILead } from "@/lib/type";

function Leads() {
  const [leads, setLeads] = React.useState<ILead[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getLeads();
        setLeads(result ?? []);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="text-muted-foreground">Loading leads…</div>
      </div>
    );
  }

  if (!leads.length) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="text-muted-foreground">No leads found.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold mb-6">Leads</h1>

      {/* Responsive table for medium+ and stacked cards on mobile */}
      <div className="hidden md:block bg-white shadow overflow-hidden rounded-md">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">
                  {lead.full_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                  {lead.phone_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {formatDate(lead.date ?? "")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="md:hidden space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  {lead.full_name}
                </div>
                <div className="text-sm text-slate-600">
                  {lead.phone_number}
                </div>
              </div>
              <div className="text-xs text-slate-500">
                {formatDate(lead.date ?? "")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leads;
