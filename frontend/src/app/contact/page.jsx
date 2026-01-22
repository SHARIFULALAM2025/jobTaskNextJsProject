export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-md">
        <p className="text-lg mb-4">
          Get in touch with us for any questions or support.
        </p>
        <div className="space-y-2">
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
        </div>
      </div>
    </div>
  )
}