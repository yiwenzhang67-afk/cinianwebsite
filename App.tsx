import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, Heart, Globe, Eye, ArrowRight, Search, User, Quote } from 'lucide-react';
import { GUESTS } from './constants';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '嘉宾访谈', path: '/guests' },
    { name: '关于我们', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-cinian-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                此
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-cinian-dark tracking-tight">此念文化</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Video Production</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-cinian-blue border-b-2 border-cinian-blue'
                    : 'text-gray-600 hover:text-cinian-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-cinian-light text-cinian-blue'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-cinian-dark text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-cinian-blue font-bold">此</div>
            <span className="font-bold text-xl">此念文化</span>
          </div>
          <p className="text-gray-300 mb-6 max-w-sm">
            向内探索自己，向外探索世界。
          </p>
          <div className="flex gap-4">
            {['微信', '抖音', '微博', 'YouTube'].map((social) => (
              <span key={social} className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm">
                {social}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cinian-light">探索</h3>
          <ul className="space-y-2">
            <li><Link to="/guests" className="text-gray-300 hover:text-white transition-colors">嘉宾列表</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">创始人介绍</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-cinian-light">联系我们</h3>
          <p className="text-gray-300 text-sm">中国 北京</p>
          <p className="text-gray-300 text-sm mt-2">contact@cinian.com</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} CiNian Culture. 版权所有.
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left animate-fade-in-up">
              <span className="inline-block px-3 py-1 rounded-full bg-cinian-light text-cinian-blue text-sm font-semibold mb-4 tracking-wide">
                通过不断探索，了解世界真相的俱乐部
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">向内探索自己</span>{' '}
                <span className="block text-cinian-blue xl:inline">向外探索世界</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                用双脚丈量世界，以探索洞见未知，采访全球思想领袖。加入我们这场充满好奇与勇气的旅程。
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link
                  to="/guests"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cinian-blue hover:bg-cinian-dark md:py-4 md:text-lg transition-transform transform hover:-translate-y-1 shadow-lg"
                >
                  探索嘉宾
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-cinian-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg"
                >
                  认识我们
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Cinematography"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-white/20"></div>
      </div>
    </div>
  );
};

const ValueSection = () => {
  const values = [
    { title: '有趣 (Fun)', desc: '引人入胜的叙事体验。', icon: <Heart className="text-pink-500" /> },
    { title: '好奇 (Curiosity)', desc: '提出真正重要的问题。', icon: <Search className="text-purple-500" /> },
    { title: '体验 (Experience)', desc: '沉浸式的全球探索之旅。', icon: <Globe className="text-blue-500" /> },
    { title: '勇气 (Courage)', desc: '探索未知的道路。', icon: <Eye className="text-orange-500" /> },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">我们的价值观</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            驱动我们进行内容创作的核心原则。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group">
              <div className="p-4 bg-gray-50 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(v.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Stats Section */}
      <div className="bg-cinian-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-12">我们的影响力</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="text-5xl font-extrabold mb-2 text-yellow-400">20亿+</div>
              <div className="text-lg opacity-80">全网播放量</div>
            </div>
            <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="text-5xl font-extrabold mb-2 text-yellow-400">1100万</div>
              <div className="text-lg opacity-80">全网粉丝</div>
            </div>
            <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="text-5xl font-extrabold mb-2 text-yellow-400">300+</div>
              <div className="text-lg opacity-80">制作剧集</div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="founder.jpg"
                alt="Mao Sipian"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-serif italic text-gray-600">"发现改变世界的思考者。"</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="text-cinian-blue font-bold tracking-wide uppercase text-sm mb-2">总制片人 & 访谈者</div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">毛思翩</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              此念文化创始人。她是广受好评的《生命·觉者》系列和《生命·成长》系列纪录片制作人。
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              自2016年以来，她带领团队采访了全球200多位嘉宾，探索教育、心理学和创新的交汇点。
            </p>
            <div className="flex gap-4">
               <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">#纪录片</span>
               <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">#教育</span>
               <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">#创新</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GuestsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">访谈嘉宾</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
             我们与全球思想领袖对话，记录那些改变世界的思想。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUESTS.map((guest, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-4">
                 <div className="w-12 h-12 rounded-full bg-cinian-light flex items-center justify-center text-cinian-blue group-hover:bg-cinian-blue group-hover:text-white transition-colors">
                    <span className="text-xl font-bold">{guest.name.charAt(0)}</span>
                 </div>
                 <Quote className="text-gray-200 group-hover:text-cinian-light transition-colors" size={32} />
              </div>
              
              <h3 className="font-bold text-xl text-gray-900 mb-1">{guest.name}</h3>
              <div className="text-xs font-bold text-cinian-blue uppercase tracking-wide mb-4">
                {guest.title}
              </div>
              <div className="w-10 h-1 bg-gray-100 group-hover:bg-cinian-blue mb-4 transition-all"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {guest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Logic ---

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ValueSection />
              {/* Featured Guests Preview on Home */}
              <div className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">思想领袖</h2>
                    <p className="mt-4 text-gray-500">在这个时代，我们最需要的是清醒的头脑。</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {GUESTS.slice(0, 4).map((guest, idx) => (
                        <div key={idx} className="group bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-gray-100">
                           <div className="w-16 h-16 mx-auto bg-cinian-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                              {guest.name.charAt(0)}
                           </div>
                           <h3 className="text-center font-bold text-lg mb-1">{guest.name}</h3>
                           <p className="text-center text-xs text-gray-500 uppercase tracking-wide">{guest.title}</p>
                        </div>
                     ))}
                  </div>
                  <div className="text-center mt-12">
                     <Link to="/guests" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                       查看所有嘉宾
                     </Link>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/guests" element={<GuestsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;