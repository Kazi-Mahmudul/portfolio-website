export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle contact form submission
    const { name, email, message } = req.body;
    
    // For now, just return success
    // In production, you'd integrate with email service
    res.status(200).json({ 
      success: true, 
      message: 'Message received successfully!' 
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}