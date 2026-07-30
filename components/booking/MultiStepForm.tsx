"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Search } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface MultiStepFormProps {
  serviceType: string;
}

export function MultiStepForm({ serviceType }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    location: "",
    requirements: {} as any,
    budget_min: "",
    budget_max: "",
    date: ""
  });

  const nextStep = () => setStep((p) => p + 1);
  const prevStep = () => setStep((p) => p - 1);

  const handleSubmit = async () => {
    setLoading(true);
    
    // In a real app, customer_id would come from Auth. Hardcoding for demo.
    const mockCustomerId = "00000000-0000-0000-0000-000000000000";

    const { error } = await (supabase.from('service_requests') as any)
      .insert({
        customer_id: mockCustomerId,
        service_type: serviceType,
        location: { address: formData.location },
        requirements: formData.requirements,
        budget_min: formData.budget_min ? parseInt(formData.budget_min) : null,
        budget_max: formData.budget_max ? parseInt(formData.budget_max) : null,
        scheduled_for: formData.date || new Date().toISOString()
      });

    setLoading(false);
    if (!error) {
      setSuccess(true);
    } else {
      console.error(error);
      alert("Error submitting request");
    }
  };

  if (success) {
    return (
      <div className="card-base p-12 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-ink mb-4">Request Broadcasted!</h2>
        <p className="text-muted mb-8 text-lg">
          Your requirement for {serviceType.replace("-", " ")} has been sent to verified professionals near you. You will start receiving bids shortly.
        </p>
        <button 
          onClick={() => window.location.href = '/dashboard'}
          className="btn-primary"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="card-base p-6 md:p-10 max-w-2xl mx-auto overflow-hidden relative min-h-[500px] flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-line h-2 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-brand"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="absolute inset-0 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-ink mb-2">Where do you need the service?</h3>
              <p className="text-muted mb-8">Enter your location in Noida so we can find nearby professionals.</p>
              
              <div className="relative mb-6">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                <input 
                  type="text"
                  placeholder="e.g. Sector 62, Noida"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none text-ink bg-page"
                />
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none text-ink bg-page"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="absolute inset-0 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-ink mb-2">Service Details</h3>
              <p className="text-muted mb-8">Help professionals understand exactly what you need.</p>
              
              <textarea 
                placeholder="Describe your requirement... (e.g. Need a part-time maid for sweeping and swabbing a 3BHK)"
                rows={5}
                onChange={(e) => setFormData({...formData, requirements: { description: e.target.value }})}
                className="w-full p-4 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none text-ink bg-page resize-none"
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="absolute inset-0 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-ink mb-2">Set Your Price</h3>
              <p className="text-muted mb-8">Suggest a fair budget. Professionals can bid this amount or counter.</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-medium">₹</span>
                  <input 
                    type="number"
                    placeholder="Min"
                    value={formData.budget_min}
                    onChange={(e) => setFormData({...formData, budget_min: e.target.value})}
                    className="w-full pl-8 pr-4 py-4 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none text-ink bg-page"
                  />
                </div>
                <span className="text-muted font-medium">to</span>
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-medium">₹</span>
                  <input 
                    type="number"
                    placeholder="Max"
                    value={formData.budget_max}
                    onChange={(e) => setFormData({...formData, budget_max: e.target.value})}
                    className="w-full pl-8 pr-4 py-4 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none text-ink bg-page"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-auto pt-8">
        {step > 1 ? (
          <button onClick={prevStep} className="btn-secondary h-[48px] px-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </button>
        ) : <div />}

        {step < 3 ? (
          <button 
            onClick={nextStep} 
            disabled={step === 1 && !formData.location}
            className="btn-primary h-[48px] px-8 disabled:opacity-50"
          >
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={loading || !formData.budget_min}
            className="btn-primary h-[48px] px-8 disabled:opacity-50"
          >
            {loading ? "Broadcasting..." : "Broadcast Request"}
          </button>
        )}
      </div>
    </div>
  );
}
