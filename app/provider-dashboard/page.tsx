"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Header } from "@/components/layout/Header";
import { MapPin, Clock, IndianRupee } from "lucide-react";
import type { Database } from "@/types/supabase";

type ServiceRequest = Database['public']['Tables']['service_requests']['Row'];

export default function ProviderDashboard() {
  const [leads, setLeads] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    // 1. Fetch initial open leads (in a real app, filter by provider's services/location)
    const fetchLeads = async () => {
      const { data } = await supabase
        .from('service_requests')
        .select('*')
        .eq('status', 'searching')
        .order('created_at', { ascending: false }) as { data: ServiceRequest[] | null };
      
      if (data) setLeads(data);
    };

    fetchLeads();

    // 2. Subscribe to new incoming leads via Supabase Realtime
    const channel = supabase
      .channel('public:service_requests')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'service_requests' },
        (payload) => {
          const newLead = payload.new as ServiceRequest;
          if (newLead.status === 'searching') {
            setLeads((current) => [newLead, ...current]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmitBid = async (leadId: string) => {
    const amount = prompt("Enter your bid amount (₹):");
    if (!amount) return;
    
    // In a real app, provider_id would come from Auth.
    const mockProviderId = "11111111-1111-1111-1111-111111111111";

    const { error } = await (supabase.from('bids') as any)
      .insert({
        request_id: leadId,
        provider_id: mockProviderId,
        amount: parseInt(amount),
        status: 'pending'
      });

    if (!error) {
      alert("Bid submitted successfully!");
    } else {
      console.error(error);
      alert("Failed to submit bid.");
    }
  };

  return (
    <div className="min-h-screen bg-page">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-ink">Provider Dashboard</h1>
            <p className="text-muted">Live Leads & Bidding Arena</p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Listening for Leads
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.length === 0 ? (
            <div className="col-span-full card-base p-12 text-center text-muted">
              No new leads in your area. Waiting for customers...
            </div>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className="card-base p-6 hover:border-brand-200 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-brand-50 text-brand-deep text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {lead.service_type.replace(/-/g, " ")}
                  </span>
                  <span className="text-xs text-muted">Just now</span>
                </div>
                
                <p className="text-ink font-medium mb-4 line-clamp-3">
                  {(lead.requirements as any)?.description || "No specific description provided."}
                </p>

                <div className="space-y-2 mb-6 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{(lead.location as any)?.address || "Noida"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(lead.scheduled_for).toLocaleDateString()}</span>
                  </div>
                  {lead.budget_min && lead.budget_max && (
                    <div className="flex items-center gap-2 font-medium text-ink">
                      <IndianRupee className="w-4 h-4" />
                      <span>₹{lead.budget_min} - ₹{lead.budget_max} (Customer Budget)</span>
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => handleSubmitBid(lead.id)}
                    className="w-full btn-primary h-[44px]"
                  >
                    Submit Bid
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
