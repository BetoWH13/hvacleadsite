import { Card, CardContent } from "../components/ui/card";

export default function AffiliateDisclosure() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <Card className="max-w-3xl w-full p-6 bg-white text-gray-800 shadow-lg rounded-2xl">
        <CardContent>
          <h1 className="text-3xl font-bold mb-6 text-center">Affiliate Disclosure</h1>
          <p className="mb-4">We want to be transparent about our business relationships:</p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Affiliate Relationships:</strong> We may receive compensation when you use our service to connect with HVAC providers.
            </li>
            <li>
              <strong>No Additional Cost:</strong> Our service is free to use, and we do not charge any additional fees.
            </li>
            <li>
              <strong>Impartiality:</strong> We strive to provide unbiased recommendations based on your needs.
            </li>
            <li>
              <strong>Third-Party Services:</strong> We are not responsible for the quality of services provided by third-party HVAC companies.
            </li>
            <li>
              <strong>Your Choice:</strong> You are under no obligation to use any recommended service providers.
            </li>
          </ol>
          <p className="mt-6 text-sm text-gray-600">Last updated: March 4, 2025</p>
        </CardContent>
      </Card>
    </div>
  );
}
