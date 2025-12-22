import { motion } from 'framer-motion';

export default function index({mousePosition, handle}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className="h-[120vh]" style={{clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)'}}>
        <div className="w-full h-full relative">
            <img
                key={`${handle}-background`} 
                src={`/images/${handle}/background.jpg`}
                alt="image"
                className="w-full h-full object-cover"
            />
        </div>
        <motion.div
         className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden"
         style={{x, y}}
         >
          <img
            key={`${handle}-1`}  
            src={`/images/${handle}/1.jpg`}
            alt="image"
            className="w-full h-full object-cover"
          />
        </motion.div>
    </div>
  )
}