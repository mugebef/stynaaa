import { useState } from 'react';
import { 
  Search, 
  Home, 
  Users, 
  Play, 
  Store, 
  Gamepad2, 
  Menu, 
  Bell, 
  MessageCircle, 
  Plus,
  Video,
  Image as ImageIcon,
  Smile,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Flag,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-fb-card shadow-sm z-50 flex items-center justify-between px-4">
      {/* Left */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-fb-blue rounded-full flex items-center justify-center text-white font-bold text-2xl tracking-tighter">
          S
        </div>
        <div className="hidden md:flex items-center bg-fb-bg rounded-full px-3 py-2 gap-2 w-60">
          <Search size={18} className="text-fb-secondary" />
          <input 
            type="text" 
            placeholder="Search STYN" 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Center */}
      <div className="hidden lg:flex items-center h-full gap-2">
        <NavIcon icon={<Home size={24} />} active />
        <NavIcon icon={<Users size={24} />} />
        <NavIcon icon={<Play size={24} />} />
        <NavIcon icon={<Store size={24} />} />
        <NavIcon icon={<Gamepad2 size={24} />} />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <div className="hidden xl:flex items-center gap-2 mr-2">
          <div className="w-9 h-9 rounded-full bg-fb-hover flex items-center justify-center cursor-pointer">
            <Plus size={20} />
          </div>
          <div className="w-9 h-9 rounded-full bg-fb-hover flex items-center justify-center cursor-pointer">
            <MessageCircle size={20} />
          </div>
          <div className="w-9 h-9 rounded-full bg-fb-hover flex items-center justify-center cursor-pointer">
            <Bell size={20} />
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden cursor-pointer border border-gray-200">
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
};

const NavIcon = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => (
  <div className={`h-full px-10 flex items-center justify-center cursor-pointer border-b-4 transition-colors ${active ? 'border-fb-blue text-fb-blue' : 'border-transparent text-fb-secondary hover:bg-fb-hover hover:rounded-lg h-[90%] my-auto'}`}>
    {icon}
  </div>
);

