import { Card, CardContent } from "../components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <Card className="max-w-3xl w-full p-6 bg-white text-gray-800 shadow-lg rounded-2xl">
        <CardContent>
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="mb-4">Your privacy is important to us. This policy explains how we handle your information:</p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Information Collection:</strong> We collect your ZIP code and email address when you submit a lead.
            </li>
            <li>
              <strong>Use of Information:</strong> Your information is used to connect you with local HVAC service providers.
            </li>
            <li>
              <strong>Data Sharing:</strong> We share your information with our partner HVAC companies to fulfill your request.
            </li>
            <li>
              <strong>Security:</strong> We implement security measures to protect your information.
            </li>
            <li>
              <strong>Your Rights:</strong> You may request to access or delete your information at any time.
            </li>
          </ol>
          <p className="mt-6 text-sm text-gray-600">Last updated: March 4, 2025</p>
        </CardContent>
      </Card>
    </div>
  );
}
