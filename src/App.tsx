import { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const Header = () => {
    return (
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-dark-100/80 backdrop-blur-lg border-b border-gray-800/50"
      >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <img src="/pumpsite/logo.png" alt="Pump Logo" className="h-24" />
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </nav>
      </motion.header>
    );
  };

  return (
    <div className="min-h-screen bg-dark-100 text-white">
      <Header />
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative min-h-[120vh] flex items-start justify-center pt-32">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-[url('/pump-website/hero.png')] bg-cover"
          style={{
            backgroundPosition: "center top",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-dark-100/70 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 max-w-3xl mx-auto"
        >
          <motion.img
            src="/pumpsite/logo.png"
            alt="Pump Logo"
            className="w-40 h-40 mx-auto mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Your social fitness companion. Share workouts, track progress, and
            build a community that keeps you motivated through streaks and
            challenges.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={() => scrollToSection("waitlist")}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="px-8 py-3 bg-dark-300 rounded-lg font-semibold text-lg border border-gray-700 hover:border-primary/50 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* App Preview Sections */}
      <section id="features" className="py-20 px-4 bg-dark-200">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Social Feed Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Share Your Progress
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Post your workouts, track your progress, and inspire others on
                their fitness journey. Build a community of like-minded
                individuals who push each other to reach new heights.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-primary/80">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Daily Streaks
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Progress Tracking
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="/src/assets/pump2.png"
                  alt="Social Feed Preview"
                  className="rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Workout Tracking Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col-reverse md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="/src/assets/pump1.png"
                  alt="Workout Tracking Preview"
                  className="rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Track Your Workouts
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Log your exercises, sets, and reps with our intuitive workout
                tracker. Watch your strength grow over time with detailed
                progress charts and milestone celebrations.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-primary/80">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Exercise Library
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Progress Charts
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Build Your Community
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Connect with friends, join fitness groups, and participate in
                challenges. Give and receive motivation from your fitness
                community to stay consistent.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-primary/80">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Group Challenges
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Friend System
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="/src/assets/pump3.png"
                  alt="Community Features Preview"
                  className="rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="waitlist" className="py-20 px-4 bg-dark-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-300 p-8 md:p-12 rounded-2xl border border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Be the First to Know
            </h2>
            <p className="text-gray-300 mb-8">
              Join our waitlist to get early access and exclusive updates about
              Pump.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                // Add your form submission logic here
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
                setSubmitted(true);
                setIsLoading(false);
              }}
            >
              {!submitted ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-dark-100 rounded-lg border border-gray-700 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                        />
                        Joining...
                      </span>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 font-medium"
                >
                  Thanks for joining! We'll be in touch soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/pumpsite/logo.png"
                alt="Pump Logo"
                className="w-24 h-24 mb-4"
              />
              <p className="text-gray-400">
                Transform your fitness journey with the power of community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-primary transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("waitlist")}
                    className="hover:text-primary transition-colors"
                  >
                    Join Waitlist
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/sequoia.ai/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Pump. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
