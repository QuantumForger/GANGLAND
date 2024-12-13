'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Lightbulb, Users } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => (
  <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
    <div className="absolute inset-0 opacity-20">
      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
    </div>
    <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
      <motion.h1 
        className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Every business deserves the power of AI
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-200 mt-6 leading-relaxed font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        At Quantum AI Forge, we've revolutionized the AI implementation process. Our mission isn't just about providing AI tools; it's about ensuring businesses of all sizes can successfully integrate and benefit from AI technology.
      </motion.p>
    </div>
  </section>
)

const TeamSection = () => {
  const teamMembers = [
    {
      id: "1",
      name: "Elara Quantum",
      role: "Founder & CEO",
      story: "Growing up in a family of small business owners, I saw firsthand the struggles of competing in a rapidly digitalizing world.",
      image: "/images/avatar-placeholder.png",
    },
    {
      id: "2",
      name: "Zephyr Nexus",
      role: "Chief AI Architect",
      story: "My fascination with AI began in college, but it was a local diner's closure that made me realize the real-world impact of technology.",
      image: "/images/avatar-placeholder.png",
    },
  ];

  return (
    <section className="mt-32 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">The Faces Behind Our Mission</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
            <CardContent className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-purple-400 mb-4">{member.role}</p>
              <p className="text-sm text-gray-100">{member.story}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const ClosingSection = () => (
  <section className="max-w-3xl mx-auto text-center mt-32 px-4 pb-24">
    <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
    <p className="text-xl text-gray-200 leading-relaxed mb-8 font-medium">
      At Quantum AI Forge, we're not just implementing AI; we're revolutionizing how businesses approach AI adoption. With our proven strategies, any company can harness the power of AI to achieve remarkable growth.
    </p>
    <Link href="/contact">
      <Button size="lg" className="bg-purple-600 hover:bg-purple-500">
        Let's Write Your AI Success Story
      </Button>
    </Link>
  </section>
)

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <HeroSection />
      <TeamSection />
      <ClosingSection />
    </div>
  );
}
