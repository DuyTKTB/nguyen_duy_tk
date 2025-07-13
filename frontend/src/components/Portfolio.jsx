import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "🔧 Lập trình",
      skills: ["JavaScript", "Python", "HTML/CSS", "Lua (Roblox)", "C# (Unity)"],
      description: "Fullstack development từ backend Flask đến frontend UI/UX"
    },
    {
      title: "🎨 Thiết kế", 
      skills: ["UI/UX Design", "Dashboard Design", "Dark Mode", "Responsive Design"],
      description: "Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng"
    },
    {
      title: "🎵 Âm nhạc & Code",
      skills: ["Music Programming", "DAW", "MIDI", "Interactive Audio", "Sound Effects"],
      description: "Kết hợp âm nhạc với công nghệ, tạo trải nghiệm mới lạ"
    }
  ];

  const projects = [
    {
      title: "Web Applications",
      description: "Phát triển nhiều dự án web-app với giao diện hiện đại"
    },
    {
      title: "Facebook Management Tool", 
      description: "Phần mềm quản lý nick Facebook chuyên nghiệp"
    },
    {
      title: "3D Games",
      description: "Game 3D trên Roblox và Unity với yếu tố âm thanh tương tác"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Tk
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Avatar and Introduction */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Avatar */}
            <div className="text-center mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-purple-400/50 shadow-2xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                  alt="Nguyễn Duy TK" 
                  className="rounded-full"
                />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold">
                  TK
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold text-white mb-2">Nguyễn Duy TK</h2>
              <p className="text-purple-300 text-lg">Tech Expert • Developer • Music Creator</p>
            </div>

            {/* Introduction Text */}
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Nguyễn Duy TK là một chuyên gia công nghệ trẻ đầy nhiệt huyết, nổi bật với khả năng lập trình chuyên sâu, 
                thiết kế giao diện hiện đại, và đặc biệt là sáng tạo âm nhạc kết hợp lập trình. Với tư duy logic, 
                gu thẩm mỹ tinh tế và tư duy sáng tạo vượt khuôn mẫu, Nguyễn Duy TK không chỉ là một developer, 
                mà còn là một nghệ sĩ công nghệ đúng nghĩa.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">Kỹ Năng Chuyên Môn</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="backdrop-blur-lg bg-white/5 border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h4 className="text-xl font-bold text-white mb-4">{category.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-400/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">Dự Án Nổi Bật</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="backdrop-blur-lg bg-white/5 border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-gradient-to-r border-purple-400/30 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-center text-white mb-6">💡 Sứ Mệnh</h3>
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
              Mang lập trình và sáng tạo đến gần với mọi người – biến ý tưởng thành sản phẩm thực tế, 
              và luôn đi đầu trong việc kết hợp công nghệ với nghệ thuật.
            </p>
            <p className="text-purple-300 text-center text-lg mb-8">
              Nếu bạn cần một lập trình viên tài năng, một designer sáng tạo, hoặc một người có thể lập trình cả âm nhạc, 
              thì Nguyễn Duy TK chính là cái tên bạn nên nhớ đến đầu tiên.
            </p>
            <blockquote className="text-center">
              <p className="text-xl italic text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                "Code là ngôn ngữ của logic. Âm nhạc là ngôn ngữ của cảm xúc. 
                Khi cả hai hòa quyện, bạn có thể tạo ra điều kỳ diệu."
              </p>
              <footer className="mt-4 text-purple-300">— Nguyễn Duy TK</footer>
            </blockquote>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Liên Hệ Hợp Tác
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;