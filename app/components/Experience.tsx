const Experience = () => {
  return (
    <div>
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Experience</h2>
          <div className="space-y-6">

             <div className="bg-gray-800/50 p-6 rounded-lg cyber-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
              <h3 className="text-xl font-semibold mb-2 text-[#0fa] group-hover:neon-text transition-all duration-300">Software Developer Intern at Hawan Tech</h3>
              <p className="text-gray-400 mb-4">March 2025 - December 2025</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Built full-stack features using Next.js + React frontend and Python backend.</li>
                <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                <li>Developed scalable backend services using FastAPI and Python for automation workflows and AI-driven pipelines.</li>
                <li>Engineered WhatsApp notification automation using Twilio APIs to improve communication workflows.</li>
                <li>Worked on multilingual AI-driven shloka explanation systems using agent-based architecture.</li>
                <li>Participated in code reviews and contributed to team knowledge sharing.</li>
              </ul>
            </div>   

            <div className="bg-gray-800/50 p-6 rounded-lg cyber-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
              <h3 className="text-xl font-semibold mb-2 text-[#0fa] group-hover:neon-text transition-all duration-300">Flutter Developer at Evening Coders</h3>
              <p className="text-gray-400 mb-4">June 2024 - November 2024</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Built production-grade Flutter mobile applications with scalable REST API integrations.</li>
                <li>Integrated backend services with MongoDB, Firebase, and Stripe payment workflows.</li>
                <li>Participated in code reviews and contributed to team knowledge sharing.</li>
                <li>Improved app performance through optimized API handling and efficient state management.</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
            
          </div>
        </div> 
    </div>
  )
}

export default Experience