const SidebarItem = ({ icon, label, color = "text-fb-blue" }: { icon: React.ReactNode; label: string; color?: string }) => (
  <div className="flex items-center gap-3 p-2 hover:bg-fb-hover rounded-lg cursor-pointer transition-colors">
    <div className={color}>{icon}</div>
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const Post = ({ author, time, content, image, likes, comments }: any) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-fb-card rounded-lg shadow-sm mb-4 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src={`https://picsum.photos/seed/${author}/100/100`} alt={author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h4 className="font-semibold text-sm hover:underline cursor-pointer">{author}</h4>
              <p className="text-xs text-fb-secondary">{time}</p>
            </div>
          </div>
          <button className="text-fb-secondary hover:bg-fb-hover p-2 rounded-full">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <p className="mt-3 text-sm">{content}</p>
      </div>
      
      {image && (
        <div className="w-full bg-gray-100">
          <img src={image} alt="Post content" className="w-full max-h-[500px] object-contain" referrerPolicy="no-referrer" />
        </div>
      )}

      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-1 text-fb-secondary text-sm">
          <div className="bg-fb-blue rounded-full p-1">
            <ThumbsUp size={12} className="text-white fill-current" />
          </div>
          <span>{likes + (liked ? 1 : 0)}</span>
        </div>
        <div className="text-fb-secondary text-sm hover:underline cursor-pointer">
          {comments} comments
        </div>
      </div>

      <div className="px-1 py-1 flex items-center justify-around">
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-fb-hover transition-colors ${liked ? 'text-fb-blue' : 'text-fb-secondary'}`}
        >
          <ThumbsUp size={20} className={liked ? 'fill-current' : ''} />
          <span className="font-semibold text-sm">Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-fb-hover text-fb-secondary transition-colors">
          <MessageSquare size={20} />
          <span className="font-semibold text-sm">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-fb-hover text-fb-secondary transition-colors">
          <Share2 size={20} />
          <span className="font-semibold text-sm">Share</span>
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-fb-bg">
      <Navbar />

      <main className="pt-14 flex justify-center">
        {/* Left Sidebar */}
        <aside className="hidden xl:block fixed left-0 top-14 w-[300px] h-[calc(100vh-56px)] overflow-y-auto p-2">
          <SidebarItem icon={<div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"><img src="https://picsum.photos/seed/user/100/100" alt="Me" referrerPolicy="no-referrer" /></div>} label="User Name" />
          <SidebarItem icon={<Users size={24} />} label="Friends" color="text-blue-500" />
          <SidebarItem icon={<Bookmark size={24} />} label="Saved" color="text-purple-500" />
          <SidebarItem icon={<Users size={24} />} label="Groups" color="text-blue-600" />
          <SidebarItem icon={<Play size={24} />} label="Video" color="text-blue-400" />
          <SidebarItem icon={<Store size={24} />} label="Marketplace" color="text-blue-500" />
          <SidebarItem icon={<Bell size={24} />} label="Memories" color="text-blue-400" />
          <SidebarItem icon={<Menu size={24} />} label="See more" color="text-gray-500" />
          
          <div className="border-t border-gray-300 my-4 mx-2"></div>
          <h3 className="px-2 font-semibold text-fb-secondary text-base mb-2">Your Shortcuts</h3>
          <SidebarItem icon={<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">G</div>} label="Gaming Group" />
          <SidebarItem icon={<div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">D</div>} label="Developers Hub" />
        </aside>

        {/* Feed */}
        <section className="w-full max-w-[680px] px-4 py-6">
          <AnimatePresence>
            {showWelcome && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gradient-to-r from-fb-blue to-blue-600 rounded-lg p-8 mb-6 text-white shadow-lg relative overflow-hidden"
              >
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl font-bold mb-2">WELCOME TO STYN</h1>
                  <p className="text-blue-100 text-lg">Connect with friends and the world around you on STYN.</p>
                </motion.div>
                <div className="absolute -bottom-4 -right-4 opacity-20 rotate-12">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-fb-blue font-black text-8xl">S</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stories */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            <div className="min-w-[110px] h-[200px] bg-fb-card rounded-xl shadow-sm overflow-hidden cursor-pointer group relative">
              <div className="h-[75%] overflow-hidden">
                <img src="https://picsum.photos/seed/user/200/300" alt="Me" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-fb-card flex flex-col items-center justify-center">
                <div className="absolute -top-5 w-10 h-10 bg-fb-blue rounded-full border-4 border-fb-card flex items-center justify-center text-white">
                  <Plus size={24} />
                </div>
                <span className="text-xs font-semibold mt-4">Create story</span>
              </div>
            </div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="min-w-[110px] h-[200px] bg-gray-300 rounded-xl shadow-sm overflow-hidden cursor-pointer group relative">
                <img src={`https://picsum.photos/seed/story${i}/200/300`} alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="absolute top-2 left-2 w-9 h-9 rounded-full border-4 border-fb-blue overflow-hidden">
                  <img src={`https://picsum.photos/seed/author${i}/100/100`} alt="Author" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold drop-shadow-md">
                  Friend {i}
                </div>
              </div>
            ))}
          </div>

          {/* Create Post */}
          <div className="bg-fb-card rounded-lg shadow-sm p-4 mb-4">
            <div className="flex gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://picsum.photos/seed/user/100/100" alt="Me" referrerPolicy="no-referrer" />
              </div>
              <button className="flex-1 bg-fb-bg hover:bg-fb-hover rounded-full px-4 text-left text-fb-secondary transition-colors">
                What's on your mind, User?
              </button>
            </div>
            <div className="border-t border-gray-100 pt-2 flex items-center justify-around">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-fb-hover transition-colors">
                <Video size={24} className="text-red-500" />
                <span className="font-semibold text-sm text-fb-secondary">Live video</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-fb-hover transition-colors">
                <ImageIcon size={24} className="text-green-500" />
                <span className="font-semibold text-sm text-fb-secondary">Photo/video</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-fb-hover transition-colors">
                <Smile size={24} className="text-yellow-500" />
                <span className="font-semibold text-sm text-fb-secondary">Feeling/activity</span>
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <Post 
            author="Alex Rivera" 
            time="2 hours ago" 
            content="Just finished setting up the new STYN platform! What do you guys think? 🚀" 
            image="https://picsum.photos/seed/tech/800/450"
            likes={42}
            comments={12}
          />
          <Post 
            author="Sarah Chen" 
            time="5 hours ago" 
            content="Beautiful sunset today at the park. Nature is amazing! 🌅" 
            image="https://picsum.photos/seed/nature/800/600"
            likes={128}
            comments={24}
          />
          <Post 
            author="STYN Official" 
            time="Yesterday" 
            content="Welcome to the future of social networking. We are glad to have you here!" 
            likes={1024}
            comments={56}
          />
        </section>

        {/* Right Sidebar */}
        <aside className="hidden lg:block fixed right-0 top-14 w-[300px] h-[calc(100vh-56px)] overflow-y-auto p-2">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="font-semibold text-fb-secondary text-base">Contacts</h3>
            <div className="flex gap-2 text-fb-secondary">
              <Video size={16} className="cursor-pointer hover:bg-fb-hover rounded-full" />
              <Search size={16} className="cursor-pointer hover:bg-fb-hover rounded-full" />
              <MoreHorizontal size={16} className="cursor-pointer hover:bg-fb-hover rounded-full" />
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="flex items-center gap-3 p-2 hover:bg-fb-hover rounded-lg cursor-pointer transition-colors">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
                  <img src={`https://picsum.photos/seed/contact${i}/100/100`} alt="Contact" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-fb-bg rounded-full"></div>
              </div>
              <span className="font-medium text-sm">Contact Name {i}</span>
            </div>
          ))}
          
          <div className="border-t border-gray-300 my-4 mx-2"></div>
          <h3 className="px-2 font-semibold text-fb-secondary text-base mb-2">Group conversations</h3>
          <SidebarItem icon={<Plus size={24} />} label="Create new group" color="text-gray-500" />
        </aside>
      </main>
    </div>
  );
}
