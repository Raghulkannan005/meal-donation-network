import { motion } from 'framer-motion';
import Button from '../components/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const Landing = () => {
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex items-center justify-center px-6 min-h-[calc(100vh-120px)]">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center space-y-8"
        >
            <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
            How can you help reduce food waste today?
            </motion.h1>

            <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
            >
            <Button
                label="I Want to Donate"
                className="px-10 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            />
            <Button
                label="I Represent an Organization"
                className="px-10 py-4 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 shadow-lg"
            />
            </motion.div>

            <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
            Join our mission to connect surplus food with those in need.
            Every donation makes a difference in fighting hunger and reducing waste.
            </motion.p>
        </motion.div>
        </div>
    </div>
);
}

export default Landing;