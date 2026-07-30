"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CheckCircle, UploadCloud, ShieldAlert, FileText, Camera } from "lucide-react";

export default function KYCUploadPage() {
  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [documents, setDocuments] = useState({
    aadhaarFront: null as File | null,
    aadhaarBack: null as File | null,
    policeVerification: null as File | null,
    selfieVideo: null as File | null
  });

  const handleFileChange = (field: keyof typeof documents) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments(prev => ({ ...prev, [field]: e.target.files![0] }));
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    // Mocking an upload delay
    await new Promise(res => setTimeout(res, 2000));
    setUploading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-page">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-ink mb-4">Verification Submitted</h1>
          <p className="text-muted text-lg mb-8">
            Your documents have been securely uploaded. The MOYO Trust & Safety team will review them within 48 hours. You'll be notified via WhatsApp once approved.
          </p>
          <a href="/provider-dashboard" className="btn-primary inline-flex">Return to Dashboard</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page pb-24">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-ink mb-4">Complete Your KYC</h1>
          <p className="text-muted text-lg">
            MOYO is built on trust. We need to verify your identity before you can bid on customer requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Progress Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className={`p-4 rounded-xl border ${step >= 1 ? 'border-brand bg-brand-50' : 'border-line bg-white'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-brand text-white' : 'bg-gray-100 text-muted'}`}>1</div>
                <span className={`font-semibold ${step >= 1 ? 'text-brand-deep' : 'text-muted'}`}>Aadhaar Card</span>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${step >= 2 ? 'border-brand bg-brand-50' : 'border-line bg-white'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-brand text-white' : 'bg-gray-100 text-muted'}`}>2</div>
                <span className={`font-semibold ${step >= 2 ? 'text-brand-deep' : 'text-muted'}`}>Police Verification</span>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${step >= 3 ? 'border-brand bg-brand-50' : 'border-line bg-white'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-brand text-white' : 'bg-gray-100 text-muted'}`}>3</div>
                <span className={`font-semibold ${step >= 3 ? 'text-brand-deep' : 'text-muted'}`}>Selfie Video</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">Your documents are encrypted and securely stored. They will never be shared without your consent.</p>
            </div>
          </div>

          {/* Main Upload Area */}
          <div className="md:col-span-2">
            <div className="card-base p-8">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-xl font-bold text-ink mb-6">Upload Aadhaar Card</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Front Side</label>
                      <div className="border-2 border-dashed border-line rounded-xl p-8 text-center hover:border-brand hover:bg-brand-50 transition-colors cursor-pointer relative">
                        <input type="file" accept="image/*" onChange={handleFileChange('aadhaarFront')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <UploadCloud className="w-10 h-10 text-brand mx-auto mb-4" />
                        <span className="text-ink font-medium">{documents.aadhaarFront ? documents.aadhaarFront.name : "Tap to upload Front Side"}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Back Side</label>
                      <div className="border-2 border-dashed border-line rounded-xl p-8 text-center hover:border-brand hover:bg-brand-50 transition-colors cursor-pointer relative">
                        <input type="file" accept="image/*" onChange={handleFileChange('aadhaarBack')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <UploadCloud className="w-10 h-10 text-brand mx-auto mb-4" />
                        <span className="text-ink font-medium">{documents.aadhaarBack ? documents.aadhaarBack.name : "Tap to upload Back Side"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button 
                      disabled={!documents.aadhaarFront || !documents.aadhaarBack}
                      onClick={() => setStep(2)} 
                      className="btn-primary disabled:opacity-50"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-xl font-bold text-ink mb-6">Upload Police Verification</h2>
                  <p className="text-muted text-sm mb-6">Upload a clear photo or PDF of your recent police verification document.</p>
                  
                  <div>
                    <div className="border-2 border-dashed border-line rounded-xl p-12 text-center hover:border-brand hover:bg-brand-50 transition-colors cursor-pointer relative">
                      <input type="file" accept="image/*,.pdf" onChange={handleFileChange('policeVerification')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <FileText className="w-12 h-12 text-brand mx-auto mb-4" />
                      <span className="text-ink font-medium">{documents.policeVerification ? documents.policeVerification.name : "Tap to upload Verification Document"}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(1)} className="text-muted font-medium hover:text-ink">Back</button>
                    <button 
                      disabled={!documents.policeVerification}
                      onClick={() => setStep(3)} 
                      className="btn-primary disabled:opacity-50"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-xl font-bold text-ink mb-6">Record a 15-Second Intro Video</h2>
                  <p className="text-muted text-sm mb-6">Introduce yourself to customers. Tell them your name, what service you provide, and your years of experience.</p>
                  
                  <div>
                    <div className="border-2 border-dashed border-line rounded-xl p-12 text-center hover:border-brand hover:bg-brand-50 transition-colors cursor-pointer relative">
                      <input type="file" accept="video/*" capture="user" onChange={handleFileChange('selfieVideo')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <Camera className="w-12 h-12 text-brand mx-auto mb-4" />
                      <span className="text-ink font-medium">{documents.selfieVideo ? documents.selfieVideo.name : "Tap to Record Video"}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(2)} className="text-muted font-medium hover:text-ink">Back</button>
                    <button 
                      disabled={!documents.selfieVideo || uploading}
                      onClick={handleUpload} 
                      className="btn-primary disabled:opacity-50"
                    >
                      {uploading ? "Encrypting & Uploading..." : "Submit Verification"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
