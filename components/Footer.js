export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 text-sm">
          <a href="/terms-of-service" className="hover:text-blue-300">Terms of Service</a>
          <a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a>
          <a href="/affiliate-disclosure" className="hover:text-blue-300">Affiliate Disclosure</a>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          © 2025 HVAC Lead Generation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
