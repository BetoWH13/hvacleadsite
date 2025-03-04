import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaWrench, FaSnowflake, FaFire, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";

export default function HVACLeadForm() {
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!zipCode || !email) return;
    
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zipCode, email })
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        {/* SEO-Optimized Section for Common HVAC Issues */}
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white text-gray-800 shadow-md rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2"><FaSnowflake /> Common HVAC Problems and Repairs Near You</h2>
          <p className="text-gray-700 mb-3">Having trouble with your heating or cooling system? Find solutions for the most common HVAC issues below.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dirty Filters:</strong> Can restrict airflow and reduce efficiency. Regular filter changes help.</li>
            <li><strong>Thermostat Malfunctions:</strong> Incorrect settings or battery issues can cause heating/cooling failures.</li>
            <li><strong>Refrigerant Leaks:</strong> If your AC isn't cooling properly, it might be low on refrigerant.</li>
            <li><strong>Drainage Problems:</strong> Clogged drains can cause water damage and reduce efficiency.</li>
            <li><strong>Mechanical Wear & Tear:</strong> Over time, parts like belts and motors can break down.</li>
            <li><strong>Ignition or Pilot Control Issues:</strong> Common in furnaces, can prevent proper heating.</li>
            <li><strong>Electrical Component Failures:</strong> Bad wiring, capacitor issues, or blown fuses can lead to system failure.</li>
          </ul>
          <p className="mt-3 text-gray-700">If you're experiencing any of these issues, enter your ZIP code below to find an <strong>HVAC repair technician near you</strong> today!</p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-md w-full p-6 bg-white text-gray-800 shadow-lg rounded-2xl mt-8">
            <CardContent>
              <h1 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
                <FaWrench /> Find a Local HVAC Technician Near You
              </h1>
              {submitted ? (
                <div className="text-center">
                  <p className="text-green-600 font-semibold">Your request has been submitted! A technician will contact you shortly.</p>
                  <a 
                    href="//leads.leadsmartinc.com/?api_key=8a982b9fc74db2f93fd5f65045f5a1e370ca59ff&affiliate_source=albertowaizel1&category=8&funnel=3&buttons=btn-success&step=1" 
                    className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >Find a Technician</a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700">Enter Your ZIP Code</span>
                    <div className="flex items-center border rounded-lg shadow-sm p-2">
                      <FaMapMarkerAlt className="text-gray-500 mr-2" />
                      <input 
                        type="text" 
                        className="w-full focus:outline-none" 
                        value={zipCode} 
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Enter Your Email</span>
                    <input 
                      type="email" 
                      className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <p className="text-xs text-gray-500">By submitting, you acknowledge that we are **not HVAC technicians** but an independent affiliate connecting customers with local service providers. See our <a href="/privacy-policy" className="underline">Privacy Policy</a> for details.</p>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded-lg hover:opacity-90">Find a Technician</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
