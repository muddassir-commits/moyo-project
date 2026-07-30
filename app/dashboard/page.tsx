"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Header } from "@/components/layout/Header";
import { Check, X, ShieldCheck } from "lucide-react";
import type { Database } from "@/types/supabase";

type ServiceRequest = Database['public']['Tables']['service_requests']['Row'];
type Bid = Database['public']['Tables']['bids']['Row'];

interface ExtendedRequest extends ServiceRequest {
  bids: Bid[];
}

export default function CustomerDashboard() {
  const [requests, setRequests] = useState<ExtendedRequest[]>([]);

  useEffect(() => {
    const fetchMyRequests = async () => {
      // In a real app, filter by current logged-in customer_id
      const mockCustomerId = "00000000-0000-0000-0000-000000000000";

      const { data: reqData } = await supabase
        .from('service_requests')
        .select('*')
        .eq('customer_id', mockCustomerId)
        .order('created_at', { ascending: false }) as { data: ServiceRequest[] | null };

      if (reqData && reqData.length > 0) {
        // Fetch bids for these requests
        const requestIds = reqData.map((r: ServiceRequest) => r.id);
        const { data: bidData } = await supabase
          .from('bids')
          .select('*')
          .in('request_id', requestIds) as { data: Bid[] | null };

        const combined = reqData.map((req: ServiceRequest) => ({
          ...req,
          bids: bidData?.filter((b: Bid) => b.request_id === req.id) || []
        }));

        setRequests(combined);
      }
    };

    fetchMyRequests();

    // Subscribe to new incoming bids
    const channel = supabase
      .channel('public:bids')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'bids' },
        (payload) => {
          const newBid = payload.new as Bid;
          setRequests(current => 
            current.map(req => 
              req.id === newBid.request_id 
                ? { ...req, bids: [...req.bids, newBid] }
                : req
            )
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleAcceptBid = async (bidId: string, requestId: string) => {
    // In a real app, you would start a transaction or edge function here
    // 1. Mark bid as accepted
    await (supabase.from('bids') as any).update({ status: 'accepted' }).eq('id', bidId);
    // 2. Mark request as accepted
    await (supabase.from('service_requests') as any).update({ status: 'accepted' }).eq('id', requestId);
    
    alert("Bid Accepted! The professional has been notified.");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-page pb-24">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-ink mb-2">My Service Requests</h1>
        <p className="text-muted mb-12">Watch live bids come in from verified professionals.</p>

        <div className="space-y-8">
          {requests.length === 0 ? (
            <div className="card-base p-12 text-center text-muted">
              You haven't requested any services yet.
            </div>
          ) : (
            requests.map(req => (
              <div key={req.id} className="card-base p-6 md:p-8">
                <div className="flex flex-wrap gap-4 justify-between items-start border-b border-line pb-6 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-ink uppercase tracking-wide">
                      {req.service_type.replace(/-/g, " ")}
                    </h2>
                    <p className="text-muted mt-1">Scheduled for: {new Date(req.scheduled_for).toLocaleDateString()}</p>
                    <p className="text-muted">Location: {(req.location as any)?.address}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
                    req.status === 'searching' ? 'bg-amber-100 text-amber-800' : 
                    req.status === 'accepted' ? 'bg-green-100 text-green-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {req.status}
                  </div>
                </div>

                <h3 className="font-semibold text-ink mb-4">Live Bids ({req.bids.length})</h3>
                
                {req.bids.length === 0 ? (
                  <div className="flex items-center gap-3 text-muted bg-section-alt p-4 rounded-[12px] border border-line">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-deep"></span>
                    </span>
                    Waiting for professionals to bid on your request...
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {req.bids.map(bid => (
                      <div key={bid.id} className={`p-5 rounded-[12px] border ${bid.status === 'accepted' ? 'border-green-500 bg-green-50' : 'border-line bg-white shadow-sm'}`}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                              {/* Placeholder avatar */}
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${bid.provider_id}`} alt="Provider" />
                            </div>
                            <div>
                              <div className="font-semibold text-ink flex items-center gap-1">
                                Professional <ShieldCheck className="w-4 h-4 text-green-600" />
                              </div>
                              <div className="text-xs text-muted">4.8 ★ (120 reviews)</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-black text-brand">₹{bid.amount}</div>
                            {bid.status === 'accepted' && (
                              <span className="text-green-700 text-xs font-bold uppercase">Accepted</span>
                            )}
                          </div>
                        </div>

                        {req.status === 'searching' && (
                          <div className="flex gap-3 mt-4">
                            <button 
                              onClick={() => handleAcceptBid(bid.id, req.id)}
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                              <Check className="w-4 h-4" /> Accept
                            </button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-ink font-medium rounded-lg transition-colors">
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
