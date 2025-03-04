import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <Card className="max-w-3xl w-full p-6 bg-white text-gray-800 shadow-lg rounded-2xl">
        <CardContent>
          <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
          <p className="mb-4">Welcome to our HVAC lead generation service. By using our website, you agree to these terms:</p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Service Description:</strong> We connect homeowners with local HVAC service providers.
            </li>
            <li>
              <strong>User Responsibilities:</strong> You must provide accurate information when submitting a lead.
            </li>
            <li>
              <strong>Third-Party Services:</strong> We are not responsible for the quality of services provided by third-party HVAC companies.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> We are not liable for any damages resulting from the use of our service.
            </li>
            <li>
              <strong>Changes to Terms:</strong> We may update these terms at any time without notice.
            </li>
          </ol>
          <p className="mt-6 text-sm text-gray-600">Last updated: March 4, 2025</p>
        </CardContent>
      </Card>
    </div>
  );
}
